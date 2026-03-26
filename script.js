// GO HOME
function goHome() {
  window.location.href = "index.html";
}

// ================= NAVBAR DROPDOWN =================

// TOGGLE DROPDOWN
function toggleDropdown(event) {
  event.preventDefault();
  event.stopPropagation();

  const menu = document.getElementById("dropdownMenu");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// CLOSE DROPDOWN
function closeDropdown() {
  const menu = document.getElementById("dropdownMenu");
  if (menu) {
    menu.classList.remove("show");
  }
}

// CLOSE WHEN CLICKING ANYWHERE
window.addEventListener("click", function () {
  closeDropdown();
});


// ================= JOB SEARCH =================

function searchJobs() {
  let input = document.getElementById("search").value.toLowerCase();
  let jobList = document.getElementById("jobList");

  if (!jobList) return; // prevents error on other pages

  let jobs = jobList.getElementsByTagName("li");

  for (let i = 0; i < jobs.length; i++) {
    let text = jobs[i].innerText.toLowerCase();
    jobs[i].style.display = text.includes(input) ? "" : "none";
  }
}


// ================= CLIENT SERVICES =================

function showClients(service) {
  let data = {
    it: ["TCS", "Infosys"],
    marketing: ["Agency A", "Agency B"],
    finance: ["HDFC", "ICICI"]
  };

  let output = "<h3>Clients:</h3><ul>";

  if (data[service]) {
    data[service].forEach(c => {
      output += "<li>" + c + "</li>";
    });
  }

  output += "</ul>";

  const clientsDiv = document.getElementById("clients");
  if (clientsDiv) {
    clientsDiv.innerHTML = output;
  }
}

// MOBILE MENU TOGGLE
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// CLOSE MENU AFTER CLICK
function closeMenu() {
  document.getElementById("navLinks").classList.remove("active");
  closeDropdown();
}
