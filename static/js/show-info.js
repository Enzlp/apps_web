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


const changeImgSize = (id) => {
    const img = document.getElementById(`dispositivo-${id}`).querySelector('.section-img');

    // Check if the img element exists
    if (!(img.classList.contains('section-img-small') || img.classList.contains('section-img-large'))) {
        console.log("No se encontró la imagen");
        return;
    }

    // Determine if the current size class is small
    if (img.classList.contains('section-img-small')) {
        // Remove the small size class and add the large size class
        img.classList.remove('section-img-small');
        img.classList.add('section-img-large');
    } else {
        // Remove the large size class and add the small size class
        img.classList.remove('section-img-large');
        img.classList.add('section-img-small');
    }
}




// On page load, show the section based on the device ID from local storage
window.onload = () => {
    const deviceId = localStorage.getItem('deviceId');
    if (deviceId) {
        showDeviceSection(deviceId);
        // Limpiar el id de almacenamiento local
        //localStorage.removeItem('deviceId');
    }
};
