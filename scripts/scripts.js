"use strict";

let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],

  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],

  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

const foodMenuEl = document.getElementById("foodMenu");
const memberDisplayEl = document.getElementById("memberDisplay");

foodMenuEl.onchange = function () {
  if (foodMenuEl.value === "") {
    memberDisplayEl.options.length = 0;
    memberDisplayEl.size = 0;
  }
  if (foodMenuEl.value === "drinks") {
    showMemberOpt(menu.drinks);
  }
  if (foodMenuEl.value === "entrees") {
    showMemberOpt(menu.entrees);
  }
  if (foodMenuEl.value === "desserts") {
    showMemberOpt(menu.desserts);
  }
};

function showMemberOpt(itemList) {
  memberDisplayEl.size = itemList.length;
  memberDisplayEl.options.length = 0;
  for (let i in itemList) {
    const itemName = itemList[i];
    const optionsEl = new Option(itemName);
    memberDisplayEl.appendChild(optionsEl);
  }
}
