// GitHub repository details
const username = "your-username"; // Replace with your GitHub username
const repo = "your-repo"; // Replace with your repository name
const filePath = "https://github.com/Anirban-Sarkar-code-it/SIH2024/blob/255fd8eef9b338980d93d2a52fec4734bea6e2f5/Patient_data.csv"; // Path to the CSV file in the repo
const token = "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"; // Your GitHub personal access token

// Function to fetch the file content from GitHub (CSV format)
async function getFileSha() {
  const response = await fetch(`https://github.com/Anirban-Sarkar-code-it/SIH2024/blob/255fd8eef9b338980d93d2a52fec4734bea6e2f5/Patient_data.csv`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });
  
  const fileData = await response.json();
  return fileData.sha; // This is the file's SHA needed for updating the file
}

// Function to update the CSV file in the GitHub repository
async function updateCSV(patientName, ward) {
  const sha = await getFileSha(); // Fetch the current SHA for the file
  
  // The new CSV data to append
  const newPatientData = `${patientName},${ward},${new Date().toLocaleString()}\n`;

  // Convert the new data to Base64 for GitHub
  const base64Data = btoa(newPatientData);

  // Make the API request to update the file
  const response = await fetch(`https://github.com/Anirban-Sarkar-code-it/SIH2024/blob/255fd8eef9b338980d93d2a52fec4734bea6e2f5/Patient_data.csv`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: "Updated patient data",
      content: base64Data,
      sha: sha
    })
  });

  if (response.ok) {
    alert('Patient data updated successfully!');
  } else {
    alert('Failed to update patient data!');
  }
}

// Event listener for the admission form submission
document.getElementById("admissionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let patientName = document.getElementById("patientName").value;
  let ward = document.getElementById("ward").value;

  // Call the function to update the CSV file on GitHub
  updateCSV(patientName, ward);
});
