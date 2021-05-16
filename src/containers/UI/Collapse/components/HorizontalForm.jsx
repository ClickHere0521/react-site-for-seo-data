import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
  UncontrolledTooltip,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';
import renderSelectField from '@/shared/components/form/Select';


const HorizontalForm = ({ handleSubmit, reset }) => {
  const { t } = useTranslation('common');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Intoduction</h5>
            <h5 className="subhead">Search Volume is a Google Ads metric that shows how many people are searching for a specific query. 
              However, throughout the years, it grew far beyond a simple PPC indicator, becoming a cornerstone of any marketing strategy. 
              Using DataForSEO Google Search Volume API you can provide your users with important insights into the popularity of their keywords.
            </h5>
          </div>

          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">SE:</span>
              <div className="form__form-group-field">
                <Field
                  name="se"
                  component={renderSelectField}
                  options={[
                    { value: 'Google', label: 'Google' },
                    { value: 'Bing', label: 'Bing' },
                    { value: 'Yahoo', label: 'Yahoo' },
                    { value: 'Yandex', label: 'Yandex' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">SE Types:</span>
              <div className="form__form-group-field">
                <Field
                  name="setype"
                  component={renderSelectField}
                  options={[
                    { value: 'OrganicSearch', label: 'Organic Search' },
                    { value: 'Maps', label: 'Maps' },
                    { value: 'News', label: 'News' },
                    { value: 'Images', label: 'Images' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Location:</span>
              <div className="form__form-group-field">
                <Field
                  name="location"
                  component={renderSelectField}
                  options={[
                    { value: '', label: 'Google' },
                    { value: 'Bing', label: 'Bing' },
                    { value: 'Yahoo', label: 'Yahoo' },
                    { value: 'Yandex', label: 'Yandex' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Language:</span>
              <div className="form__form-group-field">
                <Field
                  name="language"
                  component={renderSelectField}
                  options={[
                    { value: 'Afrikaans', label: 'Afrikaans' },
                    { value: 'Akan', label: 'Akan' },
                    { value: 'Albanian', label: 'Albanian' },
                    { value: 'Amharic', label: 'Amharic' },
                    { value: 'Arabic', label: 'Arabic' },
                    { value: 'Armenian', label: 'Armenian' },
                    { value: 'Azeri', label: 'Azeri' },
                    { value: 'Balinese', label: 'Balinese' },
                    { value: 'Basque', label: 'Basque' },
                    { value: 'Belarusian', label: 'Belarusian' },
                    { value: 'Bengali', label: 'Bengali' },
                    { value: 'Bosnian', label: 'Bosnian' },
                    { value: 'Bulgarian', label: 'Bulgarian' },
                    { value: 'Burmese', label: 'Burmese' },
                    { value: 'Catalan', label: 'Catalan' },
                    { value: 'Cebuano', label: 'Cebuano' },
                    { value: 'Chichewa', label: 'Chichewa' },
                    { value: 'ChineseS', label: 'Chinese (Simplified)' },
                    { value: 'ChineseT', label: 'Chinese (Traditional)' },
                    { value: 'Croatian', label: 'Croatian' },
                    { value: 'Czech', label: 'Czech' },
                    { value: 'Danish', label: 'Danish' },
                    { value: 'Dutch', label: 'Dutch' },
                    { value: 'English', label: 'English' },
                    { value: 'Espanol', label: 'Espanol (Latinoamerica)' },
                    { value: 'Estonian', label: 'Estonian' },
                    { value: 'Faroese', label: 'Faroese' },
                    { value: 'Farsi', label: 'Farsi' },
                    { value: 'Filipino', label: 'Filipino' },
                    { value: 'Finnish', label: 'Finnish' },
                    { value: 'French', label: 'French' },
                    { value: 'Frisian', label: 'Frisian' },
                    { value: 'Ga', label: 'Ga' },
                    { value: 'Galician', label: 'Galician' },
                    { value: 'Ganda', label: 'Ganda' },
                    { value: 'Georgian', label: 'Georgian' },
                    { value: 'German', label: 'German' },
                    { value: 'Greek', label: 'Greek' },
                    { value: 'Gujarati', label: 'Gujarati' },
                    { value: 'Haitian', label: 'Haitian' },
                    { value: 'Hausa', label: 'Hausa' },
                    { value: 'Hebrew', label: 'Hebrew' },
                    { value: 'HebrewO', label: 'Hebrew (old)' },
                    { value: 'Hindi', label: 'Hindi' },
                    { value: 'Hungarian', label: 'Hungarian' },
                    { value: 'Icelandic', label: 'Icelandic' },
                    { value: 'IciBemba', label: 'IciBemba' },
                    { value: 'Igbo', label: 'Igbo' },
                    { value: 'Indonesian', label: 'Indonesian' },
                    { value: 'Irish', label: 'Irish' },
                    { value: 'Italian', label: 'Italian' },
                    { value: 'Japanese', label: 'Japanese' },
                    { value: 'Kannada', label: 'Kannada' },
                    { value: 'Kazakh', label: 'Kazakh' },
                    { value: 'Khmer', label: 'Khmer' },
                    { value: 'Kinyarwanda', label: 'Kinyarwanda' },
                    { value: 'Kirundi', label: 'Kirundi' },
                    { value: 'Kongo', label: 'Kongo' },
                    { value: 'Korean', label: 'Korean' },
                    { value: 'Kreol morisien', label: 'Kreol morisien' },
                    { value: 'Kreol Selewa', label: 'Kreol Selewa' },
                    { value: 'Krio', label: 'Krio' },
                    { value: 'Kyrgyz', label: 'Kyrgyz' },
                    { value: 'Lao', label: 'Lao' },
                    { value: 'Latvian', label: 'Latvian' },
                    { value: 'Lingala', label: 'Lingala' },
                    { value: 'Lithuanian', label: 'Lithuanian' },
                    { value: 'Luo', label: 'Luo' },
                    { value: 'Macedonian', label: 'Macedonian' },
                    { value: 'Malagasy', label: 'Malagasy' },
                    { value: 'Malay', label: 'Malay' },
                    { value: 'Malayam', label: 'Malayam' },
                    { value: 'Maltese', label: 'Maltese' },
                    { value: 'Maori', label: 'Maori' },
                    { value: 'Marathi', label: 'Marathi' },
                    { value: 'Mongolian', label: 'Mongolian' },
                    { value: 'Montenegro', label: 'Montenegro' },
                    { value: 'Nepali', label: 'Nepali' },
                    { value: 'Northern Sotho', label: 'Northern Sotho' },
                    { value: 'Norwegian', label: 'Norwegian' },
                    { value: 'Nyankole', label: 'Nyankole' },
                    { value: 'Oromo', label: 'Oromo' },
                    { value: 'Pashto', label: 'Pashto' },
                    { value: 'Pidgin', label: 'Pidgin' },
                    { value: 'Polish', label: 'Polish' },
                    { value: 'Portuguese', label: 'Portuguese' },
                    { value: 'PortugueseB', label: 'Portuguese (Brazil)' },
                    { value: 'PortugueseP', label: 'Portuguese (Portugal)' },
                    { value: 'Punjabi', label: 'Punjabi' },
                    { value: 'Quechua', label: 'Quechua' },
                    { value: 'Romanian', label: 'Romanian' },
                    { value: 'Romansh', label: 'Romansh' },
                    { value: 'Russian', label: 'Russian' },
                    { value: 'Serbian', label: 'Serbian' },
                    { value: 'SerbianL', label: 'Serbian (Latin)' },
                    { value: 'Sesotho', label: 'Sesotho' },
                    { value: 'Shona', label: 'Shona' },
                    { value: 'Silozi', label: 'Silozi' },
                    { value: 'Sindhi', label: 'Sindhi' },
                    { value: 'Sinhalese', label: 'Sinhalese' },
                    { value: 'Slovak', label: 'Slovak' },
                    { value: 'Slovenian', label: 'Slovenian' },
                    { value: 'Somali', label: 'Somali' },
                    { value: 'Spanish', label: 'Spanish' },
                    { value: 'Swahili', label: 'Swahili' },
                    { value: 'Swedish', label: 'Swedish' },
                    { value: 'Tajik', label: 'Tajik' },
                    { value: 'Tamil', label: 'Tamil' },
                    { value: 'Thai', label: 'Thai' },
                    { value: 'Tigrinya', label: 'Tigrinya' },
                    { value: 'Tonga', label: 'Tonga (Tonga Islands)' },
                    { value: 'Tshiluba', label: 'Tshiluba' },
                    { value: 'Tswana', label: 'Tswana' },
                    { value: 'Tumbuka', label: 'Tumbuka' },
                    { value: 'Turkish', label: 'Turkish' },
                    { value: 'Turkmen', label: 'Turkmen' },
                    { value: 'Ukrainian', label: 'Ukrainian' },
                    { value: 'Urudu', label: 'Urudu' },
                    { value: 'Uzbek', label: 'Uzbek' },
                    { value: 'Vietnamese', label: 'Vietnamese' },
                    { value: 'Wolof', label: 'Wolof' },
                    { value: 'Xhosa', label: 'Xhosa' },
                    { value: 'Yoruba', label: 'Yoruba' },
                    { value: 'Zulu', label: 'Zulu' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Device:</span>
              <div className="form__form-group-field">
                <Field
                  name="device"
                  component={renderSelectField}
                  value="Desktop"
                  options={[
                    { value: 'Desktop', label: 'Desktop' },
                    { value: 'Mobile', label: 'Mobile' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Search engine parameters:</span>
              <div className="form__form-group-field">
                <Field
                  name="sep"
                  component="input"
                  type="text"
                  placeholder="example: &tbs=qdrh"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Keyword:<AlertCircleIcon size="18" id="keywordTooltip" /></span>
              <div className="form__form-group-field">
                <Field
                  name="keyword"
                  component="input"
                  type="text"
                  // value="weather forecast"
                  placeholder="weather forecast"
                />
                <UncontrolledTooltip placement="bottom" target="keywordTooltip">
                  You can enter up to 700 symbols in the keyword field. If you use a search operator, the charge per task will be muliplied by 5
                </UncontrolledTooltip>
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

HorizontalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(HorizontalForm);
