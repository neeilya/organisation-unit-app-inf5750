export function populateList(organisationUnits) {
    const fragment = document.createDocumentFragment();

    organisationUnits
        .forEach(function (organisationUnit) {
            const element = document.createElement('li');

            element.dataset.id = organisationUnit.id;
            element.appendChild(document.createTextNode(organisationUnit.displayName));

            return fragment.appendChild(element);
        });

    const listElement = document.querySelector('.list ul');
    listElement.innerHTML = '';
    listElement.appendChild(fragment);
}

export function registerClickHandlerForItems(callback) {
    document.querySelector('.list ul')
        .addEventListener('click', function (event) {
            callback(event.target);
        });
}