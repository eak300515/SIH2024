// Sample OPD queue data
let opdQueue = [
  { name: "Lakshay Singh", time: "10:00 AM", status: "Waiting" },
  { name: "Anirban Sarkar", time: "10:15 AM", status: "In Consultation" },
  { name: "Akshay Triwedi", time: "10:30 AM", status: "In Consultation" },
  { name: "Vyakhya Namdev", time: "11:00 AM", status: "Waiting" }
];

// Sample bed availability data
let bedAvailability = {
  icu: 15,
  general: 45,
  private: 16
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

// Function to handle form submission for patient admission
function handleFormSubmission(event) {
  event.preventDefault();

  // Get form field values
  let patientName = document.getElementById("patientName").value;
  let age = document.getElementById("age").value;
  let sex = document.getElementById("sex").value;
  let bloodGroup = document.getElementById("bloodGroup").value;
  let phoneNo = document.getElementById("phoneNo").value;
  let issue = document.getElementById("issue").value;
  let department = document.getElementById("department").value;
  let ward = document.getElementById("ward").value;

  // Check if there's availability in the selected ward
  if (bedAvailability[ward] > 0) {
    bedAvailability[ward]--; // Decrease the bed count in the selected ward

    // Prepare the patient data to be submitted
    let newPatient = {
      name: patientName,
      age: age,
      sex: sex,
      bloodGroup: bloodGroup,
      phoneNo: phoneNo,
      issue: issue,
      department: department,
      ward: ward
    };

    // Send data to Google Sheets (replace with your Google Sheets Web App URL)
    fetch('YOUR_GOOGLE_SHEET_WEB_APP_URL', { // Replace with your Web App URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPatient)
    })
    .then(response => response.text())
    .then(result => {
      alert(`${patientName} has been admitted to ${ward.charAt(0).toUpperCase() + ward.slice(1)} Ward.`);
      updateBedAvailability();

      // Optionally, add the new patient to the OPD queue (if necessary)
      opdQueue.push({ name: patientName, time: "Pending", status: "Admitted" });
      populateQueue();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add patient details.');
    });
  } else {
    alert(`No available beds in ${ward.charAt(0).toUpperCase() + ward.slice(1)} Ward.`);
  }
}

// Initialize the page with sample data
populateQueue();
updateBedAvailability();

// Chatbot toggle script
document.getElementById("toggle-chatbot").addEventListener("click", function() {
  const chatbotIframe = document.getElementById("chatbot-iframe");
  if (chatbotIframe.style.display === "none") {
    chatbotIframe.style.display = "block";
  } else {
    chatbotIframe.style.display = "none";
  }
});

// Event listener for patient admission form submission
document.getElementById("admissionForm").addEventListener("submit", handleFormSubmission);
