document.getElementById('buttons').onclick = (event) => {
    const button = event.target;
    const action = button.dataset.action;
    const display = document.getElementById('display');
    const displayValue = display.value;
}
