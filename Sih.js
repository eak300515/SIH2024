// GitHub repository details
const username = "Anirban-Sarkar-code-it"; // Your GitHub username
const repo = "SIH2024"; // Your repository name
const filePath = "Patient_data.csv"; // Path to the CSV file in the repo
const token = "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"; // Your GitHub personal access token

let opdQueue = [
  { name: "Lakshay Singh", time: "10:00 AM", status: "Waiting" },
  { name: "Anirban Sarkar", time: "10:15 AM", status: "In Consultation" },
  { name: "Akshay Triwedi", time: "10:00 AM", status: "In Consultation"},
  { name: "Vyakhya Namdev", time: "11:00 AM", status: "Waiting"}
];

// Function to fetch CSV content from GitHub
async function fetchCSVData() {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${filePath}`, {
      method: 'GET',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const fileData = await response.json();
    const csvContent = atob(fileData.content); // Decode base64 content

    return csvContent;
  } catch (error) {
    console.error('Error fetching CSV data:', error);
    alert('Failed to fetch CSV data.');
  }
}

// Function to parse CSV into array of objects
function parseCSV(csvContent) {
  const lines = csvContent.split("\n").filter(line => line.trim() !== ''); // Remove empty lines
  const headers = lines[0].split(","); // Assuming the first row is the header

  const data = lines.slice(1).map(line => {
    const values = line.split(",");
    return {
      name: values[0]?.trim() || '',
      age: values[1]?.trim() || '',
      sex: values[2]?.trim() || '',
      bloodGroup: values[3]?.trim() || '',
      phone: values[4]?.trim() || '',
      problem: values[5]?.trim() || '',
      department: values[6]?.trim() || '',
      doctorName: values[7]?.trim() || ''
    };
  });

  return data;
}

// Function to populate OPD queue dynamically
async function populateQueue() {
  const csvData = await fetchCSVData();
  if (csvData) {
    opdQueue = parseCSV(csvData);

    const queueList = document.getElementById("queue-list");
    queueList.innerHTML = ''; // Clear existing data

    opdQueue.forEach(patient => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.sex}</td>
        <td>${patient.bloodGroup}</td>
        <td>${patient.phone}</td>
        <td>${patient.problem}</td>
        <td>${patient.department}</td>
        <td>${patient.doctorName}</td>
      `;
      queueList.appendChild(row);
    });
  }
}

// Sample data for bed availability
let bedAvailability = {
  icu: 15,
  general: 45,
  private: 166,
};

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
    
    // Send data to Google Sheets (replace with your actual Web App URL)
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

// Initialize the page with data
populateQueue();
updateBedAvailability();
