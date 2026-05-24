const config = window.portfolioConfig || {};
const header = document.querySelector("[data-header]");

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const setText = (key, value) => {
  if (!value) return;
  document.querySelectorAll(`[data-config-text="${key}"]`).forEach((element) => {
    element.textContent = value;
  });
};

const setLink = (key, value) => {
  document.querySelectorAll(`[data-config-link="${key}"]`).forEach((element) => {
    if (!value && element.hasAttribute("data-hide-if-empty")) {
      element.hidden = true;
      return;
    }

    if (!value) return;
    element.hidden = false;
    element.href = key === "email" ? `mailto:${value}` : value;
  });
};

const applyConfig = () => {
  const fullName = config.fullName || "Portfolio";
  const initials = config.initials || getInitials(fullName);

  document.title = `${fullName} | Portfolio technique`;

  const metaDescription = document.querySelector('[data-config-meta="description"]');
  if (metaDescription && config.metaDescription) {
    metaDescription.setAttribute("content", config.metaDescription);
  }

  setText("fullName", fullName);
  setText("initials", initials);
  setText("role", config.role);
  setText("email", config.email);

  setLink("github", config.githubUrl);
  setLink("email", config.email);
  setLink("cv", config.cvUrl);

  const photo = config.photo || {};
  const photoWrapper = document.querySelector("[data-profile-photo]");
  const photoImage = document.querySelector("[data-profile-photo-img]");

  if (photoWrapper && photoImage && photo.show && photo.src) {
    photoImage.src = photo.src;
    photoImage.alt = photo.alt || `Portrait de ${fullName}`;
    photoWrapper.hidden = false;
  }
};

applyConfig();

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const updateHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
