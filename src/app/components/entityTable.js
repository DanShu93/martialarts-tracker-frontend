import React, {Component} from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';
import EntityNewButtonContainer from "../containers/entityNewButtonContainer";
import EntityUpdateDialogContainer from "../containers/entityUpdateDialogContainer";

class EntityTable extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            {this.props.entity.columns.map((row, i) =>
                                <TableCell key={i}>{row}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(this.props.data[this.props.entity.dialogName]).map((id, i) =>
                            <TableRow onClick={function () {
                                this.props.onRowClick(this.props.entity, this.props.data[this.props.entity.dialogName][id]);
                                this.setState({
                                    open: true,
                                });
                            }.bind(this)} key={i} hover>
                                {this.props.entity.columns.map((column, i) =>
                                    <TableCell
                                        key={i}>{this.props.data[this.props.entity.dialogName][id].data[column]}</TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <EntityNewButtonContainer/>
                <EntityUpdateDialogContainer onClose={this.handleClose} open={this.state.open}/>
            </div>
        );
    }
}

EntityTable.propTypes = {
    entity: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired,
};

export default EntityTable
