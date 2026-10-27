const criteriaTableBody = document.getElementById('criterionPanel');
const criterionRows = document.querySelectorAll(".criterionInfo"); 
const filterButtons = document.querySelectorAll(".filterType");
const criterionStateButtons = document.querySelectorAll(".stateChange");



const resetButton = document.getElementById('resetButton');

const releasePublicationButton = document.getElementById('concludedCriteriaButton');
releasePublicationButton.disabled = true;

const totalCriteriaCountCell = document.getElementById('totalCriteria');
let publicationStatusText = document.getElementById('statusInfo');
let completedCriteriaCountCell = document.getElementById('concludedCriteria')
let pendingCriteriaCountCell = document.getElementById('pendingCriteria')
let pendingCriticalCriteriaCountCell = document.getElementById('pendingCritical')

let publicationStatusBanner = document.getElementById('currentStatusInfo');
const visibleCriteriaCount = document.getElementById('visibleCriteriaCount');
const emptyFilterMessage = document.getElementById('emptyFilterMessage');

const historyList = document.getElementById('criterionHistoryList');
let historyEntries = [];
let emptyHistoryMessage = document.getElementById('historyMessage');
emptyHistoryMessage.textContent = 'Nenhuma ação registrada.';

const pendingCriticalCriteriaList = document.getElementById('criterionCriticalPanel');
let emptyCriticalCriteriaMessage = document.getElementById('criterionStatusInfo');
emptyCriticalCriteriaMessage.hidden = true;



function updateReleaseAvailability(criteriaRows){
    
    let pendingCriticalRows = Array.from(criteriaRows).filter(criterionRow => {
        
        if(criterionRow.querySelector('td[data-state]').dataset.state === 'pending' && criterionRow.querySelector('td[data-priority]').dataset.priority === 'critical')
            return criterionRow

    });

    if(pendingCriticalRows.length == 0){
        releasePublicationButton.disabled = false;
        publicationStatusText.textContent = 'Apta para liberação.';
        publicationStatusBanner.textContent = 'Publicação apta para liberação';
        window.alert("Publicação pronta para liberação.");        
    }
    else{
        releasePublicationButton.disabled = true;
        publicationStatusBanner.textContent = 'Publicação inapta para liberação';
        publicationStatusText.textContent = 'Bloqueado';
    }

    document.querySelector('.page-header').classList.toggle('is-ready', pendingCriticalRows.length === 0);

    return pendingCriticalRows

}

function updateCriteriaSummary(criteriaRows)
{
    totalCriteriaCountCell.textContent = criterionRows.length;

    let completedCriterionRows = Array.from(criterionRows).filter(criterionRow => {

        if(criterionRow.querySelector('td[data-state]').dataset.state === 'concluded')
            return criterionRow

    });

    completedCriteriaCountCell.textContent = completedCriterionRows.length;

    let pendingCriterionRows = Array.from(criterionRows).filter(criterionRow => {
        
        if(criterionRow.querySelector('td[data-state]').dataset.state === 'pending')
            return criterionRow

    });

    pendingCriteriaCountCell.textContent = pendingCriterionRows.length; 
    
    let pendingCriticalRows = updateReleaseAvailability(criterionRows);

    pendingCriticalCriteriaCountCell.textContent = pendingCriticalRows.length;
    
    if(pendingCriticalRows.length > 0){
        
        pendingCriticalCriteriaList.replaceChildren();

        emptyCriticalCriteriaMessage.hidden = true;

        pendingCriticalRows.forEach(pendingCriticalRow => {
            let listItem = document.createElement('li');

            let criterionDetailsList = document.createElement('dl');
            listItem.appendChild(criterionDetailsList);

            let codeLabel = document.createElement('dt');
            codeLabel.textContent = 'Código:';
            let codeValue = document.createElement('dd');
            codeValue.textContent = pendingCriticalRow.dataset.code;

            let areaLabel = document.createElement('dt');
            areaLabel.textContent = 'Área:';
            let areaValue = document.createElement('dd');
            areaValue.textContent = pendingCriticalRow.querySelector('td[data-area]').dataset.area;

            let criterionLabel = document.createElement('dt');
            criterionLabel.textContent = 'Critério:';
            let criterionDescription = document.createElement('dd');
            criterionDescription.textContent = pendingCriticalRow.querySelector('td[data-criterion]').dataset.criterion;

            criterionDetailsList.append(codeLabel, codeValue, areaLabel, areaValue, criterionLabel, criterionDescription);
            pendingCriticalCriteriaList.appendChild(listItem);
        })
    }
    else{
        pendingCriticalCriteriaList.replaceChildren();
        emptyCriticalCriteriaMessage.hidden = false;
        emptyCriticalCriteriaMessage.textContent = 'Não há critérios críticos pendentes';
    }
}

