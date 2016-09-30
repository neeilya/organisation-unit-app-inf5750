import { getDataFromForm, registerSubmitHandler } from './form';
import { saveOrganisationUnit, loadOrganisationUnits, deleteOrganisationUnit } from './api';
import { populateList, registerClickHandlerForItems } from './list';

function loadOrganisationUnitsIntoList() {
    loadOrganisationUnits()
        .then(populateList)
        .catch(function (e) {
            alert(e.message);
        });
}

loadOrganisationUnitsIntoList();

registerSubmitHandler(function () {
    saveOrganisationUnit(getDataFromForm())
        .then(loadOrganisationUnitsIntoList)
        .catch(() => alert('could not load list'));
});

registerClickHandlerForItems(function (element) {
    const organisationUnitId = element.dataset.id;

    element.innerHTML = `Deleting ${element.innerHTML}`;

    deleteOrganisationUnit(organisationUnitId)
        .catch(() => alert('delete failed!'))
        .then(loadOrganisationUnitsIntoList);
});
