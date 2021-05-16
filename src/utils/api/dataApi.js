import axios from 'axios';

export default async (dataApiProps) => {
    const {
      se, setype, location, language, device, sep, keyword, 
    } = dataApiProps;
    console.log(se, setype);
    try {
        await axios({
            method: 'post',
            url: `https://sandbox.dataforseo.com/v3/serp/${se}/${setype}/live/advanced`,
            auth: {
                username: 'effortsclickhere0901@gmail.com',
                password: '9815613a0ce27ac5',
            },
            data: [{
              keyword: 'weather forecast',
              location_code: location,  
              language_code: language,
              device,
              os: sep,
            }],
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            const { result } = response.data.tasks[0];
            // Result data
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    } catch (e) {
        console.log(`-----------${e}`);
    }
};

