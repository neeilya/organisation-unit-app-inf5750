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
    // TODO: Implement
}

export function deleteOrganisationUnit(organisationUnitId) {
    // TODO: Implement
}

export function loadOrganisationUnits() {
    // TODO: Implement
}