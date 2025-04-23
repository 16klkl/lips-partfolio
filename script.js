function showContent(sectionId) {
    const sections = document.querySelectorAll('.main-section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }