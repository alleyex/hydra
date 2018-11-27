import * as functions from 'firebase-functions';
const cors = require('cors')({ origin: true });
import req = require('request');

export class CentralWeatherBureau{
    public static status = functions.https.onRequest((request, response) => {
        return cors(request, response, () => {
            req({
                url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-394C0928-C7D7-4F09-B453-4B60B146947D&stationId=D2F230',
                json: true
            }, (error, res, body) => {
                response.status(200).send(body);
            });
        });
    });
}