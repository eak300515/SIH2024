let opdQueue = [
  { name: "Lakshay Singh", time: "10:00 AM", status: "Waiting" },
  { name: "Anirban Sarkar", time: "10:15 AM", status: "In Consultation" },
  { name: "Akshay Triwedi", time: "10:00 AM", status: "In Consultation" },
  { name: "Vyakhya Namdev", time: "11:00 AM", status: "Waiting" }
];

let bedAvailability = {
  icu: 15,
  general: 45,
  private: 166
};

// Function to populate OPD queue
function populateQueue() {
  const queueList = document.getElementById("queue-list");
  queueList.innerHTML = ''; // Clear existing data

  opdQueue.forEach(patient => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${patient.name}</td><td>${patient.time}</td><td>${patient.status}</td>`;
    queueList.appendChild(row);
  });
}

// Function to update bed availability
function updateBedAvailability() {
  document.getElementById("icu-beds").innerText = `Available Beds: ${bedAvailability.icu}`;
  document.getElementById("general-beds").innerText = `Available Beds: ${bedAvailability.general}`;
  document.getElementById("private-beds").innerText = `Available Beds: ${bedAvailability.private}`;
}

document.getElementById("toggle-chatbot").addEventListener("click", function() {
  const chatbotIframe = document.getElementById("chatbot-iframe");
  if (chatbotIframe.style.display === "none") {
    chatbotIframe.style.display = "block";
  } else {
    chatbotIframe.style.display = "none";
  }
});

// Event listener for patient admission form submission
document.getElementById("admissionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let patientName = document.getElementById("patientName").value;
  let ward = document.getElementById("ward").value;

  if (bedAvailability[ward] > 0) {
    bedAvailability[ward]--; // Decrement bed availability

    // Send data to Google Sheets
    fetch('YOUR_GOOGLE_SHEET_WEB_APP_URL', { // Replace with your Web App URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: patientName,
        ward: ward
      })
    })
    .then(response => response.text())
    .then(result => {
      alert(`${patientName} has been admitted to ${ward.charAt(0).toUpperCase() + ward.slice(1)} Ward.`);
      updateBedAvailability();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add patient details.');
    });
  } else {
    alert(`No available beds in ${ward.charAt(0).toUpperCase() + ward.slice(1)} Ward.`);
  }
});

// Initialize the page with sample data
populateQueue();
updateBedAvailability();
