import React, {Component} from 'react';
import Dialog, {DialogActions, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import EntityDialogContentContainer from "../containers/entityDialogContentContainer";

class EntityUpdateDialog extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="update-dialog-title"
                fullScreen
            >
                <DialogTitle id="update-dialog-title">{"Update " + this.props.entity.dialogName}</DialogTitle>
                <EntityDialogContentContainer/>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={function () {
                            this.props.entity.client.update(this.props.data.id, this.props.data.data, this.props.data.references, this.props.dispatch);
                            this.props.onClose();
                        }.bind(this)}
                        color="primary"
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={function () {
                            this.props.entity.client.remove(this.props.data.id, this.props.dispatch);
                            this.props.onClose();
                        }.bind(this)}
                        color="secondary"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

EntityUpdateDialog.propTypes = {
    entity: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object,
};

export default EntityUpdateDialog
