import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderNumbers = (onClickNumber) => {
    return numbers.map(
        number => <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
}

const Number = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderNumbers(onClickNumber)
        }
    </section>
)

Number.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Number;