// ========================================
// VOGUESTORE - Fashion E-Commerce JavaScript
// ========================================

// Fashion Products Database
const products = [
  // Women's Clothing
  { id: 1, name: "Floral Print Summer Dress", brand: "VogueBasic", category: "women", price: 1299, originalPrice: 2499, rating: 4.5, reviews: 234, colors: ["pink", "white"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400", badge: "sale", isNew: false },
  { id: 2, name: "Classic Denim Jacket", brand: "UrbanChic", category: "women", price: 1899, originalPrice: 2999, rating: 4.3, reviews: 156, colors: ["blue", "black"], sizes: ["S", "M", "L", "XL", "XXL"], image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400", badge: "hot", isNew: false },
  { id: 3, name: "Silk Blouse Top", brand: "EliteWear", category: "women", price: 1599, originalPrice: 2299, rating: 4.7, reviews: 89, colors: ["white", "pink", "yellow"], sizes: ["XS", "S", "M", "L"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400", badge: "new", isNew: true },
  { id: 4, name: "High-Waist Jeans", brand: "StyleHub", category: "women", price: 1199, originalPrice: 1999, rating: 4.4, reviews: 312, colors: ["blue", "black"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", badge: "sale", isNew: false },
  { id: 5, name: "Oversized Sweater", brand: "VogueBasic", category: "women", price: 999, originalPrice: 1499, rating: 4.2, reviews: 178, colors: ["brown", "white", "pink"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400", badge: null, isNew: false },
  { id: 6, name: "Midi Skirt", brand: "TrendSetters", category: "women", price: 899, originalPrice: 1299, rating: 4.1, reviews: 67, colors: ["black", "red", "blue"], sizes: ["XS", "S", "M", "L"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj3d?w=400", badge: null, isNew: false },

  // Men's Clothing
  { id: 7, name: "Slim Fit Casual Shirt", brand: "UrbanChic", category: "men", price: 1099, originalPrice: 1799, rating: 4.5, reviews: 423, colors: ["white", "blue", "pink"], sizes: ["S", "M", "L", "XL", "XXL"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", badge: "sale", isNew: false },
  { id: 8, name: "Classic Wool Blazer", brand: "EliteWear", category: "men", price: 3499, originalPrice: 4999, rating: 4.8, reviews: 89, colors: ["black", "brown"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400", badge: "hot", isNew: false },
  { id: 9, name: "Cotton Polo T-Shirt", brand: "VogueBasic", category: "men", price: 699, originalPrice: 999, rating: 4.3, reviews: 567, colors: ["black", "white", "blue", "green"], sizes: ["S", "M", "L", "XL", "XXL"], image: "https://images.unsplash.com/photo-1625910513413-5fc42f006aa4?w=400", badge: null, isNew: false },
  { id: 10, name: "Chino Pants", brand: "StyleHub", category: "men", price: 1299, originalPrice: 1999, rating: 4.4, reviews: 234, colors: ["brown", "black", "blue"], sizes: ["S", "M", "L", "XL", "XXL"], image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400", badge: "new", isNew: true },
  { id: 11, name: "Hooded Sweatshirt", brand: "TrendSetters", category: "men", price: 1199, originalPrice: 1799, rating: 4.6, reviews: 345, colors: ["black", "white", "blue"], sizes: ["S", "M", "L", "XL", "XXL"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400", badge: null, isNew: false },
  { id: 12, name: "Linen Summer Shirt", brand: "UrbanChic", category: "men", price: 899, originalPrice: 1499, rating: 4.2, reviews: 123, colors: ["white", "yellow", "blue"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400", badge: null, isNew: false },

  // Shoes
  { id: 13, name: "White Sneakers", brand: "VogueBasic", category: "shoes", price: 2199, originalPrice: 3499, rating: 4.7, reviews: 678, colors: ["white"], sizes: ["6", "7", "8", "9", "10", "11"], image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400", badge: "sale", isNew: false },
  { id: 14, name: "Leather Formal Shoes", brand: "EliteWear", category: "shoes", price: 2999, originalPrice: 4499, rating: 4.8, reviews: 234, colors: ["black", "brown"], sizes: ["7", "8", "9", "10", "11"], image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400", badge: "hot", isNew: false },
  { id: 15, name: "Running Shoes", brand: "StyleHub", category: "shoes", price: 2499, originalPrice: 3999, rating: 4.5, reviews: 456, colors: ["black", "blue", "red"], sizes: ["6", "7", "8", "9", "10", "11", "12"], image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", badge: "new", isNew: true },
  { id: 16, name: "Ankle Boots", brand: "TrendSetters", category: "shoes", price: 2799, originalPrice: 3999, rating: 4.4, reviews: 189, colors: ["black", "brown"], sizes: ["6", "7", "8", "9", "10"], image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", badge: null, isNew: false },
  { id: 17, name: "Casual Loafers", brand: "UrbanChic", category: "shoes", price: 1899, originalPrice: 2799, rating: 4.3, reviews: 267, colors: ["black", "brown"], sizes: ["7", "8", "9", "10", "11"], image: "https://images.unsplash.com/photo-1613987876445-fcb353cd8e27?w=400", badge: null, isNew: false },
  { id: 18, name: "Heels Sandals", brand: "EliteWear", category: "shoes", price: 1599, originalPrice: 2499, rating: 4.1, reviews: 134, colors: ["red", "pink", "black"], sizes: ["6", "7", "8", "9"], image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", badge: "sale", isNew: false },

  // Accessories
  { id: 19, name: "Leather Handbag", brand: "EliteWear", category: "accessories", price: 2499, originalPrice: 3999, rating: 4.7, reviews: 345, colors: ["black", "brown", "red"], image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400", badge: "hot", isNew: false },
  { id: 20, name: "Classic Watch", brand: "StyleHub", category: "accessories", price: 4999, originalPrice: 7999, rating: 4.9, reviews: 567, colors: ["black", "silver", "gold"], image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400", badge: "sale", isNew: false },
  { id: 21, name: "Sunglasses", brand: "TrendSetters", category: "accessories", price: 899, originalPrice: 1499, rating: 4.3, reviews: 234, colors: ["black", "white", "brown"], image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", badge: "new", isNew: true },
  { id: 22, name: "Leather Belt", brand: "UrbanChic", category: "accessories", price: 599, originalPrice: 999, rating: 4.2, reviews: 189, colors: ["black", "brown"], image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", badge: null, isNew: false },
  { id: 23, name: "Scarf", brand: "VogueBasic", category: "accessories", price: 499, originalPrice: 799, rating: 4.4, reviews: 123, colors: ["pink", "red", "yellow", "blue"], image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400", badge: null, isNew: false },
  { id: 24, name: "Crossbody Bag", brand: "EliteWear", category: "accessories", price: 1799, originalPrice: 2799, rating: 4.5, reviews: 267, colors: ["black", "pink", "brown"], image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400", badge: null, isNew: false },

  // Activewear
  { id: 25, name: "Yoga Leggings", brand: "TrendSetters", category: "activewear", price: 899, originalPrice: 1499, rating: 4.6, reviews: 456, colors: ["black", "blue", "pink"], sizes: ["XS", "S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400", badge: "sale", isNew: false },
  { id: 26, name: "Sports Bra", brand: "VogueBasic", category: "activewear", price: 599, originalPrice: 999, rating: 4.4, reviews: 345, colors: ["black", "white", "pink", "blue"], sizes: ["XS", "S", "M", "L"], image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400", badge: "new", isNew: true },
  { id: 27, name: "Running Shorts", brand: "StyleHub", category: "activewear", price: 699, originalPrice: 1099, rating: 4.3, reviews: 234, colors: ["black", "blue", "green"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400", badge: null, isNew: false },
  { id: 28, name: "Gym T-Shirt", brand: "UrbanChic", category: "activewear", price: 799, originalPrice: 1299, rating: 4.5, reviews: 189, colors: ["black", "white", "red"], sizes: ["S", "M", "L", "XL", "XXL"], image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", badge: null, isNew: false },
  { id: 29, name: "Track Pants", brand: "TrendSetters", category: "activewear", price: 1199, originalPrice: 1799, rating: 4.2, reviews: 156, colors: ["black", "blue", "green"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400", badge: "hot", isNew: false },
  { id: 30, name: "Workout Jacket", brand: "EliteWear", category: "activewear", price: 1999, originalPrice: 2999, rating: 4.6, reviews: 123, colors: ["black", "blue", "red"], sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400", badge: null, isNew: false }
];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let filteredProducts = [...products];
let currentFilters = {
  categories: [],
  brands: [],
  priceRange: 5000,
  sizes: [],
  colors: []
};

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const loadingSkeleton = document.getElementById('loading-skeleton');
const noResults = document.getElementById('no-results');
const resultsCount = document.getElementById('results-count');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort-select');
const cartCountEl = document.getElementById('cart-count');
const wishlistCountEl = document.getElementById('wishlist-count');
const cartModal = document.getElementById('cart-modal');
const wishlistModal = document.getElementById('wishlist-modal');
const accountModal = document.getElementById('account-modal');
const quickViewModal = document.getElementById('quick-view-modal');
const toast = document.getElementById('toast');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showLoading();
  setTimeout(() => {
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();
    setupEventListeners();
  }, 1200);
});

// Show Loading Skeleton
function showLoading() {
  loadingSkeleton.innerHTML = '';
  productsGrid.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton-card';
    skeleton.innerHTML = `
      <div class="skeleton-image"></div>
      <div class="skeleton-info">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line"></div>
      </div>
    `;
    loadingSkeleton.appendChild(skeleton);
  }
  loadingSkeleton.style.display = 'grid';
}

// Render Products
function renderProducts(productsToRender) {
  loadingSkeleton.style.display = 'none';
  productsGrid.innerHTML = '';
  
  if (productsToRender.length === 0) {
    noResults.style.display = 'block';
    resultsCount.textContent = '0';
    return;
  }
  
  noResults.style.display = 'none';
  resultsCount.textContent = productsToRender.length;
  
  productsToRender.forEach(product => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<div class="product-badges"><span class="badge ${product.badge}">${product.badge}</span></div>` : ''}
        <div class="product-actions">
          <button class="product-action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}" title="Add to Wishlist">
            <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <button class="product-action-btn quick-view-btn" data-id="${product.id}" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${getStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">₹${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
          ${product.originalPrice ? `<span class="discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
        </div>
        <div class="product-colors">
          ${product.colors.map(color => `<span class="color-dot" style="background: ${color};"></span>`).join('')}
        </div>
      </div>
    `;
    
    // Add to cart on click
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-action-btn')) {
        addToCart(product);
      }
    });
    
    productsGrid.appendChild(card);
  });
  
  // Add event listeners to action buttons
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.id);
      toggleWishlist(productId);
    });
  });
  
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.id);
      openQuickView(productId);
    });
  });
}

// Get Star Rating HTML
function getStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

// Filter Products
function filterProducts() {
  filteredProducts = products.filter(product => {
    // Category filter
    if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(product.category)) {
      return false;
    }
    
    // Brand filter
    if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(product.brand)) {
      return false;
    }
    
    // Price filter
    if (product.price > currentFilters.priceRange) {
      return false;
    }
    
    // Size filter
    if (currentFilters.sizes.length > 0 && product.sizes && !product.sizes.some(size => currentFilters.sizes.includes(size))) {
      return false;
    }
    
    // Color filter
    if (currentFilters.colors.length > 0 && !product.colors.some(color => currentFilters.colors.includes(color))) {
      return false;
    }
    
    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm) && !product.brand.toLowerCase().includes(searchTerm)) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  sortProducts();
}

// Sort Products
function sortProducts() {
  const sortBy = sortSelect.value;
  
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.isNew - a.isNew);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Featured - keep original order
      break;
  }
  
  renderProducts(filteredProducts);
}

// Add to Cart
function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart();
  updateCartCount();
  showToast('Item added to cart!');
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
}

// Update Cart Quantity
function updateCartQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      renderCart();
    }
  }
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart Count
function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = total;
}

// Render Cart
function renderCart() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartTotal = document.getElementById('cart-total');
  
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '';
    cartEmpty.style.display = 'block';
    cartTotal.textContent = '₹0';
    return;
  }
  
  cartEmpty.style.display = 'none';
  let total = 0;
  
  cartItemsEl.innerHTML = cart.map(item => {
    total += item.price * item.quantity;
    return `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
  }).join('');
  
  cartTotal.textContent = `₹${total.toLocaleString()}`;
}

// Toggle Wishlist
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  const existingIndex = wishlist.findIndex(item => item.id === productId);
  
  if (existingIndex >= 0) {
    wishlist.splice(existingIndex, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(product);
    showToast('Added to wishlist!');
  }
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistCount();
  
  // Update wishlist buttons
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const isInWishlist = wishlist.some(item => item.id === parseInt(btn.dataset.id));
    btn.classList.toggle('active', isInWishlist);
    btn.querySelector('i').className = isInWishlist ? 'fas fa-heart' : 'far fa-heart';
  });
}

// Update Wishlist Count
function updateWishlistCount() {
  wishlistCountEl.textContent = wishlist.length;
}

// Render Wishlist
function renderWishlist() {
  const wishlistItemsEl = document.getElementById('wishlist-items');
  const wishlistEmpty = document.getElementById('wishlist-empty');
  
  if (wishlist.length === 0) {
    wishlistItemsEl.innerHTML = '';
    wishlistEmpty.style.display = 'block';
    return;
  }
  
  wishlistEmpty.style.display = 'none';
  
  wishlistItemsEl.innerHTML = wishlist.map(item => `
    <div class="wishlist-item">
      <div class="wishlist-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${item.name}</div>
        <div class="wishlist-item-price">₹${item.price.toLocaleString()}</div>
      </div>
      <button class="wishlist-item-remove" onclick="toggleWishlist(${item.id}); renderWishlist();">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');
}

// Quick View
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const quickViewGrid = document.getElementById('quick-view-grid');
  quickViewGrid.innerHTML = `
    <div class="quick-view-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="quick-view-details">
      <h2>${product.name}</h2>
      <div class="quick-view-brand">${product.brand}</div>
      <div class="quick-view-price">
        <span class="current-price">₹${product.price.toLocaleString()}</span>
        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
        ${product.originalPrice ? `<span class="discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
      </div>
      <div class="product-rating">
        <span class="stars">${getStars(product.rating)}</span>
        <span class="rating-count">(${product.reviews} reviews)</span>
      </div>
      <p class="quick-view-description">
        Premium quality ${product.name.toLowerCase()} from ${product.brand}. 
        Crafted with attention to detail and designed for the modern lifestyle. 
        Available in multiple colors and sizes.
      </p>
      ${product.sizes ? `
        <div class="quick-view-options">
          <h4>Size</h4>
          <div class="size-options">
            ${product.sizes.map(size => `<button class="size-btn">${size}</button>`).join('')}
          </div>
        </div>
      ` : ''}
      <div class="quick-view-actions">
        <button class="btn-add-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '"')})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
        <button class="btn-add-wishlist" onclick="toggleWishlist(${product.id})">
          <i class="fas fa-heart"></i> Wishlist
        </button>
      </div>
    </div>
  `;
  
  quickViewModal.classList.add('active');
  
  // Setup size buttons in quick view
  quickViewGrid.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quickViewGrid.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// Show Toast
function showToast(message) {
  const toastMessage = document.getElementById('toast-message');
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Setup Event Listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', filterProducts);
  
  // Sort
  sortSelect.addEventListener('change', sortProducts);
  
  // Category Navigation
  document.querySelectorAll('.category-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.category-nav a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const category = link.dataset.category;
      if (category === 'all') {
        currentFilters.categories = [];
      } else {
        currentFilters.categories = [category];
      }
      filterProducts();
    });
  });
  
  // Category Checkboxes
  document.querySelectorAll('input[name="category"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      currentFilters.categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
      filterProducts();
    });
  });
  
  // Brand Checkboxes
  document.querySelectorAll('input[name="brand"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      currentFilters.brands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
      filterProducts();
    });
  });
  
  // Price Range
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  priceRange.addEventListener('input', () => {
    currentFilters.priceRange = parseInt(priceRange.value);
    priceValue.textContent = currentFilters.priceRange;
    filterProducts();
  });
  
  // Price Inputs
  document.getElementById('min-price').addEventListener('input', filterProducts);
  document.getElementById('max-price').addEventListener('input', filterProducts);
  
  // Size Buttons
  document.querySelectorAll('.size-btn[data-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      currentFilters.sizes = Array.from(document.querySelectorAll('.size-btn.active')).map(b => b.dataset.size);
      filterProducts();
    });
  });
  
  // Color Buttons
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      currentFilters.colors = Array.from(document.querySelectorAll('.color-btn.active')).map(b => b.dataset.color);
      filterProducts();
    });
  });
  
  // Clear Filters
  document.getElementById('clear-filters').addEventListener('click', () => {
    currentFilters = {
      categories: [],
      brands: [],
      priceRange: 5000,
      sizes: [],
      colors: []
    };
    
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('.size-btn, .color-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('price-range').value = 5000;
    document.getElementById('price-value').textContent = '5000';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    searchInput.value = '';
    
    filterProducts();
  });
  
  // Cart Modal
  document.getElementById('cart-btn').addEventListener('click', () => {
    renderCart();
    cartModal.classList.add('active');
  });
  
  document.getElementById('close-cart').addEventListener('click', () => {
    cartModal.classList.remove('active');
  });
  
  // Wishlist Modal
  document.getElementById('wishlist-btn').addEventListener('click', () => {
    renderWishlist();
    wishlistModal.classList.add('active');
  });
  
  document.getElementById('close-wishlist').addEventListener('click', () => {
    wishlistModal.classList.remove('active');
  });
  
  // Account Modal
  document.getElementById('account-btn').addEventListener('click', () => {
    accountModal.classList.add('active');
  });
  
  document.getElementById('close-account').addEventListener('click', () => {
    accountModal.classList.remove('active');
  });
  
  // Quick View Modal
  document.getElementById('close-quick-view').addEventListener('click', () => {
    quickViewModal.classList.remove('active');
  });
  
  // Close Modals on Background Click
  [cartModal, wishlistModal, accountModal, quickViewModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  // Mobile Menu Toggle
  document.getElementById('mobile-menu').addEventListener('click', () => {
    document.getElementById('category-nav').classList.toggle('mobile-open');
  });
  
  // Checkout Button
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
      alert('Proceeding to checkout! Total: ₹' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString());
    }
  });
}
