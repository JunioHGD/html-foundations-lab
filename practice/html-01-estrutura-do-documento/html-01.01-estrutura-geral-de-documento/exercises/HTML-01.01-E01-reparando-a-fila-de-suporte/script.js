const filterButtons = document.querySelectorAll(".filter-button");
const tickets = document.querySelectorAll(".ticket");
const summary = document.querySelector("#summary");
const detailButtons = document.querySelectorAll(".details-toggle");

function applyFilter(status) {
  let visibleCount = 0;

  tickets.forEach((ticket) => {
    const shouldShow = status === "all" || ticket.dataset.status === status;
    ticket.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  summary.textContent = `${visibleCount} de ${tickets.length} chamados`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter(button.dataset.filter);
  });
});

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const ticket = button.closest(".ticket");
    const details = ticket.querySelector(".ticket-details");
    const willOpen = details.hidden;

    details.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "Ocultar detalhes" : "Detalhes";
  });
});