function toggleCriterionState(criterionCode) 
{
    criterionRows.forEach(criterionRow => {

        if(criterionRow.dataset.code === criterionCode){
            
            let dependencyCode = criterionRow.querySelector('td[data-dependence]').dataset.dependence;

            if(criterionRow.querySelector('td[data-state]').dataset.state === 'pending')
                {
                    if(dependencyCode === 'none'){

                        criterionRow.querySelector('td[data-state]').dataset.state = 'concluded';
                        criterionRow.querySelector('td[data-state]').textContent = 'Concluído';
                        criterionRow.querySelector('button').textContent = 'Pendente';
                    }
                    else{

                        criterionRows.forEach(candidateCriterionRow =>{

                            if(candidateCriterionRow.dataset.code === dependencyCode){

                                if(candidateCriterionRow.querySelector('td[data-state]').dataset.state === 'concluded'){

                                    criterionRow.querySelector('td[data-state]').dataset.state = 'concluded';
                                    criterionRow.querySelector('td[data-state]').textContent = 'Concluído';
                                    criterionRow.querySelector('button').textContent = 'Pendente';

                                }
                                else{
                                    window.alert('Impossível concluir, critério atual ainda há dependências pendentes');
                                }

                            }

                        })
                    }

                    criterionRow.classList.remove('criterionConcluded');
                    criterionRow.classList.add('criterionStand');
                    recordCriterionHistory(criterionRow);

                }
            else{

                    criterionRow.querySelector('td[data-state]').dataset.state = 'pending';
                    criterionRow.querySelector('td[data-state]').textContent = 'Pendente';
                    criterionRow.querySelector('button').textContent = 'Concluído';
                    
                    criterionRow.classList.remove('criterionStand');
                    criterionRow.classList.add('criterionConcluded');

                    let revertedDependentRows = [];

                    criterionRows.forEach(candidateCriterionRow => {

                        if(candidateCriterionRow.querySelector('td[data-dependence]').dataset.dependence === criterionCode && candidateCriterionRow.querySelector('td[data-state]').dataset.state === 'concluded')
                            {
                                candidateCriterionRow.querySelector('td[data-state]').dataset.state = 'pending';
                                candidateCriterionRow.querySelector('td[data-state]').textContent = 'Pendente';
                                candidateCriterionRow.querySelector('button').textContent = 'Concluido';

                                revertedDependentRows.push(candidateCriterionRow);
                            }
                    })
                
                    recordCriterionHistory(criterionRow, revertedDependentRows);        
                }
        }
    }) 

    updateCriteriaSummary(criterionRows);
    updateCriterionButtons();
}

