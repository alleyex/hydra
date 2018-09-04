import * as functions from 'firebase-functions';
import req = require('request');


export const traffic = functions.https.onRequest((request, response) => {
    req({
        url: 'http://rtr.pbs.gov.tw/pbsmgt/RoadAllServlet?ajaxAction=roadAllCache',
        json: true
    }, (error, tesponse, body) => {
        response.send(JSON.stringify(body,undefined,2));
    });     
});

export const 
