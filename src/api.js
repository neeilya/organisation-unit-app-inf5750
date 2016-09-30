const serverUrl = 'http://localhost:8080/dhis/api/';
const basicAuth = `Basic ${btoa('admin:district')}`;

const fetchOptions = {
    method: 'GET',
    headers: {
        Authorization: basicAuth,
        'Content-Type': 'application/json',
    },
};

function onlySuccessResponses(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(response);
}

export function saveOrganisationUnit(organisationUnit) {
    return fetch(`${serverUrl}/organisationUnits`, Object.assign({}, fetchOptions, { method: 'POST', body: JSON.stringify(organisationUnit) }))
        .then(onlySuccessResponses)
        .then(response => response.json())
        .catch(error => console.error(error));
}

export function deleteOrganisationUnit(organisationUnitId) {
    return fetch(
        `${serverUrl}/organisationUnits/${organisationUnitId}`,
        {
            headers: fetchOptions.headers,
            method: 'DELETE',
        }
    )
    .then(onlySuccessResponses);
}

export function loadOrganisationUnits() {
    return fetch(`${serverUrl}/organisationUnits?paging=false&level=1`, fetchOptions)
        .then(onlySuccessResponses)
        .then(response => response.json())
        .then(({ organisationUnits }) => organisationUnits);
}