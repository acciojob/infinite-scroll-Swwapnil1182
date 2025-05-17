const list = document.getElementById("infi-list");
let itemCount = 0;

// Function to add list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addListItems(10);

// Add scroll event listener to the list element itself
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items when scrolled to the bottom
  }
});
