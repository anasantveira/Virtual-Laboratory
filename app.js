// Elementos DOM
const ecosystemCanvas = document.getElementById('ecosystemCanvas');
const ctx = ecosystemCanvas.getContext('2d');
const roleButtons = document.querySelectorAll('.role-btn');
const actionSelect = document.getElementById('actionSelect');
const executeActionBtn = document.getElementById('executeActionBtn');
const ecosystemMetrics = document.getElementById('ecosystemMetrics');

// Função para carregar e desenhar uma imagem no canvas
function drawImage(src) {
    const img = new Image();
    img.src = src;
    img.onload = function() {
      // Limpa o canvas antes de desenhar a nova imagem
      ctx.clearRect(0, 0, ecosystemCanvas.width, ecosystemCanvas.height);
      ctx.drawImage(img, 0, 0, 350, 150); // Desenha a nova imagem
    };
  }

//drawImage('/imgs/polluted.jpg');
// Função para desenhar o ecossistema
function drawEcosystem(status) {
  ctx.clearRect(0, 0, ecosystemCanvas.width, ecosystemCanvas.height);

  // Exemplo básico: Representação gráfica do ecossistema
  if (status === 'polluted') {
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, ecosystemCanvas.width, ecosystemCanvas.height);
    ctx.fillStyle = 'red';
    ctx.font = '10px Arial';
    drawImage('polluted.jpg');
    ctx.fillText('Polluted Ecosystem', 210, 148);
  } else if (status === 'healthy') {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, ecosystemCanvas.width, ecosystemCanvas.height);
    ctx.fillStyle = 'green';
    ctx.font = '10px Arial';
    drawImage('healthy.jpg');
    ctx.fillText('Healthy Ecosystem', 210, 148);
  } else {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, ecosystemCanvas.width, ecosystemCanvas.height);
    ctx.fillStyle = 'yellow';
    ctx.font = '10px Arial';
    ctx.fillText('Threatened Ecosystem', 210, 148);
  }
}

// Estado inicial
let ecosystemState = 'polluted';
drawEcosystem(ecosystemState);

// Função para alterar o papel escolhido
roleButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const role = event.target.textContent;
    alert(`You chose ${role}`);
  });
});

// Função para executar ações
executeActionBtn.addEventListener('click', () => {
  const selectedAction = actionSelect.value;

  if (selectedAction === 'introduceSpecies') {
    alert('Introduced species!');
    ecosystemState = 'healthy';
    ecosystemMetrics.textContent = 'Healthy';
  } else if (selectedAction === 'reducePollution') {
    alert('Reduced pollution!');
    ecosystemState = 'healthy';
    ecosystemMetrics.textContent = 'Healthy';
  } else if (selectedAction === 'rehabilitateCoral') {
    alert('Corals rehabilitated!');
    ecosystemState = 'healthy';
    ecosystemMetrics.textContent = 'Healthy';
  }

  // Atualizar visualização do ecossistema
  drawEcosystem(ecosystemState);
});
