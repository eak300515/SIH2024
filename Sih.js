// Sample data for queue and bed availability
let opdQueue = [
  { name: "John Doe", time: "10:00 AM", status: "Waiting" },
  { name: "Jane Smith", time: "10:15 AM", status: "In Consultation" },
];

let bedAvailability = {
  icu: 2,
  general: 5,
  private: 1,
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

// Event listener for patient admission form submission
document.getElementById("admissionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let patientName = document.getElementById("patientName").value;
  let ward = document.getElementById("ward").value;

  if (bedAvailability[ward] > 0) {
    bedAvailability[ward]--;
    alert(`${patientName} has been admitted to ${ward.charAt(0).toUpperCase() + ward.slice(1)} Ward.`);
    updateBedAvailability();
  } else {
    alert(`No available beds in ${ward.charAt(0).toUpperCase() + ward.slice(1)} Ward.`);
  }
});

// Initialize the page with sample data
populateQueue();
updateBedAvailability();
