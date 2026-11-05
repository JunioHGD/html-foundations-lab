const servicesContainer = document.getElementById("servicesContainer");
const serviceDetailsContainer = document.getElementById("serviceDetailsContainer");
const servicesFilter = document.querySelectorAll(".filter");
const servicesCountInfo = document.getElementById("servicesCount");  

/*Service Filter Function */
function serviceFilter(activeController)
{
    return window.servicesData.filter(service => service.status === activeController);
}

/*Service card construction function */
function serviceCardConstruction(serviceStructure)
{
    if (serviceStructure.length === 0) return;

    const serviceFilteredContainer = document.createElement("article");
    const filteredContainerTitle = document.createElement("h2");
    filteredContainerTitle.textContent = `Serviço: ${serviceStructure[0].statusLabel}`;
    
    servicesContainer.append(filteredContainerTitle, serviceFilteredContainer);


    serviceStructure.forEach(service => {

        let serviceCard = document.createElement("section");
        serviceCard.dataset.status = service.status;

        let ordenedAtributeServicesSection = document.createElement("ol");
                
        let nameAtribute = document.createElement("li");
        nameAtribute.textContent = `Nome: ${service.name}`;

        let statusAtribute = document.createElement("li");
        statusAtribute.textContent = `Status: ${service.statusLabel}`;

        let uptimeAtribute = document.createElement("li");
        uptimeAtribute.textContent = `Disponibilidade: ${service.uptime}`;

        let latencyAtribute = document.createElement("li");
        latencyAtribute.textContent = `Latência: ${service.latency}`;

        let lastUpdatedAtribute = document.createElement("li");
        lastUpdatedAtribute.textContent = `Última atualização: ${service.lastUpdated}`;

        let descriptionAtribute = document.createElement("li");
        descriptionAtribute.textContent = `Descrição: ${service.description}`;

        let serviceDetails = document.createElement("button");
        serviceDetails.textContent = "Ver detalhes";
        serviceDetails.addEventListener("click", () => 
        {   
            serviceDetailsContainer.replaceChildren();
            let ordenedAtributeServicesDetails = (ordenedAtributeServicesSection.cloneNode(true));
            ordenedAtributeServicesDetails.append(lastUpdatedAtribute, descriptionAtribute);
            serviceDetailsContainer.append(ordenedAtributeServicesDetails);
        })

        ordenedAtributeServicesSection.append(nameAtribute, statusAtribute, uptimeAtribute, latencyAtribute);
            
        serviceCard.append(ordenedAtributeServicesSection, serviceDetails);
        serviceFilteredContainer.append(serviceCard);
    })

}

/*Service Display Function*/
function servicesInfoShow(activeController)
{ 
    servicesContainer.replaceChildren();
    serviceDetailsContainer.children[0].textContent = "Selecione um serviço para visualizar os detalhes.";

    if(activeController === "allType")
        {                                        
            const serviceGroups = [
                serviceFilter("operational"),
                serviceFilter("degraded"),
                serviceFilter("outage")
            ];

            serviceGroups.forEach(group => {
                serviceCardConstruction(group);
            });

            servicesCountInfo.textContent = `Exibindo ${window.servicesData.length} de ${window.servicesData.length} serviços`;

        }
    else
        {
            let filteredServices = serviceFilter(activeController);
            servicesCountInfo.textContent = `Exibindo ${filteredServices.length} de ${window.servicesData.length} serviços`;
            
            serviceCardConstruction(filteredServices);
        }

}

servicesFilter.forEach(filter => {

    filter.addEventListener("click", () => {

        servicesFilter.forEach(button => {
            button.classList.remove("activeFilter");
        });

        filter.classList.add("activeFilter");
        let filterState = filter.dataset.status;
        servicesInfoShow(filterState);
    })
})


const serviceFixData = document.getElementById("allServices");
    
serviceFixData.children[0].textContent = `Todos os serviços: ${window.servicesData.length}`;
serviceFixData.children[1].textContent = `Operacionais: ${serviceFilter("operational").length}`;
serviceFixData.children[2].textContent = `Degradados: ${serviceFilter("degraded").length}`;
serviceFixData.children[3].textContent = `Indisponíveis: ${serviceFilter("outage").length}`;

servicesInfoShow("allType");





        