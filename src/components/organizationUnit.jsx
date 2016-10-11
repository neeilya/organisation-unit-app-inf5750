import React from 'react';
import { deleteOrganisationUnit } from '../api';

class OrganizationUnit extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.state = this.props;
    }
    handleClick() {
        this.setState({
            originalName: this.state.displayName,
            displayName: 'Deleting',
        });

        deleteOrganisationUnit(this.props.id).then(() => {
            this.props.onRemove(this.props.id, this.props.index);
        }).catch(err => {
            this.setState({
                displayName: this.state.originalName
            })
        });
    }
    render() {
        return (
            <li onClick={ this.handleClick }>{ this.state.displayName }</li>
        );
    }
};

export default OrganizationUnit;