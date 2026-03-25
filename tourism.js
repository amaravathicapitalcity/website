const data = {
  devotional: ["Amaralingeswara Temple", "Durga Temple"],
  historical: ["Amaravati Stupa", "Ancient Ruins"],
  spiritual: ["Meditation Centers", "Ashrams"],
  nature: ["River Krishna", "Parks", "Gardens"],
  city: ["Shopping Areas", "Restaurants", "Local Markets"]
};

function openModal(type) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  title.innerText = type.toUpperCase();

  let content = "";
  data[type].forEach(place => {
    content += `<div class="place-card">${place}</div>`;
  });

  body.innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* close when clicking outside */
window.onclick = function(e) {
  let modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
