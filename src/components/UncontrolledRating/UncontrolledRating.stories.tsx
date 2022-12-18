import React from 'react'
import {UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    title: "Rating stories",
    component: UncontrolledRating
}

export const UncontrolledAccordion_0 = () =>  <UncontrolledRating defaultValue={0} onChange={action("change rating")}/>;
export const UncontrolledAccordion_1 = () =>  <UncontrolledRating defaultValue={1} onChange={action("change rating")}/>;
export const UncontrolledAccordion_2 = () =>  <UncontrolledRating defaultValue={2} onChange={action("change rating")}/>;
export const UncontrolledAccordion_3 = () =>  <UncontrolledRating defaultValue={3} onChange={action("change rating")}/>;
export const UncontrolledAccordion_4 = () =>  <UncontrolledRating defaultValue={4} onChange={action("change rating")}/>;
export const UncontrolledAccordion_5 = () =>  <UncontrolledRating defaultValue={5} onChange={action("change rating")}/>
export const UncontrolledAccordionStory = () =>  <UncontrolledRating onChange={action("change rating")}/>;
