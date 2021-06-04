import axios from 'axios';

export default async (dataApiProps, handleResult) => {
    const {
      se, setype, location, language, device, os, sep, keyword, 
    } = dataApiProps;
    console.log(`apiParams ${dataApiProps}`);
    try {
        await axios({
            method: 'post',
            url: `https://api.dataforseo.com/v3/serp/${se}/${setype}/live/advanced`,
            auth: {
                username: 'hello@webpify.com',
                password: 'be557376303cc5e3',
            },
            data: [{
              keyword,
              location_code: location,  
              language_code: language,
              device,
              os,
              search_param: sep,
            }],
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            const { result } = response.data.tasks[0];
            console.log('fdsfds', response.data);
            handleResult(result[0]);
            return result[0].items[0];
        }).catch((error) => {
            console.log(error);
        });
    } catch (e) {
        console.log(`-----------${e}`);
    }
};

