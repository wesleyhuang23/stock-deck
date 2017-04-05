import axios from 'axios';

export function homePageStocks(){
    console.log('from action');
    let dowJones = 'DJI'
    let payload;
    axios.get(`https://www.google.com/finance/info?q=NASDAQ:AAPL`).then(res => {
        if(res.status === 200){
            let str = res.data.split("//");
            payload = JSON.parse(str[1]);
            console.log(payload);
        } else {
            console.log('stock could not be found');
        }
    });
    console.log(payload);
    return {
            type: 'homePageStocks',
            payload: payload
        }
}