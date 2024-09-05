// Sample data for queue and bed availability
let opdQueue = [
  { name: "John Doe", time: "10:00 AM", status: "Waiting" },
  { name: "Jane Smith", time: "10:15 AM", status: "In Consultation" },
  { name: "Alice Johnson", time: "10:30 AM", status: "Waiting" },
  { name: "Bob Lee", time: "10:45 AM", status: "Waiting" },
  { name: "Charlie Brown", time: "11:00 AM", status: "In Consultation" },
  { name: "David Kim", time: "11:15 AM", status: "Waiting" },
  { name: "Eva Long", time: "11:30 AM", status: "Waiting" },
  { name: "Frank Black", time: "11:45 AM", status: "In Consultation" },
  { name: "Grace White", time: "12:00 PM", status: "Waiting" },
  { name: "Henry Green", time: "12:15 PM", status: "In Consultation" },
  { name: "Isabel Clark", time: "12:30 PM", status: "Waiting" },
  { name: "James Baker", time: "12:45 PM", status: "Waiting" },
  { name: "Karen Scott", time: "01:00 PM", status: "In Consultation" },
  { name: "Liam Brown", time: "01:15 PM", status: "Waiting" },
  { name: "Mia Evans", time: "01:30 PM", status: "Waiting" },
  { name: "Nathan Turner", time: "01:45 PM", status: "In Consultation" },
  { name: "Olivia Hughes", time: "02:00 PM", status: "Waiting" },
  { name: "Paul Adams", time: "02:15 PM", status: "Waiting" },
  { name: "Quinn Parker", time: "02:30 PM", status: "In Consultation" },
  { name: "Rachel Wilson", time: "02:45 PM", status: "Waiting" },
  { name: "Samuel Lewis", time: "03:00 PM", status: "In Consultation" },
  { name: "Tina Walker", time: "03:15 PM", status: "Waiting" },
  { name: "Uma Hall", time: "03:30 PM", status: "Waiting" },
  { name: "Victor Young", time: "03:45 PM", status: "In Consultation" },
  { name: "Wendy Carter", time: "04:00 PM", status: "Waiting" },
  { name: "Xander Foster", time: "04:15 PM", status: "In Consultation" },
  { name: "Yara Torres", time: "04:30 PM", status: "Waiting" },
  { name: "Zack Moore", time: "04:45 PM", status: "Waiting" },
  { name: "Ann Lopez", time: "05:00 PM", status: "In Consultation" },
  { name: "Ben Allen", time: "05:15 PM", status: "Waiting" },
  { name: "Catherine Murphy", time: "05:30 PM", status: "Waiting" },
  { name: "Daniel Phillips", time: "05:45 PM", status: "In Consultation" },
  { name: "Elena Cruz", time: "06:00 PM", status: "Waiting" },
  { name: "Fred Simmons", time: "06:15 PM", status: "In Consultation" },
  { name: "George Mitchell", time: "06:30 PM", status: "Waiting" },
  { name: "Hannah Bryant", time: "06:45 PM", status: "Waiting" },
  { name: "Ivan Diaz", time: "07:00 PM", status: "In Consultation" },
  { name: "Julia Reed", time: "07:15 PM", status: "Waiting" },
  { name: "Kevin Brooks", time: "07:30 PM", status: "Waiting" },
  { name: "Laura Sanders", time: "07:45 PM", status: "In Consultation" },
  { name: "Mike Perry", time: "08:00 PM", status: "Waiting" },
  { name: "Nina Ortiz", time: "08:15 PM", status: "In Consultation" },
  { name: "Oscar Ward", time: "08:30 PM", status: "Waiting" },
  { name: "Patricia Bennett", time: "08:45 PM", status: "Waiting" },
  { name: "Robert Kelly", time: "09:00 PM", status: "In Consultation" },
  { name: "Sophia Bailey", time: "09:15 PM", status: "Waiting" },
  { name: "Thomas Russell", time: "09:30 PM", status: "Waiting" },
  { name: "Ursula Patterson", time: "09:45 PM", status: "In Consultation" },
  { name: "Victor Ward", time: "10:00 PM", status: "Waiting" },
  { name: "Wanda King", time: "10:15 PM", status: "Waiting" },
  { name: "Xavier Gray", time: "10:30 PM", status: "In Consultation" },
  { name: "Yvonne Cook", time: "10:45 PM", status: "Waiting" },
  { name: "Zane Murphy", time: "11:00 PM", status: "In Consultation" },
  { name: "Amy Rogers", time: "11:15 PM", status: "Waiting" },
  { name: "Brian Price", time: "11:30 PM", status: "Waiting" },
  { name: "Carla Howard", time: "11:45 PM", status: "In Consultation" },
  { name: "David Griffin", time: "12:00 AM", status: "Waiting" },
  { name: "Eve Foster", time: "12:15 AM", status: "In Consultation" },
  { name: "Frankie Cook", time: "12:30 AM", status: "Waiting" },
  { name: "Grace Hamilton", time: "12:45 AM", status: "Waiting" },
  { name: "Harry Bell", time: "01:00 AM", status: "In Consultation" },
  { name: "Irene Matthews", time: "01:15 AM", status: "Waiting" },
  { name: "Jake Turner", time: "01:30 AM", status: "In Consultation" },
  { name: "Kate Barnes", time: "01:45 AM", status: "Waiting" },
  { name: "Leo Jenkins", time: "02:00 AM", status: "In Consultation" },
  { name: "Maria Lawson", time: "02:15 AM", status: "Waiting" },
  { name: "Nick Wallace", time: "02:30 AM", status: "Waiting" },
  { name: "Olivia Rhodes", time: "02:45 AM", status: "In Consultation" },
  { name: "Pauline Fisher", time: "03:00 AM", status: "Waiting" },
  { name: "Quincy Ramirez", time: "03:15 AM", status: "In Consultation" },
  { name: "Ruby Hayes", time: "03:30 AM", status: "Waiting" },
  { name: "Steve Meyer", time: "03:45 AM", status: "Waiting" },
  { name: "Tina Freeman", time: "04:00 AM", status: "In Consultation" },
  { name: "Ulysses Miller", time: "04:15 AM", status: "Waiting" },
  { name: "Victoria Rogers", time: "04:30 AM", status: "In Consultation" },
  { name: "Wesley Ellis", time: "04:45 AM", status: "Waiting" },
  { name: "Xena Brooks", time: "05:00 AM", status: "Waiting" },
  { name: "Yolanda Owens", time: "05:15 AM", status: "In Consultation" },
  { name: "Zachary Peterson", time: "05:30 AM", status: "Waiting" },
  { name: "Ava Sanders", time: "05:45 AM", status: "Waiting" },
  { name: "Blake Harrison", time: "06:00 AM", status: "In Consultation" },
  { name: "Chloe Fox", time: "06:15 AM", status: "Waiting" },
  { name: "Dylan Woods", time: "06:30 AM", status: "In Consultation" },
  { name: "Emily Hart", time: "06:45 AM", status: "Waiting" },
  { name: "Finn Mitchell", time: "07:00 AM", status: "Waiting" },
  { name: "Gina Stone", time: "07:15 AM", status: "In Consultation" },
  { name: "Henry Ray", time: "07:30 AM", status: "Waiting" },
  { name: "Ivy Lewis", time: "07:45 AM", status: "In Consultation" },
  { name: "Jack Crawford", time: "08:00 AM", status: "Waiting" }
];


let bedAvailability = {
  icu: 15,
  general: 45,
  private: 166,
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
