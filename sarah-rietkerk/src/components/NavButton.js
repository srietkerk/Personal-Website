import React from "react";
import { PropTypes } from 'prop-types';
import '../style/nav-button.css';

function NavButton(props) {
  return <button className='nav-button'>{props.name}</button>
}
NavButton.propTypes = {
  name: PropTypes.string
}
export default NavButton;