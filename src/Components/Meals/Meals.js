import React, { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
import classes from './Meals.module.css';

const Meals = (props) => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;