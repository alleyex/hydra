import * as functions from 'firebase-functions';
const cors = require('cors')({ origin: true });
import req = require('request');

export const publicRadioSystem = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        req({
            url: 'http://rtr.pbs.gov.tw/pbsmgt/RoadAllServlet?ajaxAction=roadAllCache',
            json: true
        }, (_err, _res, body) => {
            const data = body.formData.filter(x => x.area_sn === '20080' || x.area_sn === '20071')
            response.status(200).send(data);
        });
    })
});