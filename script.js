document.addEventListener("DOMContentLoaded", () => {
  // Function to add schedule data
  const scheduleForm = document.getElementById("schedule-form");
  const scheduleTable = document
    .getElementById("schedule-table")
    .getElementsByTagName("tbody")[0];

  scheduleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const deskripsi = document.getElementById("deskripsi").value;
    const mChecked = document.getElementById("m").checked ? "✔" : "";
    const tChecked = document.getElementById("t").checked ? "✔" : "";

    const newRow = scheduleTable.insertRow();
    newRow.innerHTML = `<td>${deskripsi}</td><td>${mChecked}</td><td>${tChecked}</td>`;
    scheduleForm.reset();
  });

  // Function to add vendor data
  const vendorForm = document.getElementById("vendor-form");
  const vendorTable = document
    .getElementById("vendor-table")
    .getElementsByTagName("tbody")[0];

  vendorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const deskripsi = document.getElementById("vendor-deskripsi").value;
    const ok = document.getElementById("ok").checked ? "✔" : "";
    const jeda = document.getElementById("jeda").checked ? "✔" : "";
    const notOke = document.getElementById("not-oke").checked ? "✔" : "";

    const newRow = vendorTable.insertRow();
    newRow.innerHTML = `<td>${deskripsi}</td><td>${okChecked}</td><td>${jedaChecked}</td><td>${notOkeChecked}</td>`;
    vendorForm.reset();
  });

  // Function to add project data
  const projectForm = document.getElementById("project-form");
  const projectTable = document
    .getElementById("project-table")
    .getElementsByTagName("tbody")[0];

  projectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;
    const status = document.getElementById("project-status").value;

    const newRow = projectTable.insertRow();
    newRow.innerHTML = `
            <td>${name}</td>
            <td>${description}</td>
            <td>${status}</td>
            <td>
                <button onclick="approveProject(this)">Approve</button>
                <button onclick="declineProject(this)">Decline</button>
            </td>
        `;
    projectForm.reset();
  });

  // Handle Approve and Decline for Project
  window.approveProject = function (button) {
    const row = button.parentElement.parentElement;
    row.cells[2].textContent = "Approved";
  };

  window.declineProject = function (button) {
    const row = button.parentElement.parentElement;
    row.cells[2].textContent = "Declined";
  };

  // Function to add DH/UH status
  const dhUhForm = document.getElementById("dh-uh-form");
  const dhUhTable = document
    .getElementById("dh-uh-table")
    .getElementsByTagName("tbody")[0];

  dhUhForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const status = document.getElementById("dh-uh-status").value;

    const newRow = dhUhTable.insertRow();
    newRow.innerHTML = `
            <td>${status}</td>
            <td>
                <button onclick="approveDHUH(this)">Approve</button>
                <button onclick="declineDHUH(this)">Decline</button>
            </td>
        `;
    dhUhForm.reset();
  });

  // Handle Approve and Decline for DH/UH
  window.approveDHUH = function (button) {
    const row = button.parentElement.parentElement;
    row.cells[0].textContent = "Approved";
  };

  window.declineDHUH = function (button) {
    const row = button.parentElement.parentElement;
    row.cells[0].textContent = "Declined";
  };
});
