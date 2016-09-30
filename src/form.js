export function getDataFromForm() {
    return {
        name: document.querySelector('#name').value,
        shortName: document.querySelector('#shortName').value,
        openingDate: document.querySelector('#openingDate').value,
    }
}

export function registerSubmitHandler(callback) {
    document
        .querySelector('#submit')
        .addEventListener('click', (event) => {
            event.preventDefault();

            callback(event);
        });
}