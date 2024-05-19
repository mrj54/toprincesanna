document.getElementById('encourageButton').addEventListener('click', function() {
    var encouragementMessage = document.getElementById('encouragementMessage');
    if (encouragementMessage.classList.contains('hidden')) {
        encouragementMessage.classList.remove('hidden');
        encouragementMessage.style.animation = 'fadeIn 1s';
    } else {
        encouragementMessage.classList.add('hidden');
    }
});

// Add a fade-in animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
`, styleSheet.cssRules.length);
