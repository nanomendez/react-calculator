import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button'

const Functions = ({ onClickClear, onClickDelete }) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onClickClear} />
        <Button text="&larr;" clickHandler={onClickDelete} />
    </section>
)

Functions.propTypes = {
    onClickClear: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default Functions;

