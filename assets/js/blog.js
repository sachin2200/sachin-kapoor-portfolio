(() => {
  "use strict";

  const grid = document.querySelector("[data-blog-grid]");
  const emptyState = document.querySelector("[data-blog-empty]");
  const searchInput = document.querySelector("[data-blog-search]");
  const categorySelect = document.querySelector("[data-blog-category]");
  const resultCount = document.querySelector("[data-result-count]");

  if (!grid || !emptyState || !searchInput || !categorySelect || !resultCount) return;

  const posts = Array.isArray(window.PORTFOLIO_BLOG_POSTS)
    ? [...window.PORTFOLIO_BLOG_POSTS]
    : [];

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));

  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const createCard = (post, index) => {
    const article = createElement(
      "article",
      `blog-card reveal is-visible${post.featured ? " blog-card-featured" : ""}`,
    );
    article.style.setProperty("--reveal-delay", `${Math.min(index * 50, 200)}ms`);

    if (post.image) {
      const imageLink = createElement("a", "blog-card-image");
      imageLink.href = post.url;
      imageLink.setAttribute("aria-label", `Read ${post.title}`);
      const image = document.createElement("img");
      image.src = post.image;
      image.alt = post.imageAlt || "";
      image.loading = "lazy";
      image.decoding = "async";
      imageLink.append(image);
      article.append(imageLink);
    }

    const body = createElement("div", "blog-card-body");
    const meta = createElement("div", "blog-card-meta");
    meta.append(createElement("span", "blog-card-category", post.category));
    const time = createElement("time", "", formatDate(post.date));
    time.dateTime = post.date;
    meta.append(time);

    const title = createElement("h3");
    const titleLink = createElement("a", "", post.title);
    titleLink.href = post.url;
    title.append(titleLink);

    const excerpt = createElement("p", "blog-card-excerpt", post.excerpt);
    const footer = createElement("div", "blog-card-footer");
    footer.append(createElement("span", "", post.readTime));
    const readLink = createElement("a", "blog-read-link", "Read article →");
    readLink.href = post.url;
    readLink.setAttribute("aria-label", `Read ${post.title}`);
    footer.append(readLink);

    body.append(meta, title, excerpt, footer);
    article.append(body);
    return article;
  };

  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
  });

  const renderPosts = () => {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const filteredPosts = posts.filter((post) => {
      const searchableText = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return searchableText.includes(query) && (category === "all" || post.category === category);
    });

    grid.replaceChildren(...filteredPosts.map(createCard));

    const hasPublishedPosts = posts.length > 0;
    const hasResults = filteredPosts.length > 0;
    grid.hidden = !hasResults;
    emptyState.hidden = hasResults;

    const emptyTitle = emptyState.querySelector("h3");
    const emptyCopy = emptyState.querySelector("p");
    if (hasPublishedPosts && !hasResults) {
      emptyTitle.textContent = "No articles match those filters.";
      emptyCopy.textContent = "Try a different keyword or select another category.";
    }

    resultCount.textContent = hasPublishedPosts
      ? `${filteredPosts.length} ${filteredPosts.length === 1 ? "article" : "articles"}`
      : "Articles coming soon";
  };

  searchInput.addEventListener("input", renderPosts);
  categorySelect.addEventListener("change", renderPosts);
  renderPosts();
})();
