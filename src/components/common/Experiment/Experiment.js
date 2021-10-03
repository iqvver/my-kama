import * as React from 'react'
import { FormGroup, FormControlLabel, Checkbox, styled, Button, Box, Switch, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: (props) =>
        props.color === 'red'
            ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
        props.color === 'red'
            ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
});

const Experiment = (props) => {
    debugger;
    const [isAuth, setAuth] = React.useState(true);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    return (
        <React.Fragment>
            <MyButton color="red">Red</MyButton>
            <MyButton color="blue">Blue</MyButton>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            <Button color="primary">Primary</Button>
            <Button disabled>Disabled</Button>
            <Button color="primary" href="#text-buttons">Link</Button>
            <br />
            gd
        </React.Fragment>
    );
}
export default Experiment;
