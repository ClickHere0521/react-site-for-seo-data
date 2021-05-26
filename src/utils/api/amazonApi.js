import axios from 'axios';

export default async (dataApiProps, handleResult) => {
    const {
      se, setype, location, language, device, os, sep, keyword, 
    } = dataApiProps;
    console.log(`amazonParams ${dataApiProps}`);
    try {
        await axios({
            method: 'post',
            url: `https://sandbox.dataforseo.com/v3/merchant/${se}/products/task_post`,
            auth: {
                username: 'effortsclickhere0901@gmail.com',
                password: '9815613a0ce27ac5',
            },
            data: [{
              keyword,
              location_code: location,  
              language_code: language,
              device,
              os,
              search_param: sep,
              setype,
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
                    url: `https://sandbox.dataforseo.com/v3/merchant/${se}/products/task_get/advanced/${result.id}`,
                    auth: {
                        username: 'effortsclickhere0901@gmail.com',
                        password: '9815613a0ce27ac5',
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

