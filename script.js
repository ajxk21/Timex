document.getElementById('logoLink').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('homeLink').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('readMoreBtn').addEventListener('click', function() {
    document.getElementById('descriptionSection').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
});

document.getElementById('getStartedBtn').addEventListener('click', function() {
    window.location.href = 'register.html';
});

document.getElementById('registerbtn').addEventListener('click', function() {
    window.location.href = 'register.html';
});
