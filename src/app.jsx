import React from 'react';
import { render } from 'react-dom';
import { saveOrganisationUnit, loadOrganisationUnits, deleteOrganisationUnit } from './api';

import OrganizationUnitsList from './components/organizationUnitsList.jsx';
import OrganizationUnitForm from './components/organizationUnitForm.jsx';

const App = React.createClass({
    getInitialState() {
        return {
            organizationUnits: []    
        };
    },
    componentDidMount() {
        loadOrganisationUnits().then(organizationUnits => {
            this.setState({
                organizationUnits: organizationUnits
            });
        });
    },
    removeItem(id, index) {
        this.setState(state => {
            let newData = state.organizationUnits.slice();

            newData.splice(index, 1);

            return { organizationUnits: newData};
        });
    },
    addItem(organizationUnit) {
        this.setState(state => {
            state.organizationUnits.push(organizationUnit);

            return state;
        });
    },
    render() {
        return (
            <div className="app">
                <OrganizationUnitsList organizationUnits={ this.state.organizationUnits } onRemove={ this.removeItem } />
                <OrganizationUnitForm onCreate={ this.addItem } />
            </div>
        )
    }
});

render(<App/>, document.getElementById('app'));