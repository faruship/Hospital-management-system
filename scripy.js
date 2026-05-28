// GENERATE PATIENT ID

function generatePatientId(){

    let randomNumber = Math.floor(Math.random() * 100000);

    return "PAT-" + randomNumber;
}

// SET PATIENT ID

document.getElementById("patientId").value = generatePatientId();


// HIDE ALL SECTIONS

function hideAllSections(){

    document.getElementById("registrationSection").style.display = "none";

    document.getElementById("appointmentSection").style.display = "none";

    document.getElementById("doctorSection").style.display = "none";

    document.getElementById("billingSection").style.display = "none";

    document.getElementById("reportSection").style.display = "none";
}


// SHOW FUNCTIONS

function showRegistration(){

    hideAllSections();

    document.getElementById("registrationSection").style.display = "block";
}

function showAppointments(){

    hideAllSections();

    document.getElementById("appointmentSection").style.display = "block";
}

function showDoctors(){

    hideAllSections();

    document.getElementById("doctorSection").style.display = "block";
}

function showBilling(){

    hideAllSections();

    document.getElementById("billingSection").style.display = "block";
}

function showReport(){

    hideAllSections();

    document.getElementById("reportSection").style.display = "block";
}


// TOTAL COUNTERS

let patientCount = 0;

let appointmentCount = 0;


// FORM SUBMIT

document.getElementById("registrationForm")

.addEventListener("submit", function(event){

    event.preventDefault();

    let patientId =
    document.getElementById("patientId").value;

    let patientName =
    document.getElementById("patientName").value;

    let symptoms =
    document.getElementById("symptoms").value;

    let doctor =
    document.getElementById("doctor").value;

    let appointment =
    document.getElementById("appointment").value;

    // APPOINTMENT TABLE

    let table =
    document.getElementById("appointmentTableBody");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = patientId;

    row.insertCell(1).innerHTML = patientName;

    row.insertCell(2).innerHTML = symptoms;

    row.insertCell(3).innerHTML = doctor;

    row.insertCell(4).innerHTML = appointment;

    row.insertCell(5).innerHTML = "Confirmed";

    // UPDATE CARDS

    patientCount++;

    appointmentCount++;

    document.getElementById("totalPatients").innerHTML =
    patientCount;

    document.getElementById("totalAppointments").innerHTML =
    appointmentCount;

    // UPDATE REPORT

    document.getElementById("reportContent").innerHTML +=

    `
    <p>
    ${patientName} registered with ${doctor}
    </p>
    `;

    alert("Patient Registered Successfully!");

    // RESET FORM

    document.getElementById("registrationForm").reset();

    // NEW PATIENT ID

    document.getElementById("patientId").value =
    generatePatientId();
});