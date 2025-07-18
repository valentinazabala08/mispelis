
document.addEventListener("DOMContentLoaded", () => {
        const buscador = document.querySelector(".form-control");

        buscador.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault(); 
                alert("Buscando: " + buscador.value);
            }
        });
    });
