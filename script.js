function startFitoplanctonMap() {
    alert('Mapa do Fitoplâncton em desenvolvimento!');
}

function simulateCO2() {
    alert('Simulação de Fluxos de CO2 em desenvolvimento!');
}

function runAerosolExperiment() {
    alert('Experimento com Aerossóis em desenvolvimento!');
}

function startGame() {
    window.location='jogo.html';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in').forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
        }, index * 500); // Delay para cada seção aparecer
    });
});
