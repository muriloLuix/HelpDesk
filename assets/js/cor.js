document.addEventListener('DOMContentLoaded', function () {
    var urgCells = document.querySelectorAll('.urg');

    urgCells.forEach(function (cell) {
        var urgValue = cell.textContent.trim().toLowerCase();
        cell.classList.add(urgValue);
    });
});