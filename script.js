// Data Menu Makanan Thai dengan Aksara Thai
const menuItems = [
    {
        id: 1,
        title: "Tom Yum Goong",
        thai: "ต้มยำกุ้ง",
        price: "฿120",
        desc: "Spicy shrimp soup with lemongrass, kaffir lime leaves, galangal, lime juice, fish sauce, and chili peppers.",
        category: "appetizer",
        img: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Pad Thai",
        thai: "ผัดไทย",
        price: "฿100",
        desc: "Stir-fried rice noodles with eggs, tofu, shrimp, bean sprouts, peanuts, and lime.",
        category: "main",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Som Tum",
        thai: "ส้มตำ",
        price: "฿80",
        desc: "Spicy green papaya salad with tomatoes, green beans, peanuts, dried shrimp, and chili.",
        category: "appetizer",
        img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Gaeng Daeng",
        thai: "แกงแดง",
        price: "฿150",
        desc: "Red curry with coconut milk, bamboo shoots, bell peppers, and your choice of meat.",
        category: "main",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Khao Pad",
        thai: "ข้าวผัด",
        price: "฿90",
        desc: "Thai-style fried rice with eggs, onions, cilantro, and your choice of protein.",
        category: "main",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Mango Sticky Rice",
        thai: "ข้าวเหนียวมะม่วง",
        price: "฿70",
        desc: "Sweet dessert made with glutinous rice, fresh mango, and coconut milk.",
        category: "dessert",
        img: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Satay",
        thai: "สะเต๊ะ",
        price: "฿60",
        desc: "Grilled meat skewers served with peanut sauce and cucumber relish.",
        category: "appetizer",
        img: "https://images.unsplash.com/photo-1551504736-2a0c0b1dff6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        title: "Khao Niew Mamuang",
        thai: "ข้าวเหนียวมะม่วง",
        price: "฿65",
        desc: "Traditional Thai dessert with sweet sticky rice and fresh mango.",
        category: "dessert",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        title: "Tom Kha Gai",
        thai: "ต้มข่าไก่",
        price: "฿110",
        desc: "Coconut milk soup with chicken, galangal, lemongrass, and mushrooms.",
        category: "appetizer",
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        title: "Pad Kra Pao",
        thai: "ผัดกระเพรา",
        price: "฿95",
        desc: "Stir-fried meat with Thai holy basil, chili, and garlic, served with rice and fried egg.",
        category: "main",
        img: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 11,
        title: "Thai Iced Tea",
        thai: "ชาเย็น",
        price: "฿45",
        desc: "Sweet black tea with milk, served over crushed ice.",
        category: "drink",
        img: "https://images.unsplash.com/photo-1597304553531-e3f4f5f1f617?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        title: "Thai Iced Coffee",
        thai: "กาแฟเย็น",
        price: "฿50",
        desc: "Strong coffee blended with condensed milk and ice.",
        category: "drink",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        title: "Nam Manao",
        thai: "น้ำมะนาว",
        price: "฿40",
        desc: "Refreshing Thai limeade with a hint of salt.",
        category: "drink",
        img: "https://images.unsplash.com/photo-1612199702141-7d4b05e36e01?auto=format&fit=crop&w=500&q=80"
    }
];

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const categoryBtns = document.querySelectorAll('.category-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const contactForm = document.getElementById('contact-form');

// Display Menu Items
// === Cart Logic ===
const cart        = [];
const cartBtn     = document.querySelector('.cart-btn');
const cartCount   = document.querySelector('.cart-count');
const cartModal   = document.querySelector('.cart-modal');
const cartItemsEl = document.querySelector('.cart-items');
const totalEl     = document.querySelector('.total-amount');
const checkoutBtn = document.querySelector('.checkout-btn');
const closeCart   = document.querySelector('.close-cart');

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    const found = cart.find(c => c.id === id);
    if (found) { found.qty += 1; } else { cart.push({ ...item, qty: 1 }); }
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((a, c) => a + c.qty, 0);
    if (!cartItemsEl) return;
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p>No items in cart.</p>';
        totalEl.textContent = '฿0';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(c => {
        total += parseInt(c.price.replace('฿', '')) * c.qty;
        html += `<div class="cart-item">
                    <span>${c.title} × ${c.qty}</span>
                    <span>฿${parseInt(c.price.replace('฿', '')) * c.qty}</span>
                  </div>`;
    });
    cartItemsEl.innerHTML = html;
    totalEl.textContent = `฿${total}`;
}

// open / close modal
cartBtn.addEventListener('click', e => { e.preventDefault(); cartModal.classList.add('show'); });
closeCart.addEventListener('click', () => cartModal.classList.remove('show'));

// simple checkout
// Modified checkout handler
checkoutBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: cart,
                total: calculateTotal(),
                timestamp: new Date().toISOString()
            })
        });

        if (!response.ok) throw new Error('Checkout failed');
        window.location.href = 'payment.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Checkout failed. Please try again.');
    }
});

// extend displayMenuItems with "Add to Cart" buttons
function displayMenuItems(category = 'all') {
    let html = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        html += `
            <div class="menu-item" data-category="${item.category}">
                <div class="menu-item-img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h3>${item.title}
                            <span class="thai-text">${item.thai}</span>
                        </h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                    <button class="btn add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
    });
    
    menuItemsContainer.innerHTML = html || '<p class="no-items">No items found in this category</p>';
}

// Filter Menu Items by Category
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        displayMenuItems(category);
    });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Here you would typically send the data to a server
    console.log({ name, email, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems();
    
    // Set current year in footer
    document.querySelector('.copyright p').innerHTML = 
        `&copy; ${new Date().getFullYear()} ThaiDelight. All Rights Reserved.`;
});

// delegate add-to-cart events after each render
menuItemsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const id = parseInt(e.target.dataset.id, 10);
        addToCart(id);
    }
});

// On first load, restore any stored cart (e.g. user pressed back from payment page)
const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
if (storedCart.length) {
    storedCart.forEach(item => cart.push(item));
    updateCartUI();
}


function generateInvoiceContent() {
    const invoiceContent = document.getElementById('invoice-content');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let html = `
        <div class="invoice-details">
            <h3>รายการสั่งซื้อ (Order Details):</h3>
            <table>
                ${cart.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}x</td>
                    <td>฿${item.price * item.quantity}</td>
                </tr>
                `).join('')}
            </table>
            <h3>ยอดรวมทั้งหมด: ฿${calculateTotal()}</h3>
        </div>
    `;
    
    invoiceContent.innerHTML = html;
}

// Call on page load
if(window.location.pathname.includes('order.html')) {
    generateInvoiceContent();
}

// Add to checkout function
// Updated prompts
localStorage.setItem('customerInfo', JSON.stringify({
    name: prompt('Please enter your name:'),
    address: prompt('Delivery address:')
}));

// Simplified price display
`<td>฿${(calculateTotal() * 1.07).toFixed(2)}</td>`
const customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || {};
document.getElementById('customer-name').textContent = customerInfo.name || 'Walk-in Customer';
document.getElementById('customer-address').textContent = customerInfo.address || 'Store Pickup';

// Example: called when payment is confirmed
function saveCustomerDetails() {
  const customer = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
  };

  // Save to localStorage
  localStorage.setItem("customer", JSON.stringify(customer));
}
