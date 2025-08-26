// Load customer + cart data
const customer = JSON.parse(localStorage.getItem("customer")) || {};
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fill customer info
document.getElementById("customer-name").textContent = customer.name || "-";
document.getElementById("customer-address").textContent = customer.address || "-";
document.getElementById("order-date").textContent = new Date().toLocaleDateString();

// Fill order items
const orderItemsContainer = document.getElementById("order-items");
let totalAmount = 0;

cart.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.name} ${item.thai ? `(${item.thai})` : ''}</td>
    <td>${item.quantity}</td>
    <td>฿${item.price}</td>
    <td>฿${item.price * item.quantity}</td>
  `;
  totalAmount += item.price * item.quantity;
  orderItemsContainer.appendChild(row);
});

// Add grand total row
const totalRow = document.createElement("tr");
totalRow.innerHTML = `
  <td colspan="3" style="text-align:right; font-weight:bold;">Grand Total</td>
  <td style="font-weight:bold;">฿${totalAmount}</td>
`;
orderItemsContainer.appendChild(totalRow);
