const serviceSelect = document.querySelector("#service");

async function loadServicesIntoForm() {
    try {
        const response = await fetch("data/services.json");
        const services = await response.json();

        services.forEach(service => {
            const option = document.createElement("option");
            option.value = service.name;
            option.textContent = service.name;
            serviceSelect.appendChild(option);
        });

    } catch (error) {
        console.error("Error loading services:", error);
    }
}

loadServicesIntoForm();
