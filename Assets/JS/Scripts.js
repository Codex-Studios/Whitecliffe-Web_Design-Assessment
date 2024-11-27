// Main Script
$(document).ready(function () {

    loadComponents();

    setupFontSwitch();

    initModal();

    handleDeviceView();

    setupResizeListener();

    TYModal();


});

function loadComponents() {
    $('#Navigation').load('/Assets/HTML/Components/Navigation.html');
    $('#Homepage').load('/Assets/HTML/Components/Homepage.html');
    $('#Footer').load('/Assets/HTML/Components/Footer.html');
    $('#About').load('/Assets/HTML/Components/About.html');
    $('#Bot').load('/Assets/HTML/Components/BotDashboard.html');
    $('#Showcase').load('/Assets/HTML/Components/Showcases.html');
    $('#Placeholder').load('/Assets/HTML/Components/Placeholder.html');
}

function setupFontSwitch() {
    let isAurebesh = false;

    $(document).on('click', '#font', () => {
        const texts = document.querySelectorAll('.text, label, address, textarea, p, a, h1, h2, h3, h4, input');
        const fontSwitchButton = document.querySelector('.fontBtn');

        texts.forEach(text => {
            text.style.fontFamily = isAurebesh ? 'Arial' : 'Aurebesh';
        });

        isAurebesh = !isAurebesh;

        fontSwitchButton.textContent = isAurebesh ? 'Switch to English' : 'Switch to Aurebesh';
    });
}

function initModal() {
    $(document).on('click', '#openModalBtn', function () {
        $('#modal').fadeIn();
    });

    $(document).on('click', '#closeModalBtn', function () {
        $('#modal').fadeOut();
    });

    $(document).on('click', '#subBtn', function () {
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        console.log(name, email, message);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (name !== '' && email !== '' && message !== '') {
            if (!emailPattern.test(email)) {

                alert('Please enter a valid email address.');
            } else {
                alert('message was submitted')
            }
        } else {
            alert('Please fill out all fields before submitting your idea.');
        }
    });

    $(window).on('click', function (event) {
        var modal = $('#modal')[0];
        if (event.target === modal) {
            $(modal).fadeOut();
        }
    });
}

function handleDeviceView() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    $('body').toggleClass('mobile-view', isMobile).toggleClass('pc-view', !isMobile);

    const homepagePath = isMobile ? '/Assets/HTML/Components/Mobile.html' : '/Assets/HTML/Components/Homepage.html';
    $('#Homepage').empty().load(homepagePath);
}

function setupResizeListener() {
    let resizeTimeout;
    $(window).on('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleDeviceView, 200);
    });
}

function TYModal() {
    $(document).on('click', '#submitModal', function (event) {
        event.preventDefault();

        const name = $('#input1').val().trim();
        const email = $('#input2').val().trim();
        const review = $('#rev-input').val().trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (name !== '' && email !== '' && review !== '') {
            if (!emailPattern.test(email)) {

                alert('Please enter a valid email address.');
            } else {
                $('#thankYouModal').fadeIn();
            }
        } else {
            alert('Please fill out all fields before submitting your review.');
        }
    });

    $(document).on('click', '#closeBtn', function () {
        $('#thankYouModal').fadeOut();
    });

    $(window).on('click', function (event) {
        var TY = $('#thankYouModal')[0];
        if (event.target === TY) {
            $(TY).fadeOut();
        }
    });
}
