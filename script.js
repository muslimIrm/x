document.addEventListener("DOMContentLoaded", (event) =>{
    const input = document.getElementById('searchInput');
    const container = input.parentElement;

    input.addEventListener('focus', () =>{
        container.classList.add('focused');
    });
     input.addEventListener('blur', () =>{
        container.classList.remove('focused');
    });
    input.addEventListener('input', () => {
        if (input.value) {
            container.classList.add('xmark');
        } else {
            container.classList.remove('xmark');
        }
    });
});