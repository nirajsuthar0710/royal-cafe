
const menuItems = [
  {
    id: 1,
    name: "Golden Garlic Bread",
    category: "Starters",
    price: 149,
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=85",
    description: "Toasted bread with garlic, herbs and a delicious buttery finish."
  },
  {
    id: 2,
    name: "Crispy Veg Bites",
    category: "Starters",
    price: 179,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85",
    description: "A crunchy, flavourful starter for sharing with friends."
  },
  {
    id: 3,
    name: "Royal Paneer Bowl",
    category: "Main Course",
    price: 249,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85",
    description: "A rich paneer-inspired Indian dish served with delicious accompaniments."
  },
  {
    id: 4,
    name: "Creamy Pasta",
    category: "Main Course",
    price: 229,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85",
    description: "A creamy pasta-style dish with herbs and a comforting flavour."
  },
  {
    id: 5,
    name: "Classic Margherita",
    category: "Pizza",
    price: 299,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
    description: "A classic pizza-inspired favourite with tomato and cheese."
  },
  {
    id: 6,
    name: "Garden Fresh Pizza",
    category: "Pizza",
    price: 349,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
    description: "A colourful vegetable pizza with a satisfying combination of flavours."
  },
  {
    id: 7,
    name: "Iced Coffee",
    category: "Drinks",
    price: 129,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
    description: "A chilled coffee-style drink for a refreshing break."
  },
  {
    id: 8,
    name: "Fresh Lemon Cooler",
    category: "Drinks",
    price: 99,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=800&q=85",
    description: "A refreshing lemon-inspired drink with a bright, fresh taste."
  },
  {
    id: 9,
    name: "Chocolate Dessert",
    category: "Desserts",
    price: 159,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    description: "A rich chocolate dessert for a sweet ending."
  }
];

const menuGrid = document.querySelector("#menuGrid");
const menuFilters = document.querySelector("#menuFilters");
const toast = document.querySelector("#toast");
let activeCategory = "All";
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function renderMenu() {
  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  if (!filteredItems.length) {
    menuGrid.innerHTML = '<p class="empty-menu">No menu items available.</p>';
    return;
  }

  menuGrid.innerHTML = filteredItems.map(item => `
    <article class="menu-card">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="menu-card-info">
        <span class="menu-category">${item.category}</span>
        <div class="menu-card-top">
          <h3>${item.name}</h3>
          <span class="menu-price">₹${item.price}</span>
        </div>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}

menuFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  menuFilters.querySelectorAll(".filter-btn").forEach(filter => {
    filter.classList.toggle("active", filter === button);
  });

  renderMenu();
});

const navLinks = document.querySelector("#navLinks");

document.querySelector("#menuToggle").addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", event => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
  }
});

document.querySelector("#reservationForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.querySelector("#guestName").value.trim();
  const email = document.querySelector("#guestEmail").value.trim();
  const date = document.querySelector("#visitDate").value;

  if (!name || !email || !date) {
    showToast("Please complete the required details.");
    return;
  }

  showToast("Demo enquiry received! No real booking was made.");
  event.target.reset();
});

const dateInput = document.querySelector("#visitDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split("T")[0];
dateInput.min = localToday;

document.querySelector("#year").textContent = new Date().getFullYear();

renderMenu();
