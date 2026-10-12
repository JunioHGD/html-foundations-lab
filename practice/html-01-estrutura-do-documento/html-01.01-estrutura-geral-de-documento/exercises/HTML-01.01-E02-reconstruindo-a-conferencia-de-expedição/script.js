const panel = document.querySelector(".batch-panel"); // <main>
const items = document.querySelectorAll(".check-item"); 
const progressText = document.querySelector("#progressText"); 
const progressFill = document.querySelector("#progressFill");  
const releaseButton = document.querySelector("#releaseBatch"); 
const statusMessage = document.querySelector("#statusMessage"); 

function updateProgress() {
  const completedCount = Array.from(items).filter((item) =>
    item.classList.contains("is-complete")
  ).length;

  const percentage = items.length === 0 ? 0 : (completedCount / items.length) * 100;
  const allComplete = items.length > 0 && completedCount === items.length;

  progressText.textContent = `${completedCount} de ${items.length} etapas concluídas`;
  progressFill.style.width = `${percentage}%`;
  releaseButton.disabled = !allComplete;
  statusMessage.textContent = allComplete
    ? "Todas as etapas foram concluídas. O lote pode ser liberado."
    : "Aguardando conclusão das etapas.";
}

items.forEach((item) => {
  const toggle = item.querySelector(".check-toggle");
  const state = item.querySelector(".check-state");

  toggle.addEventListener("click", () => {
    if (panel.classList.contains("is-released")) {
      return;
    }

    const completed = item.classList.toggle("is-complete");

    state.textContent = completed ? "Concluído" : "Pendente";
    toggle.textContent = completed ? "Reabrir etapa" : "Marcar como concluída";
    toggle.setAttribute("aria-pressed", String(completed));

    updateProgress();
  });
});

releaseButton.addEventListener("click", () => {
  if (releaseButton.disabled) {
    return;
  }

  panel.classList.add("is-released");
  statusMessage.textContent = "Lote liberado para expedição.";
  releaseButton.textContent = "Lote liberado";
  releaseButton.disabled = true;

  items.forEach((item) => {
    item.querySelector(".check-toggle").disabled = true;
  });
});

updateProgress();
