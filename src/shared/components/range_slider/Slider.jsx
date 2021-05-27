import React, { useState } from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import creditsActions from '@/redux/actions/userInfoActions';

import 'rc-slider/assets/index.css';

const { Handle } = Slider;

const SliderTheme = ({
  marks, defaultValue, min, max, tipFormatter,
}) => {
  const creditsDispatch = useDispatch();
  const [credits, setCredits] = useState(100);

  const handle = ({ value, index, ...restProps }) => {
     switch (value) {
       case 30: {
         setCredits(30); break;
       } 
       case 40: {
        setCredits(40); break;
       } 
       case 50: {
        setCredits(75); break;
       } 
       case 60: {
        setCredits(90); break;
       } 
       case 70: {
        setCredits(105); break;
       } 
       case 80: {
        setCredits(120); break;
       } 
       case 90: {
        setCredits(135); break;
       } 
       case 100: {
        setCredits(200); break;
       } 
       case 110: {
        setCredits(220); break;
       } 
       case 120: {
        setCredits(240); break;
       } 
       case 130: {
        setCredits(260); break;
       } 
       case 140: {
        setCredits(280); break;
       } 
       case 150: {
        setCredits(375); break;
       } 
       case 160: {
        setCredits(400); break;
       } 
       case 170: {
        setCredits(425); break;
       } 
       case 180: {
        setCredits(450); break;
       } 
       case 190: {
        setCredits(475); break;
       } 
       case 200: {
        setCredits(500); break;
       } 
       default: break;
     }     
     creditsDispatch(creditsActions(value, credits));
     const tooltipStr = `price: ${value }$, credits: ${credits}`;
     return (
       <Tooltip
         prefixCls="rc-slider-tooltip"
         overlay={tooltipStr}
         visible
         placement="top"
         key={index}
       >
         <Handle value={value} {...restProps} dragging={undefined} />
       </Tooltip>
     );
   };
  
  return (
    <div className="slider">
      <div className="slider__min">
        <p>{tipFormatter ? tipFormatter(min) : min}</p>
      </div>
      <div className="slider__max">
        <p>{tipFormatter ? tipFormatter(max) : max}</p>
      </div>      
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        handle={handle}
        marks={marks}    
        tipFormatter={tipFormatter}
        step={10}
      />
    </div>
  );
};

SliderTheme.propTypes = {
  marks: PropTypes.shape(),
  defaultValue: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  tipFormatter: PropTypes.func,
};

SliderTheme.defaultProps = {
  marks: {},
  defaultValue: 100,
  tipFormatter: value => value,
};

export default SliderTheme;
