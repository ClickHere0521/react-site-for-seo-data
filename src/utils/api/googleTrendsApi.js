import axios from 'axios';

export default async (dataApiProps, handleResult) => {
    const {
      type, location, language, interval, keyword, 
    } = dataApiProps;
    // console.log(se, setype, location, language, device, os, sep, keyword);
    try {
        await axios({
            method: 'post',
            url: 'https://api.dataforseo.com/v3/keywords_data/google_trends/explore/task_post',
            auth: {
                username: 'hello@webpify',
                password: 'be557376303cc5e3',
            },
            data: [{
              location_code: location,  
              language_code: language,
              type,
              date_from: interval.from,
              date_to: interval.to,
              keywords: keyword,
            }],
            headers: {
                'content-type': 'application/json',
            },
        }).then(async (response) => {
            const result = response.data.tasks[0];
            // ------------ get the result ----------- //
            try {
                await axios({
                    method: 'get',
                    url: `https://www.dataforseo.com/v3/keywords_data/google_trends/explore/task_get/${result.id}`,
                    auth: {
                        username: 'hello@webpify',
                        password: 'be557376303cc5e3',
                    },
                    headers: {
                        'content-type': 'application/json',
                    },
                }).then((responseData) => {
                    const resultData = responseData.data.tasks;
                    console.log('This is the result', resultData[0].result[0]);
                    handleResult(resultData[0].result[0]);
                }).catch((error) => {
                    console.log(error);
                });
            } catch (e) {
                console.log(e);
            }

            // handleResult(result[0]);
            // return result[0].items[0];
        }).catch((error) => {
            console.log(error);
        });
    } catch (e) {
        console.log(`-----------${e}`);
    }
};

