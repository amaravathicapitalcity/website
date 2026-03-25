function goHome() {
  window.location.href = "index.html";
}

// Job search filter
function searchJobs() {
  let input = document.getElementById("search").value.toLowerCase();
  let jobs = document.getElementById("jobList").getElementsByTagName("li");

  for (let i = 0; i < jobs.length; i++) {
    let text = jobs[i].innerText.toLowerCase();
    jobs[i].style.display = text.includes(input) ? "" : "none";
  }
}

// Show clients
function showClients(service) {
  let data = {
    it: ["TCS", "Infosys"],
    marketing: ["Agency A", "Agency B"],
    finance: ["HDFC", "ICICI"]
  };

  let output = "<h3>Clients:</h3><ul>";
  data[service].forEach(c => {
    output += "<li>" + c + "</li>";
  });
  output += "</ul>";

  document.getElementById("clients").innerHTML = output;
}
