const showDeviceSection = (id) => {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => section.hidden = true);

    // Show the selected section
    const section = document.getElementById(`dispositivo-${id}`);
    if (section) {
        section.hidden = false;
    }
};

// Function to handle row clicks in ver-dispositivos.html
const showDevice = (id) => {
    // Store the device ID in local storage
    localStorage.setItem('deviceId', id);
    // Redirect to informacion-dispositivo.html
    window.location.href = 'informacion-dispositivo.html';
};

// On page load, show the section based on the device ID from local storage
window.onload = () => {
    const deviceId = localStorage.getItem('deviceId');
    if (deviceId) {
        showDeviceSection(deviceId);
        // Clear the device ID from local storage after displaying
        localStorage.removeItem('deviceId');
    }
};