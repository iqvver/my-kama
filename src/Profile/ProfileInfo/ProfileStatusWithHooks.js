import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import classes from './Profile.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <Box> {!editMode &&
            <Box>
                <span onDoubleClick={activateMode}>
                    {props.status || '---'}
                </span>
            </Box>
        }
            {editMode &&
                <Box>
                    <input onChange={onStatusChange}
                        onBlur={deactivateMode}
                        autoFocus={true}
                        value={status} />
                </Box>
            }
        </Box>
    )
}
export default ProfileStatusWithHooks;