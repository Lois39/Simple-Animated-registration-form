function showSection(sectionNumber) {
    document.querySelectorAll('.form-section').forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById('section-' + sectionNumber).style.display = 'block';
}
