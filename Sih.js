// GitHub repository details
const username = "Anirban-Sarkar-code-it"; // Replace with your GitHub username
const repo = "SIH2024"; // Replace with your repository name
const filePath = "https://github.com/Anirban-Sarkar-code-it/SIH2024/blob/255fd8eef9b338980d93d2a52fec4734bea6e2f5/Patient_data.csv"; // Path to the CSV file in the repo
const token = "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"; // Your GitHub personal access token

let opdQueue = [];

// Function to fetch CSV content from GitHub
async function fetchCSVData() {
  const response = await fetch(`https://api.github.com/repos/${Anirban-Sarkar-code-it}/${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}/contents/${https://github.com/Anirban-Sarkar-code-it/SIH2024/blob/255fd8eef9b338980d93d2a52fec4734bea6e2f5/Patient_data.csv}`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${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}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  const fileData = await response.json();
  const csvContent = atob(fileData.content); // Decode base64 content

  return csvContent;
}

// Function to parse CSV into array of objects
function parseCSV(csvContent) {
  const lines = csvContent.split("\n");
  const headers = lines[0].split(",");

  const data = lines.slice(1).map(line => {
    const values = line.split(",");
    return {
      name: values[0].trim(),
      time: values[1].trim(),
      status: values[2].trim()
    };
  });

  return data;
}

// Function to populate OPD queue dynamically
async function populateQueue() {
  const csvData = await fetchCSVData();
  opdQueue = parseCSV(csvData);

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
    bedAvailability[ward]--;
    
    // Send data to Google Sheets
    fetch('YOUR_GOOGLE_SHEET_WEB_APP_URL', { // Replace with your Web App URL
      method: 'POST',
      contentType: 'application/json',
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
