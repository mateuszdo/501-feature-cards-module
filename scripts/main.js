// Target feature cards container by ID
const container = document.getElementById("featureCards");

// Fetch cards data from Contentful CMS
async function loadCards() {
  const response = await fetch("/.netlify/functions/cards");
  const data = await response.json();

  // Contentful REST API returns linked assets in a separate includes.Asset array.
  // Build a lookup map keyed by asset ID so each card can resolve its image URL.
  const assets = {};
  data.includes.Asset.forEach((asset) => {
    assets[asset.sys.id] = asset.fields.file.url;
  });

  // Contentful returns entries as an array under data.items
  data.items.forEach((item) => {
    const card = item.fields;
    // Resolve image URL by matching the card's asset reference ID to the lookup map
    const imageUrl = assets[card.image.sys.id];
    // Create article element for each card
    const article = document.createElement("article");
    // Add card class
    article.className = "feature-card";
    // Generate card structure
    article.innerHTML = `
      <div class="feature-card__image-wrapper">
        <img src="https:${imageUrl}" alt="${card.alt}"/>
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
