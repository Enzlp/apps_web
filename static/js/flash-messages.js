const hideFlashMessages = (duration) => {
    const flashMessages = document.getElementById("flash-messages");
    if (flashMessages) {
        setTimeout(() => {
            flashMessages.style.display = "none";
        }, duration);
    }
};
