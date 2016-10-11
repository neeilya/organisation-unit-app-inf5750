import React from 'react';
import { saveOrganisationUnit } from '../api';

class OrganizationUnitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            shortName: '',
            openingDate: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.setName = this.setName.bind(this);
        this.setShortName = this.setShortName.bind(this);
        this.setOpeningDate = this.setOpeningDate.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();

        saveOrganisationUnit(this.state).then(result => {
            let organizationUnit = {
                id: result.response.lastImported,
                displayName: this.state.name,
                openingDate: this.state.openingDate
            };

            this.props.onCreate(organizationUnit);
        });
    }
    setName(event) {
        this.state.name = event.target.value;
    }
    setShortName(event) {
        this.state.shortName = event.target.value;
    }
    setOpeningDate(event) {
        this.state.openingDate = event.target.value;
    }
    render() {
        return (
            <div className="form">
                <form>
                    <div>
                        <label>
                            <span>Name</span>
                            <input id="name" type="text" onChange={ this.setName } />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Short name</span>
                            <input id="shortName" type="text" onChange={ this.setShortName } />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Opening date</span>
                            <input id="openingDate" type="date" onChange={ this.setOpeningDate } />
                        </label>
                    </div>
                    <div>
                        <button id="submit" onClick={ this.onSubmit }>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default OrganizationUnitForm;