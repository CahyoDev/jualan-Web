
document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/services')
        .then(response => response.json())
        .then(data => {
            const servicesContainer = document.getElementById('services');
            data.forEach(service => {
                const serviceDiv = document.createElement('div');
                serviceDiv.style.border = "1px solid #ddd";
                serviceDiv.style.padding = "1rem";
                serviceDiv.style.textAlign = "center";
                serviceDiv.style.width = "200px";
                serviceDiv.innerHTML = `
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <p><strong>Price:</strong> $${service.price}</p>
                `;
                servicesContainer.appendChild(serviceDiv);
            });
        })
        .catch(err => console.error(err));
});
