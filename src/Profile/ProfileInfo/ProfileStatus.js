import React, { Component } from 'react'
import classes from './Profile.module.css'
import Preloader from './../../components/common/preloader/Preloader'

export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        });
    }
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || '---'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}
                            value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
