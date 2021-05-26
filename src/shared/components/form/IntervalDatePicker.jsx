import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import MinusIcon from 'mdi-react/MinusIcon';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { apiOptionActions } from '@/redux/actions/apiActions';

const IntervalDatePickerField = ({ onChange }) => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
  });

  const apiOptionDispatch = useDispatch();

  const handleChange = ({ startDate, endDate }) => {
    const { startDate: stateStartDate, endDate: stateEndDate } = state;

    const startDateCopy = startDate || stateStartDate;
    const endDateCopy = endDate || stateEndDate;

    setState({ startDate: startDateCopy, endDate: endDateCopy });
    onChange({ start: startDateCopy, end: endDateCopy });
    if (startDateCopy && endDateCopy) {
      apiOptionDispatch(apiOptionActions('interval', { 
        from: `${startDateCopy.getYear() + 1900}-${startDateCopy.getMonth() + 1}-${startDateCopy.getDate()}`, 
        to: `${endDateCopy.getYear() + 1900}-${endDateCopy.getMonth() + 1}-${endDateCopy.getDate()}`, 
      })); 
    }
  };

  const handleChangeStart = startDate => handleChange({ startDate });
  const handleChangeEnd = endDate => handleChange({ endDate });

  const { startDate, endDate } = state;
  return (
    <div className="date-picker date-picker--interval">
      <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={handleChangeStart}
        dateFormat="yyyy/MM/dd"
        placeholderText="From"
        dropDownMode="select"
        withPortal={isMobileOnly}
      />
      <MinusIcon className="date-picker__svg" />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        onChange={handleChangeEnd}
        dateFormat="yyyy/MM/dd"
        placeholderText="To"
        dropDownMode="select"
        withPortal={isMobileOnly}
      />
    </div>
  );
};

IntervalDatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const renderIntervalDatePickerField = ({ input }) => <IntervalDatePickerField {...input} />;

renderIntervalDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default renderIntervalDatePickerField;
