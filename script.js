window.addEventListener("load", function() {
    const mainContent = document.getElementById("main-content");
    const smokeEffect = document.querySelector(".smoke-effect");

    // Show main content after 3 seconds (when the smoke effect is done)
    setTimeout(function() {
        document.querySelector('.smoke-effect').style.display = 'none';
        document.getElementById('main-content').classList.add('active'); // Show main content
        document.querySelector('footer').classList.add('active'); // Show footer
    }, 3000); // 3 seconds duration
});

