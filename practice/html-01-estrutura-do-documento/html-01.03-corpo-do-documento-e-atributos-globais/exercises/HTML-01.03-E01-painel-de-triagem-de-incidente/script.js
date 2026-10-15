const button_Filters = document.querySelectorAll("button");
const INCIDENTS_DATA = document.querySelectorAll("#incidentPanel tr");

let incidentPanel = document.getElementById('incidentPanel');
let filterSelectedInfo = document.getElementById('filterSelected');
let filterQuantityResultInfo = document.getElementById('filterQuantityResult');


function incidentFiltering (incidentOption)
{
    if(incidentOption === 'all'){
        incidentInfoChange('Todos', INCIDENTS_DATA.length)

        return INCIDENTS_DATA;
    }

    let filteredIncidents = Array.from(INCIDENTS_DATA).filter( incident => {
        
        if(incident.dataset.status === incidentOption)
            return incident
        if(incident.dataset.priority === incidentOption)
            return incident})

    incidentInfoChange(incidentOption, filteredIncidents.length);

    return filteredIncidents
}

function panelIncidentConstruction(filteredArray){

    incidentPanel.replaceChildren();

    filteredArray.forEach(incident => {
        incidentPanel.appendChild(incident);
    })
} 

function incidentInfoChange(incidentType, incidentQuantity){
    filterSelectedInfo.textContent = incidentType[0].toUpperCase() + incidentType.slice(1);
    filterQuantityResultInfo.textContent = incidentQuantity;
}

    
incidentInfoChange('Todos', INCIDENTS_DATA.length)

button_Filters.forEach( button => {
    
    button.addEventListener('click', () => {

        button_Filters.forEach(filterButton => {
            filterButton.classList.remove('buttonActive');
            filterButton.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('buttonActive');
        button.setAttribute('aria-pressed', 'true');

        let incidentType = button.dataset.filtertype;

        let incidentArray = incidentFiltering(incidentType);

        panelIncidentConstruction(incidentArray); 
    })
});



