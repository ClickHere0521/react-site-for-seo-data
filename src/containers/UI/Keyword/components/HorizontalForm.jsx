import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
  UncontrolledTooltip,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';
import renderSelectField from '@/shared/components/form/Select';
import { useSelector, useDispatch } from 'react-redux';
import { apiOptionActions, apiResultActions } from '@/redux/actions/apiActions';
import firebase from 'firebase';
import { updateRemainCreditsActions, updatefetchedDataActions, updateActivityActions } from '@/redux/actions/userInfoActions';
import keywordApi from '../../../../utils/api/keywordApi';

const HorizontalForm = ({ handleSubmit, reset }) => {
  const apiOptionDispatch = useDispatch();
  const apiResultDispatch = useDispatch();
  const creditsUpdateDispatch = useDispatch();
  const fetchedDataUpdateDispatch = useDispatch();
  const activityUpdateDispatch = useDispatch();

  const introduction = [
    {
      type: 'google',
      text: `Resulting related keywords:
      •”free keyword research”,
      •”keyword research tools”,
      •”best free keyword research tool”,
      •”keyword research tips”,
      •”seo keyword research tool”,
      •”keyword research step by step”,
      •”how to do keyword research 2019″,
      •”keyword research google ads”`,
    },
    {
      type: 'bing',
      text: `Bing has long been branded a “decision engine,” aiming to present results with more real-life context, as opposed to Google’s approach 
      of simply finding text on a page. SEMSEARCHES’s Bing Organic Search API gives you an opportunity to leverage its power and build a true decision tool for this decision engine. 
      Type in a keyword, set the necessary parameters, and you’re ready to go.`,
    },
    {
      type: 'yahoo',
      text: `Although it’s no secret that Yahoo search is powered by Bing, it’s still the third most popular search engine in the US and is ranked 19th on our Top-1000 most 
      popular websites list. SEMSEARCHES Yahoo Organic Search API will help you understand why it’s the case and capitalize on its marketing potential.`,
    },
    {
      type: 'yandex',
      text: `Yandex has strong positions in Russian-speaking regions, but it’s mostly unknown beyond them. However, if you have a considerable number of Russian 
      speakers among your customers, it can be worth implementing.`,
    },
    {
      type: 'map',
      text: `Google Maps is not only the most popular navigation app on this planet, but it’s also one of the most versatile engines for local searches. SEMSEARCHES API gives an opportunity to 
      exploit its SEO potential to the fullest, allowing you to get accurate search results for the searcher’s precise location. Only some of its features are available here`,
    },
    {
      type: 'news',
      text: `This API will help you get your hands on Google News - the biggest database of news articles on the web. Just set your preferred location and language, type in a 
      news-worthy keyword, and you’ll get a list of top 100 results from the most credible news sources.`,
    },
    {
      type: 'images',
      text: `Need to check rankings in Google Images search results? Or want to scrape URLs of images relevant to a specific query? There are numerous use cases for Google Images - and nothing that 
      SEMSEARCHES Google Images API wouldn’t solve. Here you can test only a part of its functionality, but we have much more to offer.`,
    },
  ];

  const [introductionIndex, setIntroductionIndex] = useState(0);
  const [setypeOptions, setSetypeOptions] = useState([
    { value: 'organic', label: 'Organic Search' },
    { value: 'maps', label: 'Maps' },
    { value: 'news', label: 'News' },
    { value: 'images', label: 'Images' },
  ]);
  const [ostypeOptions, setOstypeOptions] = useState([
    { value: 'windows', label: 'Windows' },
    { value: 'macos', label: 'Mac OS' },
  ]);
  const [sep, setSep] = useState('');
  const [keyword, setKeyword] = useState('');
  const { se, setype, device } = useSelector(state => state.api);
  const dataApiProps = useSelector(state => state.api);

  const handleResult = (result) => {
    apiResultDispatch(apiResultActions(result));
  };

  const handleApiSubmit = async () => {    
    // console.log('dataapiprops', dataApiProps);
    keywordApi(dataApiProps, handleResult);
    // ---------- Minus Credits ------------- //
    const today = new Date();
    let currentCredits; 
    let currentActivity;
    const replaceActivity = [];
    let isNew = false;
    let fetchedData;
    const todayDate = `${today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate()}`;
    const currentUid = await firebase.auth().currentUser.uid;
    const db = firebase.database().ref(`/users/${currentUid}`);
    firebase.firestore().collection('Activity').doc(currentUid).get()
      .then((querySnapShot) => {
          currentActivity = querySnapShot.data().Activities;
          currentActivity.forEach((val) => {
            if (val.date === todayDate) {
              replaceActivity.push({
                date: todayDate,
                fetchedData: (val.fetchedData + 1),
              }); 
              isNew = false;
            } else {
              replaceActivity.push({
                date: val.date,
                fetchedData: val.fetchedData,
              });
              isNew = true;
            }
          });
          if (isNew) {
            replaceActivity.push({
              date: todayDate,
              fetchedData: 1,
            });
          }
          firebase.firestore().collection('Activity').doc(currentUid).update({
            Activities: replaceActivity,
          });
          activityUpdateDispatch(updateActivityActions(replaceActivity));
      });
    
    await db
      .once('value')
      .then((snapshot) => {          
        currentCredits = snapshot.val().credits;
        fetchedData = snapshot.val().fetchedData;
      });
    db
      .update({
        credits: (currentCredits - 1),
        fetchedData: (fetchedData + 1),
      })
      .then(() => {
        creditsUpdateDispatch(updateRemainCreditsActions((currentCredits - 1)));
        fetchedDataUpdateDispatch(updatefetchedDataActions((fetchedData + 1)));
      });
  };

  useEffect(() => {
    switch (se) {
      case 'google': {
        setIntroductionIndex(0); 
        setSetypeOptions([
          { value: 'organic', label: 'Organic Search' },
          { value: 'maps', label: 'Maps' },
          { value: 'news', label: 'News' },
          { value: 'images', label: 'Images' },
        ]);
        break;
      } 
      case 'bing': {
        setIntroductionIndex(1); 
        setSetypeOptions([
          { value: 'organic', label: 'Organic Search' },
        ]);
        break;
      } 
      case 'yahoo': {
        setIntroductionIndex(2); 
        setSetypeOptions([
          { value: 'organic', label: 'Organic Search' },
        ]);
        break;
      } 
      case 'yandex': {
        setIntroductionIndex(3); 
        setSetypeOptions([
          { value: 'organic', label: 'Organic Search' },
        ]);
        break;
      } 

      default: break;
    }
  }, [se]);

  useEffect(() => {
    switch (setype) {
      case 'organic': {
        setIntroductionIndex(0); 
        break;
      } 
      case 'maps': {
        setIntroductionIndex(5); 
        break;
      } 
      case 'news': {
        setIntroductionIndex(6); 
        break;
      } 
      case 'images': {
        setIntroductionIndex(7); 
        break;
      } 

      default: break;
    }
  }, [setype]);

  useEffect(() => {
    switch (device) {
      case 'desktop': {
        setOstypeOptions([
          { value: 'windows', label: 'Windows' },
          { value: 'macos', label: 'Mac OS' },
        ]); 
        break;
      } 
      case 'mobile': {
        setOstypeOptions([
          { value: 'android', label: 'Android' },
          { value: 'ios', label: 'iOS' },
        ]);  
        break;
      } 

      default: break;
    }
  }, [device]);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Intoduction</h5>
            <h5 className="subhead">
              {introduction[introductionIndex].text}
            </h5>
          </div>

          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">Location:</span>
              <div className="form__form-group-field">
                <Field
                  name="location"
                  component={renderSelectField}
                  value="Sweden"
                  // placeholder="Sweden"
                  selectType="location"
                  options={[
                    { value: '2004', label: 'Afghanistan' },
                    { value: '2008', label: 'Albania' },
                    { value: '2012', label: 'Algeria' },
                    { value: '2016', label: 'American Samoa' },
                    { value: '2020', label: 'Andorra' },
                    { value: '2024', label: 'Angola' },
                    { value: '2660', label: 'Anguilla' },
                    { value: '2010', label: 'Antarctica' },
                    { value: '2028', label: 'Antigua and Barbuda' },
                    { value: '2032', label: 'Argentina' },
                    { value: '2051', label: 'Armenia' },
                    { value: '2533', label: 'Aruba' },
                    { value: '2036', label: 'Australia' },
                    { value: '2040', label: 'Austria' },
                    { value: '2031', label: 'Azerbaijan' },
                    { value: '2044', label: 'Bahamas' },
                    { value: '2048', label: 'Bahrain' },
                    { value: '2050', label: 'Bangladesh' },
                    { value: '2052', label: 'Barbados' },
                    { value: '2112', label: 'Belarus' },
                    { value: '2056', label: 'Belgium' },
                    { value: '2084', label: 'Belize' },
                    { value: '2204', label: 'Benin' },
                    { value: '2060', label: 'Bermuda' },
                    { value: '2064', label: 'Bhutan' },
                    { value: '2068', label: 'Bolivia' },
                    { value: '2070', label: 'Bosnia and Herzegovina' },
                    { value: '2072', label: 'Botswana' },
                    { value: '2076', label: 'Brazil' },
                    { value: '2086', label: 'British Indian Ocean Territory' },
                    { value: '2096', label: 'Brunei Darussalam' },
                    { value: '2100', label: 'Bulgaria' },
                    { value: '2854', label: 'Burkina Faso' },
                    { value: '2108', label: 'Burundi' },
                    { value: '2116', label: 'Cambodia' },
                    { value: '2120', label: 'Cameroon' },
                    { value: '2124', label: 'Canada' },
                    { value: '2132', label: 'Cape Verde' },
                    { value: '2136', label: 'Cayman Islands' },
                    { value: '2140', label: 'Central African Republic' },
                    { value: '2148', label: 'Chad' },
                    { value: '2152', label: 'Chile' },
                    { value: '2156', label: 'China' },
                    { value: '2162', label: 'Christmas Island' },
                    { value: '2166', label: 'Cocos (Keeling) Islands' },
                    { value: '2170', label: 'Colombia' },
                    { value: '2174', label: 'Comoros' },
                    { value: '2178', label: 'Congo' },
                    { value: '2180', label: 'Congo, The Democratic Republic of The' },
                    { value: '2184', label: 'Cook Islands' },
                    { value: '2188', label: 'Costa Rica' },
                    { value: '2384', label: 'Cote Divoire' },
                    { value: '2191', label: 'Croatia' },
                    { value: '2192', label: 'Cuba' },
                    { value: '2196', label: 'Cyprus' },
                    { value: '2203', label: 'Czech Republic' },
                    { value: '2208', label: 'Denmark' },
                    { value: '2262', label: 'Djibouti' },
                    { value: '2212', label: 'Dominica' },
                    { value: '2214', label: 'Dominican Republic' },
                    { value: '2218', label: 'Ecuador' },
                    { value: '2818', label: 'Egypt' },
                    { value: '2222', label: 'El Salvador' },
                    { value: '2226', label: 'Equatorial Guinea' },
                    { value: '2232', label: 'Eritrea' },
                    { value: '2233', label: 'Estonia' },
                    { value: '2231', label: 'Ethiopia' },
                    { value: '2238', label: 'Falkland Islands (Malvinas)' },
                    { value: '2234', label: 'Faroe Islands' },
                    { value: '2242', label: 'Fiji' },
                    { value: '2246', label: 'Finland' },
                    { value: '2250', label: 'France' },
                    { value: '2254', label: 'French Guiana' },
                    { value: '2258', label: 'French Polynesia' },
                    { value: '2266', label: 'Gabon' },
                    { value: '2270', label: 'Gambia' },
                    { value: '2268', label: 'Georgia' },
                    { value: '2276', label: 'Germany' },
                    { value: '2288', label: 'Ghana' },
                    { value: '2292', label: 'Gibraltar' },
                    { value: '2300', label: 'Greece' },
                    { value: '2304', label: 'Greenland' },
                    { value: '2308', label: 'Grenada' },
                    { value: '2312', label: 'Guadeloupe' },
                    { value: '2316', label: 'Guam' },
                    { value: '2320', label: 'Guatemala' },
                    { value: '2324', label: 'Guinea' },
                    { value: '2624', label: 'Guinea-bissau' },
                    { value: '2328', label: 'Guyana' },
                    { value: '2332', label: 'Haiti' },
                    { value: '2336', label: 'Holy See (Vatican City State)' },
                    { value: '2340', label: 'Honduras' },
                    { value: '2344', label: 'Hong Kong' },
                    { value: '2348', label: 'Hungary' },
                    { value: '2352', label: 'Iceland' },
                    { value: '2356', label: 'India' },
                    { value: '2360', label: 'Indonesia' },
                    { value: '2364', label: 'Iran, Islamic Republic of' },
                    { value: '2368', label: 'Iraq' },
                    { value: '2372', label: 'Ireland' },
                    { value: '2376', label: 'Israel' },
                    { value: '2380', label: 'Italy' },
                    { value: '2388', label: 'Jamaica' },
                    { value: '2392', label: 'Japan' },
                    { value: '2400', label: 'Jordan' },
                    { value: '2398', label: 'Kazakhstan' },
                    { value: '2424', label: 'Kenya' },
                    { value: '2296', label: 'Kiribati' },
                    { value: '2408', label: 'Korea, Democratic People s Republic of' },
                    { value: '2410', label: 'Korea, Republic of' },
                    { value: '2414', label: 'Kuwait' },
                    { value: '2417', label: 'Kyrgyzstan' },
                    { value: '2418', label: 'Lao Peoples Democratic Republic' },
                    { value: '2428', label: 'Latvia' },
                    { value: '2422', label: 'Lebanon' },
                    { value: '2426', label: 'Lesotho' },
                    { value: '2430', label: 'Liberia' },
                    { value: '2434', label: 'Libyan Arab Jamahiriya' },
                    { value: '2438', label: 'Liechtenstein' },
                    { value: '2440', label: 'Lithuania' },
                    { value: '2442', label: 'Luxembourg' },
                    { value: '2446', label: 'Macao' },
                    { value: '2807', label: 'Macedonia, The Former Yugoslav Republic of' },
                    { value: '2450', label: 'Madagascar' },
                    { value: '2454', label: 'Malawi' },
                    { value: '2458', label: 'Malaysia' },
                    { value: '2462', label: 'Maldives' },
                    { value: '2466', label: 'Mali' },
                    { value: '2470', label: 'Malta' },
                    { value: '2584', label: 'Marshall Islands' },
                    { value: '2474', label: 'Martinique' },
                    { value: '2478', label: 'Mauritania' },
                    { value: '2480', label: 'Mauritius' },
                    { value: '2484', label: 'Mexico' },
                    { value: '2583', label: 'Micronesia, Federated States of' },
                    { value: '2498', label: 'Moldova, Republic of' },
                    { value: '2492', label: 'Monaco' },
                    { value: '2496', label: 'Mongolia' },
                    { value: '2500', label: 'Montserrat' },
                    { value: '2504', label: 'Morocco' },
                    { value: '2508', label: 'Mozambique' },
                    { value: '2104', label: 'Myanmar' },
                    { value: '2516', label: 'Namibia' },
                    { value: '2520', label: 'Nauru' },
                    { value: '2524', label: 'Nepal' },
                    { value: '2528', label: 'Netherlands' },
                    { value: '2530', label: 'Netherlands Antilles' },
                    { value: '2540', label: 'New Caledonia' },
                    { value: '2554', label: 'New Zealand' },
                    { value: '2558', label: 'Nicaragua' },
                    { value: '2562', label: 'Niger' },
                    { value: '2566', label: 'Nigeria' },
                    { value: '2570', label: 'Niue' },
                    { value: '2574', label: 'Norfolk Island' },
                    { value: '2580', label: 'Northern Mariana Islands' },
                    { value: '2578', label: 'Norway' },
                    { value: '2512', label: 'Oman' },
                    { value: '2586', label: 'Pakistan' },
                    { value: '2585', label: 'Palau' },
                    { value: '2591', label: 'Panama' },
                    { value: '2598', label: 'Papua New Guinea' },
                    { value: '2600', label: 'Paraguay' },
                    { value: '2604', label: 'Peru' },
                    { value: '2608', label: 'Philippines' },
                    { value: '2612', label: 'Pitcairn' },
                    { value: '2616', label: 'Poland' },
                    { value: '2620', label: 'Portugal' },
                    { value: '2630', label: 'Puerto Rico' },
                    { value: '2634', label: 'Qatar' },
                    { value: '2638', label: 'Reunion' },
                    { value: '2642', label: 'Romania' },
                    { value: '2643', label: 'Russian Federation' },
                    { value: '2646', label: 'Rwanda' },
                    { value: '2654', label: 'Saint Helena' },
                    { value: '2658', label: 'Saint Kitts and Nevis' },
                    { value: '2666', label: 'Saint Pierre and Miquelon' },
                    { value: '2882', label: 'Samoa' },
                    { value: '2674', label: 'San Marino' },
                    { value: '2678', label: 'Sao Tome and Principe' },
                    { value: '2682', label: 'Saudi Arabia' },
                    { value: '2686', label: 'Senegal' },
                    { value: 's688', label: 'Serbia' },
                    { value: '2690', label: 'Seychelles' },
                    { value: '2694', label: 'Sierra Leone' },
                    { value: '2702', label: 'Singapore' },
                    { value: '2703', label: 'Slovakia' },
                    { value: '2705', label: 'Slovenia' },
                    { value: '2090', label: 'Solomon Islands' },
                    { value: '2706', label: 'Somalia' },
                    { value: '2710', label: 'South Africa' },
                    { value: '2724', label: 'Spain' },
                    { value: '2144', label: 'Sri Lanka' },
                    { value: '2736', label: 'Sudan' },
                    { value: '2740', label: 'Suriname' },
                    { value: '2744', label: 'Svalbard and Jan Mayen' },
                    { value: '2748', label: 'Swaziland' },
                    { value: '2752', label: 'Sweden' },
                    { value: '2756', label: 'Switzerland' },
                    { value: '2760', label: 'Syrian Arab Republic' },
                    { value: '2158', label: 'Taiwan, Province of China' },
                    { value: '2762', label: 'Tajikistan' },
                    { value: '2834', label: 'Tanzania, United Republic of' },
                    { value: '2764', label: 'Thailand' },
                    { value: '2768', label: 'Togo' },
                    { value: '2772', label: 'Tokelau' },
                    { value: '2776', label: 'Tonga' },
                    { value: '2780', label: 'Trinidad and Tobago' },
                    { value: '2788', label: 'Tunisia' },
                    { value: '2792', label: 'Turkey' },
                    { value: '2795', label: 'Turkmenistan' },
                    { value: '2796', label: 'Turks and Caicos Islands' },
                    { value: '2798', label: 'Tuvalu' },
                    { value: '2800', label: 'Uganda' },
                    { value: '2804', label: 'Ukraine' },
                    { value: '2784', label: 'United Arab Emirates' },
                    { value: '2826', label: 'United Kingdom' },
                    { value: '2840', label: 'United States' },
                    { value: '2849', label: 'Uruguay' },
                    { value: '2860', label: 'Uzbekistan' },
                    { value: '2548', label: 'Vanuatu' },
                    { value: '2862', label: 'Venezuela' },
                    { value: '2704', label: 'Viet Nam' },
                    { value: '2850', label: 'Virgin Islands, U.S.' },
                    { value: '2876', label: 'Wallis and Futuna' },
                    { value: '2732', label: 'Western Sahara' },
                    { value: '2720', label: 'Yemen' },
                    { value: '2894', label: 'Zambia' },
                    { value: '2716', label: 'Zimbabwe' },
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
                  value="English"
                  // placeholder="English"
                  selectType="language"
                  options={[
                    { value: 'af', label: 'Afrikaans' },
                    { value: 'ak', label: 'Akan' },
                    { value: 'sq', label: 'Albanian' },
                    { value: 'am', label: 'Amharic' },
                    { value: 'ar', label: 'Arabic' },
                    { value: 'hy', label: 'Armenian' },
                    { value: 'az', label: 'Azeri' },
                    { value: 'ban', label: 'Balinese' },
                    { value: 'eu', label: 'Basque' },
                    { value: 'be', label: 'Belarusian' },
                    { value: 'bn', label: 'Bengali' },
                    { value: 'bs', label: 'Bosnian' },
                    { value: 'bg', label: 'Bulgarian' },
                    { value: 'my', label: 'Burmese' },
                    { value: 'ca', label: 'Catalan' },
                    { value: 'ceb', label: 'Cebuano' },
                    { value: 'ny', label: 'Chichewa' },
                    { value: 'zh-CN', label: 'Chinese (Simplified)' },
                    { value: 'zh-TW', label: 'Chinese (Traditional)' },
                    { value: 'hr', label: 'Croatian' },
                    { value: 'cs', label: 'Czech' },
                    { value: 'da', label: 'Danish' },
                    { value: 'nl', label: 'Dutch' },
                    { value: 'en', label: 'English' },
                    { value: 'es-419', label: 'Espanol (Latinoamerica)' },
                    { value: 'et', label: 'Estonian' },
                    { value: 'fo', label: 'Faroese' },
                    { value: 'fa', label: 'Farsi' },
                    { value: 'fil', label: 'Filipino' },
                    { value: 'fi', label: 'Finnish' },
                    { value: 'fr', label: 'French' },
                    { value: 'fy', label: 'Frisian' },
                    { value: 'gaa', label: 'Ga' },
                    { value: 'gl', label: 'Galician' },
                    { value: 'lg', label: 'Ganda' },
                    { value: 'ka', label: 'Georgian' },
                    { value: 'de', label: 'German' },
                    { value: 'el', label: 'Greek' },
                    { value: 'gu', label: 'Gujarati' },
                    { value: 'ht', label: 'Haitian' },
                    { value: 'ha', label: 'Hausa' },
                    { value: 'he', label: 'Hebrew' },
                    { value: 'iw', label: 'Hebrew (old)' },
                    { value: 'hi', label: 'Hindi' },
                    { value: 'hu', label: 'Hungarian' },
                    { value: 'is', label: 'Icelandic' },
                    { value: 'bem', label: 'IciBemba' },
                    { value: 'ig', label: 'Igbo' },
                    { value: 'id', label: 'Indonesian' },
                    { value: 'ga', label: 'Irish' },
                    { value: 'it', label: 'Italian' },
                    { value: 'ja', label: 'Japanese' },
                    { value: 'kn', label: 'Kannada' },
                    { value: 'kk', label: 'Kazakh' },
                    { value: 'km', label: 'Khmer' },
                    { value: 'rw', label: 'Kinyarwanda' },
                    { value: 'rn', label: 'Kirundi' },
                    { value: 'kg', label: 'Kongo' },
                    { value: 'ko', label: 'Korean' },
                    { value: 'mfe', label: 'Kreol morisien' },
                    { value: 'crs', label: 'Kreol Selewa' },
                    { value: 'kri', label: 'Krio' },
                    { value: 'ky', label: 'Kyrgyz' },
                    { value: 'lo', label: 'Lao' },
                    { value: 'lv', label: 'Latvian' },
                    { value: 'ln', label: 'Lingala' },
                    { value: 'lt', label: 'Lithuanian' },
                    { value: 'ach', label: 'Luo' },
                    { value: 'mk', label: 'Macedonian' },
                    { value: 'mg', label: 'Malagasy' },
                    { value: 'ms', label: 'Malay' },
                    { value: 'ml', label: 'Malayam' },
                    { value: 'mt', label: 'Maltese' },
                    { value: 'mi', label: 'Maori' },
                    { value: 'mr', label: 'Marathi' },
                    { value: 'mn', label: 'Mongolian' },
                    { value: 'sr-ME', label: 'Montenegro' },
                    { value: 'ne', label: 'Nepali' },
                    { value: 'nso', label: 'Northern Sotho' },
                    { value: 'nb', label: 'Norwegian' },
                    { value: 'nyn', label: 'Nyankole' },
                    { value: 'om', label: 'Oromo' },
                    { value: 'ps', label: 'Pashto' },
                    { value: 'pcm', label: 'Pidgin' },
                    { value: 'pl', label: 'Polish' },
                    { value: 'pt', label: 'Portuguese' },
                    { value: 'pt-BR', label: 'Portuguese (Brazil)' },
                    { value: 'pt-PT', label: 'Portuguese (Portugal)' },
                    { value: 'pa', label: 'Punjabi' },
                    { value: 'qu', label: 'Quechua' },
                    { value: 'ro', label: 'Romanian' },
                    { value: 'rm', label: 'Romansh' },
                    { value: 'ru', label: 'Russian' },
                    { value: 'sr', label: 'Serbian' },
                    { value: 'sr-Latn', label: 'Serbian (Latin)' },
                    { value: 'st', label: 'Sesotho' },
                    { value: 'sn', label: 'Shona' },
                    { value: 'loz', label: 'Silozi' },
                    { value: 'sd', label: 'Sindhi' },
                    { value: 'si', label: 'Sinhalese' },
                    { value: 'sk', label: 'Slovak' },
                    { value: 'sl', label: 'Slovenian' },
                    { value: 'so', label: 'Somali' },
                    { value: 'es', label: 'Spanish' },
                    { value: 'sw', label: 'Swahili' },
                    { value: 'sv', label: 'Swedish' },
                    { value: 'tg', label: 'Tajik' },
                    { value: 'ta', label: 'Tamil' },
                    { value: 'th', label: 'Thai' },
                    { value: 'ti', label: 'Tigrinya' },
                    { value: 'to', label: 'Tonga (Tonga Islands)' },
                    { value: 'lua', label: 'Tshiluba' },
                    { value: 'tn', label: 'Tswana' },
                    { value: 'tum', label: 'Tumbuka' },
                    { value: 'tr', label: 'Turkish' },
                    { value: 'tk', label: 'Turkmen' },
                    { value: 'uk', label: 'Ukrainian' },
                    { value: 'ur', label: 'Urudu' },
                    { value: 'uz', label: 'Uzbek' },
                    { value: 'vi', label: 'Vietnamese' },
                    { value: 'wo', label: 'Wolof' },
                    { value: 'xh', label: 'Xhosa' },
                    { value: 'yo', label: 'Yoruba' },
                    { value: 'zu', label: 'Zulu' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Include serp info:</span>
              <div className="form__form-group-field">
                <Field
                  name="includeSerp"
                  component={renderSelectField}
                  value="includeSerp"
                  // placeholder="Desktop"
                  selectType="includeSerp"
                  options={[
                    { value: true, label: 'Yes' },
                    { value: false, label: 'No' },
                  ]}
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
                  selectType="keyword"
                  // placeholder="weather forecast"
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    apiOptionDispatch(apiOptionActions('keyword', e.target.value));
                  }}
                  value={keyword}
                />
                <UncontrolledTooltip placement="bottom" target="keywordTooltip">
                  You can enter up to 700 symbols in the keyword field. If you use a search operator, the charge per task will be muliplied by 5
                </UncontrolledTooltip>
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" onClick={handleApiSubmit}>Submit</Button>
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
