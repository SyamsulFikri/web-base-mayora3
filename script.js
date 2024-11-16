// Handle form submissions and add data to tables
document.addEventListener("DOMContentLoaded", () => {
  // Schedule Form Submission
  const scheduleForm = document.getElementById("schedule-form");
  const scheduleTableBody = document
    .getElementById("schedule-table")
    .querySelector("tbody");

  scheduleForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const deskripsi = document.getElementById("deskripsi").value;
    const senin = document.getElementById("senin").checked;
    const selasa = document.getElementById("selasa").checked;
    const rabu = document.getElementById("rabu").checked;
    const kamis = document.getElementById("kamis").checked;
    const jumat = document.getElementById("jumat").checked;
    const sabtu = document.getElementById("sabtu").checked;
    const minggu = document.getElementById("minggu").checked;
    const tanggalWaktu = document.getElementById("tanggal-waktu").value;

    const row = scheduleTableBody.insertRow();
    row.innerHTML = `
        <td>${deskripsi}</td>
        <td>${senin ? "✔️" : ""}</td>
        <td>${selasa ? "✔️" : ""}</td>
        <td>${rabu ? "✔️" : ""}</td>
        <td>${kamis ? "✔️" : ""}</td>
        <td>${jumat ? "✔️" : ""}</td>
        <td>${sabtu ? "✔️" : ""}</td>
        <td>${minggu ? "✔️" : ""}</td>
        <td>${tanggalWaktu}</td>
      `;
  });

  // Vendor Form Submission
  const vendorForm = document.getElementById("vendor-form");
  const vendorTableBody = document
    .getElementById("vendor-table")
    .querySelector("tbody");

  vendorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const description = document.getElementById("vendor-description").value;
    const statusOk = document.getElementById("status-ok").checked;
    const statusJeda = document.getElementById("status-jeda").checked;
    const statusNotOk = document.getElementById("status-not-ok").checked;

    const row = vendorTableBody.insertRow();
    row.innerHTML = `
        <td>${description}</td>
        <td>${statusOk ? "✔️" : ""}</td>
        <td>${statusJeda ? "✔️" : ""}</td>
        <td>${statusNotOk ? "✔️" : ""}</td>
      `;
  });

  // Project Form Submission
  const projectForm = document.getElementById("project-form");
  const projectTableBody = document
    .getElementById("project-table")
    .querySelector("tbody");

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const projectName = document.getElementById("project-name").value;
    const projectDescription = document.getElementById(
      "project-description"
    ).value;
    const projectStatus = document.getElementById("project-status").value;

    const row = projectTableBody.insertRow();
    row.innerHTML = `
        <td>${projectName}</td>
        <td>${projectDescription}</td>
        <td>${projectStatus}</td>
        <td>
          <button class="approve-btn">Approve</button>
          <button class="decline-btn">Decline</button>
        </td>
      `;
  });

  // Handle Approve and Decline buttons for Project
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("approve-btn")) {
      const row = event.target.closest("tr");
      row.cells[2].textContent = "Approved";
    } else if (event.target.classList.contains("decline-btn")) {
      const row = event.target.closest("tr");
      row.cells[2].textContent = "Declined";
    }
  });
});
