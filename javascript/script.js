let totalFees = 0;
let pendingHomework = 0;
let averageAttendance = 0;

function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function updateFees() {
    const feesInput = document.getElementById('feesInput');
    const amount = parseFloat(feesInput.value);
    if (!isNaN(amount)) {
        totalFees += amount;
        document.getElementById('feesValue').textContent = `$${totalFees.toFixed(2)}`;
        feesInput.value = '';
        closeModal('feesModal');
    }
}

function updateHomework() {
    const homeworkInput = document.getElementById('homeworkInput');
    const assignments = parseInt(homeworkInput.value);
    if (!isNaN(assignments)) {
        pendingHomework = assignments;
        document.getElementById('homeworkValue').textContent = pendingHomework;
        homeworkInput.value = '';
        closeModal('homeworkModal');
    }
}

function updateAttendance() {
    const attendanceInput = document.getElementById('attendanceInput');
    const attendance = parseFloat(attendanceInput.value);
    if (!isNaN(attendance) && attendance >= 0 && attendance <= 100) {
        averageAttendance = attendance;
        document.getElementById('attendanceValue').textContent = `${averageAttendance}%`;
        attendanceInput.value = '';
        closeModal('attendanceModal');
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
