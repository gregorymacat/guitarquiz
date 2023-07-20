import React from 'react';
import {shallow} from 'enzyme';

import Note from './Note.jsx';
import Guitar from '../Helpers/Guitar.js';

const DEFAULT_SETTINGS = {
  numOfStrings: 6,
  numOfFrets: 12,
  fretRange: [0, 12],
  delayBetweenNotes: 2000,
}

//guitarMeasurements, settings, setNote, isCorrect, needNewNote, setNeedNewNote
describe('Note component with props', () => {
  
  const guitarMeasurements = new Guitar( DEFAULT_SETTINGS.numOfFrets,  DEFAULT_SETTINGS.numOfStrings);
  it ('Should be located centered between 0 and 100', () => {
    const wrapper = shallow(<Note />);
    const circle = wrapper.find('circle');
    console.log(circle);
    // expect(wrapper.find())
  })
}) 