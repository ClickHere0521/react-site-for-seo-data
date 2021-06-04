import axios from 'axios';

export default async (dataApiProps, handleResult) => {
    const {
      se, location, language, tag, 
    } = dataApiProps;
    // console.log(se, setype, location, language, device, os, sep, keyword);
    try {
        await axios({
            method: 'post',
            url: `https://api.dataforseo.com/v3/keywords_data/${se}/keywords_for_site/task_post`,
            auth: {
                username: 'hello@webpify.com',
                password: 'be557376303cc5e3',
            },
            data: [{
              location_code: location,  
              language_code: language,
              se,
              tag,
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
                    url: `https://api.dataforseo.com/v3/keywords_data/${se}/keywords_for_site/task_get/${result.id}`,
                    auth: {
                        username: 'hello@webpify.com',
                        password: 'be557376303cc5e3',
                    },
                    headers: {
                        'content-type': 'application/json',
                    },
                }).then((responseData) => {
                    const resultData = responseData.data.tasks;
                    console.log('This is the result', resultData[0]);
                    handleResult(resultData[0]);
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

