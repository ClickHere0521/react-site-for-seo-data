import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
} from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { MultiSelectField } from '@/shared/components/form/MultiSelect';
import { SelectField } from '@/shared/components/form/Select';
import { FileInputField } from '@/shared/components/form/FileInput';

const Form = ({ isHorizontal }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  const {
    handleSubmit,
    register,
    reset,
    control,
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && 'form--horizontal'}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">Default Label</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Default Input"
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Disabled Field</span>
              <div className="form__form-group-field">
                <input
                  name="disableInput"
                  type="text"
                  placeholder="Disabled Input"
                  disabled
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">E-mail</span>
              <div className="form__form-group-field">
                <input
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <input
                  name="password"
                  type={isPasswordShown ? 'text' : 'password'}
                  placeholder="Password"
                  ref={register}
                />
                <button
                  type="button"
                  className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
                  onClick={showPassword}
                ><EyeIcon />
                </button>
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Icon Left</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <EmailIcon />
                </div>
                <input
                  name="leftIcon"
                  type="email"
                  placeholder="Icon Left Input"
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Icon Right</span>
              <div className="form__form-group-field">
                <input
                  name="rightIcon"
                  type="text"
                  ref={register}
                  placeholder="Icon Right Input"
                />
                <div className="form__form-group-icon">
                  <AccountSearchIcon />
                </div>
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Field with description</span>
              <div className="form__form-group-field">
                <input
                  name="descriptionInput"
                  type="text"
                  ref={register}
                />
              </div>
              <span className="form__form-group-description">
                Zealously now pronounce existence add you instantly say offending.
              </span>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Dropdown</span>
              <div className="form__form-group-field">
                <Controller
                  name="select"
                  as={SelectField}
                  control={control}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Multiselect</span>
              <div className="form__form-group-field">
                <Controller
                  name="multiSelect"
                  control={control}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                  as={MultiSelectField}
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <input
                  name="textarea"
                  type="text"
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">
                Add file
              </span>
              <div className="form__form-group-field">
                <Controller
                  name="file"
                  control={control}
                  as={FileInputField}
                />

              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

Form.propTypes = {
  isHorizontal: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
};

export default Form;
