// Target feature cards container by ID
const container = document.getElementById("featureCards");

// Fetch cards data from contentful cms
async function loadCards() {
  const response = await fetch("/.netlify/functions/cards");
  const data = await response.json();
  // Contentful return items
  data.items.forEach((item) => {
    const card = item.fields;
    // Create article element for each card
    const article = document.createElement("article");
    // Add card class
    article.className = "feature-card";
    // Generate card structure
    article.innerHTML = `
      <div class="feature-card__image-wrapper">
        <img src="https:${card.image.fields.file.url}" alt="${card.alt}"/>
      </div>

      <div class="feature-card__content">
        <p class="feature-card__label">${card.label}</p>
        <h3 class="feature-card__value">${card.value}</h3>
        <p class="feature-card__text">${card.text}</p>
      </div>
    `;
    // Append card to container
    container.appendChild(article);
  });
}

loadCards();