function recordCriterionHistory(changedCriterionRow, revertedDependentRows = []){
    
    historyList.replaceChildren();

    let listItem = document.createElement('li');

    let criterionDetailsList = document.createElement('dl');
    listItem.appendChild(criterionDetailsList);

    let codeLabel = document.createElement('dt');
    codeLabel.textContent = 'Código:';
    let codeValue = document.createElement('dd');
    codeValue.textContent = changedCriterionRow.dataset.code;

    let areaLabel = document.createElement('dt');
    areaLabel.textContent = 'Área:';
    let areaValue = document.createElement('dd');
    areaValue.textContent = changedCriterionRow.querySelector('td[data-area]').dataset.area;

    let criterionLabel = document.createElement('dt');
    criterionLabel.textContent = 'Critério:';
    let criterionDescription = document.createElement('dd');
    criterionDescription.textContent = changedCriterionRow.querySelector('td[data-criterion]').dataset.criterion;

    criterionDetailsList.append(codeLabel, codeValue, areaLabel, areaValue, criterionLabel, criterionDescription);
    
    let stateChangeMessage = document.createElement('p');

    stateChangeMessage.textContent = `Estado atual: ${changedCriterionRow.querySelector('td[data-state]').textContent}`;

    let dependentChangesSection = document.createElement('section');

    if(revertedDependentRows.length > 0)
    {
        revertedDependentRows.forEach(dependentCriterionRow =>{

            let dependentChangeMessage = document.createElement('p');
            
            dependentChangeMessage.textContent = `Dependente >> Criterio: ${dependentCriterionRow.querySelector('td[data-criterion]').dataset.criterion} Código: ${dependentCriterionRow.dataset.code} - Estado atual: Desabilitado`;

            dependentChangesSection.appendChild(dependentChangeMessage);
        })
    }

    listItem.append(stateChangeMessage,dependentChangesSection);
    
    historyEntries.unshift(listItem);

    if (historyEntries.length > 5)
    {
        historyEntries.pop();
    }

    emptyHistoryMessage.hidden = historyEntries.length > 0;

    historyEntries.forEach( historyEntry =>{
        historyList.appendChild(historyEntry);
    })

    
}

function filterCriteria(filterValue)
{
    if(filterValue === 'all')
        {
            return Array.from(criterionRows) 
        }

    let filteredCriterionRows = Array.from(criterionRows).filter(criterionRow => {
        
        if(criterionRow.querySelector('td[data-priority]').dataset.priority === filterValue){
            return criterionRow
        }

        if(criterionRow.querySelector('td[data-state]').dataset.state === filterValue){
            return criterionRow
        }
    })

    return filteredCriterionRows;
}

function renderCriteriaTable(filteredCriterionRows)
{
    criteriaTableBody.replaceChildren();
    visibleCriteriaCount.textContent = `${filteredCriterionRows.length} de ${criterionRows.length} critérios`;
    emptyFilterMessage.hidden = filteredCriterionRows.length > 0;

    filteredCriterionRows.forEach(criterionRow => {
        criteriaTableBody.appendChild(criterionRow);
    })
}

filterButtons.forEach(button =>{
    
    button.addEventListener('click', () =>{

        let selectedFilterValue = button.dataset.filtertype;

        let filteredCriterionRows = filterCriteria(selectedFilterValue);

        renderCriteriaTable(filteredCriterionRows);
        filterButtons.forEach(filterButton => {
            filterButton.setAttribute('aria-pressed', String(filterButton === button));
        });

    })
})

function updateCriterionButtons() {
    criterionRows.forEach(criterionRow => {
        const button = criterionRow.querySelector('button');
        const isConcluded = criterionRow.querySelector('td[data-state]').dataset.state === 'concluded';
        button.textContent = isConcluded ? 'Marcar pendente' : 'Concluir';
        button.setAttribute('aria-label', button.textContent + ': ' + criterionRow.dataset.code);
    });
}

updateCriterionButtons();

criterionStateButtons.forEach(button =>{

    button.addEventListener('click', () =>{

        let selectedCriterionCode = button.dataset.code;

        toggleCriterionState(selectedCriterionCode);
    })
})

resetButton.addEventListener('click', () =>{
    window.location.reload();
})


releasePublicationButton.addEventListener('click', () =>{

    document.title = "Atlas v:2.4.0 - Janela de Publicação - Liberado";
    publicationStatusText.textContent = 'Liberado.';

    let listItem = document.createElement('li');
    let releaseConfirmationMessage = document.createElement('p');
    releaseConfirmationMessage.textContent = 'Critérios essenciais concluídos - Estado liberado.';
    listItem.appendChild(releaseConfirmationMessage);

    historyList.replaceChildren();
    historyList.appendChild(listItem);

    pendingCriticalCriteriaList.replaceChildren();
    pendingCriticalCriteriaList.hidden = true;
    emptyCriticalCriteriaMessage.textContent = 'Não há critérios críticos pendentes';

    criterionStateButtons.forEach(button =>{
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    })


    releasePublicationButton.disabled = true;
    releasePublicationButton.style.cursor = 'not-allowed';
    publicationStatusBanner.textContent = 'Publicação liberada';

})

updateCriteriaSummary(criterionRows);
updateReleaseAvailability(criterionRows);


renderCriteriaTable(Array.from(criterionRows));
