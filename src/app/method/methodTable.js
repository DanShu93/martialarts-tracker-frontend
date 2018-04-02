import React, {Component} from 'react';
import Table, {TableBody, TableHead, TableRow, TableCell} from 'material-ui/Table';
import PropTypes from 'prop-types';
import NewMethodButton from "./newMethodButton";

class MethodTable extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{"Name"}</TableCell>
                            <TableCell>{"Kind"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((row,i) =>
                            <TableRow key={i}>
                                <TableCell>{row.data.name}</TableCell>
                                <TableCell>{row.data.kind}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <NewMethodButton onSubmit={this.props.onSubmit}/>
            </div>
        );
    }
}

MethodTable.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};

export default MethodTable;