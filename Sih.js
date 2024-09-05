// Sample data for queue and bed availability
let opdQueue = [
  { name: "John Doe", time: "10:00 AM", status: "Waiting" },
  { name: "Jane Smith", time: "10:15 AM", status: "In Consultation" },
  { name: "Michael Johnson", time: "10:30 AM", status: "Waiting" },
  { name: "Emily Davis", time: "10:45 AM", status: "Waiting" },
  { name: "David Martinez", time: "11:00 AM", status: "In Consultation" },
  { name: "Sophia Garcia", time: "11:15 AM", status: "Waiting" },
  { name: "Daniel Rodriguez", time: "11:30 AM", status: "Waiting" },
  { name: "Emma Wilson", time: "11:45 AM", status: "Waiting" },
  { name: "Olivia Brown", time: "12:00 PM", status: "Waiting" },
  { name: "James Thompson", time: "12:15 PM", status: "In Consultation" },
  { name: "Mia Anderson", time: "12:30 PM", status: "Waiting" },
  { name: "Benjamin Harris", time: "12:45 PM", status: "Waiting" },
  { name: "Ava Moore", time: "1:00 PM", status: "Waiting" },
  { name: "Lucas Lee", time: "1:15 PM", status: "In Consultation" },
  { name: "Isabella Taylor", time: "1:30 PM", status: "Waiting" },
  { name: "Mason White", time: "1:45 PM", status: "Waiting" },
  { name: "Harper Clark", time: "2:00 PM", status: "Waiting" },
  { name: "Ethan King", time: "2:15 PM", status: "In Consultation" },
  { name: "Amelia Allen", time: "2:30 PM", status: "Waiting" },
  { name: "Logan Scott", time: "2:45 PM", status: "Waiting" },
  { name: "Charlotte Young", time: "3:00 PM", status: "Waiting" },
  { name: "Jacob Hill", time: "3:15 PM", status: "In Consultation" },
  { name: "Elijah Green", time: "3:30 PM", status: "Waiting" },
  { name: "Liam Adams", time: "3:45 PM", status: "Waiting" },
  { name: "Grace Baker", time: "4:00 PM", status: "Waiting" },
  { name: "Henry Gonzalez", time: "4:15 PM", status: "In Consultation" },
  { name: "Abigail Perez", time: "4:30 PM", status: "Waiting" },
  { name: "Jack Mitchell", time: "4:45 PM", status: "Waiting" },
  { name: "Aiden Roberts", time: "5:00 PM", status: "Waiting" },
  { name: "Scarlett Carter", time: "5:15 PM", status: "In Consultation" },
  { name: "Noah Phillips", time: "5:30 PM", status: "Waiting" },
  { name: "Lily Evans", time: "5:45 PM", status: "Waiting" },
  { name: "Matthew Turner", time: "6:00 PM", status: "Waiting" },
  { name: "Sophie Collins", time: "6:15 PM", status: "In Consultation" },
  { name: "Ryan Stewart", time: "6:30 PM", status: "Waiting" },
  { name: "Hannah Sanders", time: "6:45 PM", status: "Waiting" },
  { name: "Alexander Price", time: "7:00 PM", status: "Waiting" },
  { name: "Ella Russell", time: "7:15 PM", status: "In Consultation" },
  { name: "Sebastian Morris", time: "7:30 PM", status: "Waiting" },
  { name: "Zoe Bennett", time: "7:45 PM", status: "Waiting" },
  { name: "Jackson Foster", time: "8:00 PM", status: "Waiting" },
  { name: "Avery Brooks", time: "8:15 PM", status: "In Consultation" },
  { name: "Dylan Jenkins", time: "8:30 PM", status: "Waiting" },
  { name: "Leah Murphy", time: "8:45 PM", status: "Waiting" },
  { name: "Caleb Perry", time: "9:00 PM", status: "Waiting" },
  { name: "Victoria Bell", time: "9:15 PM", status: "In Consultation" },
  { name: "Owen Powell", time: "9:30 PM", status: "Waiting" },
  { name: "Eleanor Cox", time: "9:45 PM", status: "Waiting" },
  { name: "Gabriel Howard", time: "10:00 PM", status: "Waiting" },
  { name: "Chloe Ward", time: "10:15 PM", status: "In Consultation" },
  { name: "Anthony Rivera", time: "10:30 PM", status: "Waiting" },
  { name: "Aria Torres", time: "10:45 PM", status: "Waiting" },
  { name: "Henry Peterson", time: "11:00 PM", status: "Waiting" },
  { name: "Savannah Gray", time: "11:15 PM", status: "In Consultation" },
  { name: "Isaac Ramirez", time: "11:30 PM", status: "Waiting" },
  { name: "Ella Reed", time: "11:45 PM", status: "Waiting" },
  { name: "Wyatt Wood", time: "12:00 AM", status: "Waiting" },
  { name: "Hazel Price", time: "12:15 AM", status: "In Consultation" },
  { name: "Hunter Morgan", time: "12:30 AM", status: "Waiting" },
  { name: "Violet Bailey", time: "12:45 AM", status: "Waiting" },
  { name: "Landon Edwards", time: "1:00 AM", status: "Waiting" },
  { name: "Stella Kelly", time: "1:15 AM", status: "In Consultation" },
  { name: "Nathan Hughes", time: "1:30 AM", status: "Waiting" },
  { name: "Luna Sanders", time: "1:45 AM", status: "Waiting" },
  { name: "Julian Bryant", time: "2:00 AM", status: "Waiting" },
  { name: "Penelope Hayes", time: "2:15 AM", status: "In Consultation" },
  { name: "Isaiah Perry", time: "2:30 AM", status: "Waiting" },
  { name: "Aubrey Graham", time: "2:45 AM", status: "Waiting" },
  { name: "Hudson Alexander", time: "3:00 AM", status: "Waiting" },
  { name: "Nora Brooks", time: "3:15 AM", status: "In Consultation" },
  { name: "Christian Sanders", time: "3:30 AM", status: "Waiting" },
  { name: "Camila Bennett", time: "3:45 AM", status: "Waiting" },
  { name: "Levi Jenkins", time: "4:00 AM", status: "Waiting" },
  { name: "Aurora Foster", time: "4:15 AM", status: "In Consultation" },
  { name: "Zachary Murphy", time: "4:30 AM", status: "Waiting" },
  { name: "Grace Howard", time: "4:45 AM", status: "Waiting" },
  { name: "Thomas Ward", time: "5:00 AM", status: "Waiting" },
  { name: "Scarlett Rivera", time: "5:15 AM", status: "In Consultation" },
  { name: "Mila Torres", time: "5:30 AM", status: "Waiting" },
  { name: "Lincoln Peterson", time: "5:45 AM", status: "Waiting" },
  { name: "Addison Cox", time: "6:00 AM", status: "Waiting" },
  { name: "Josiah Bell", time: "6:15 AM", status: "In Consultation" },
  { name: "Ezra Ramirez", time: "6:30 AM", status: "Waiting" },
  { name: "Sadie Reed", time: "6:45 AM", status: "Waiting" },
  { name: "Eli Wood", time: "7:00 AM", status: "Waiting" },
  { name: "Lucy Price", time: "7:15 AM", status: "In Consultation" },
  { name: "Isaac Morgan", time: "7:30 AM", status: "Waiting" },
  { name: "Samantha Gray", time: "7:45 AM", status: }
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
