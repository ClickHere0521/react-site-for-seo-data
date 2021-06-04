import axios from 'axios';

export default async (dataApiProps, handleResult) => {
    const {
        includeSerp, location, language, keyword, 
    } = dataApiProps;
    console.log(`apiParams ${dataApiProps}`);
    try {
        await axios({
            method: 'post',
            url: 'https://sandbox.dataforseo.com/v3/dataforseo_labs/related_keywords/live',
            auth: {
                username: 'hello@webpify.com',
                password: 'be557376303cc5e3',
            },             
            data: [{
              keyword,
              location_code: location,  
              language_code: language,
              include_serp_info: includeSerp,
            }],
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            const { result } = response.data.tasks[0];
            console.log('fdsfds', result);
            handleResult(result[0]);
            return result[0].items[0];
        }).catch((error) => {
            console.log(error);
        });
    } catch (e) {
        console.log(`-----------${e}`);
    }
};

