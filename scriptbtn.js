document.addEventListener('DOMContentLoaded', function() {
    const btnAdd = document.getElementById('btn-add');

    if (btnAdd) {
        btnAdd.addEventListener('click', function() {
            window.location.href = 'new';
        });
    }
});
