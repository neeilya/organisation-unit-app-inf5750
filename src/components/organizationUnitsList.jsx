import React from 'react';
import OrganizationUnit from './organizationUnit.jsx';

class OrganizationUnitsList extends React.Component {
    render() {
        return (
            <div className="list">
                <ul>{
                        this.props.organizationUnits.map((organizationUnit, index) => {
                            return <OrganizationUnit key={ organizationUnit.id }
                                id={ organizationUnit.id }
                                index={ index }
                                displayName={ organizationUnit.displayName }
                                onRemove={ this.props.onRemove }
                            />
                        })
                }</ul>
            </div>
        );
    }
};

export default OrganizationUnitsList;