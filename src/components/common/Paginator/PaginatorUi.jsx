import * as React from 'react';
//import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import { FormGroup, FormControlLabel, Checkbox, Button, styled } from '@material-ui/core';

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
  width: 150,
  height: 44,
  padding: '0 30px',
  margin: 8,
});

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Disabled" />
      <MyButton color="red">Red</MyButton>
      <MyButton color="blue">Blue</MyButton>
    </FormGroup>
  );
}