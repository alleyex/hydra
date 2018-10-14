import * as functions from 'firebase-functions' ;
import * as admin from 'firebase-admin'
import req = require('request');
const cors = require('cors')({origin: true});

export const guest = functions.https.onRequest((request,response)=>{
    return cors(request,response,()=>{
        admin.database().ref('guest').push({
            id:request.body.id,
            ip:request.body.ip,
            region:request.body.region,
            language:request.body.langauge,
            source:request
        })
    })
});

export const traffic = functions.https.onRequest((request, response) => {   
    return cors(request, response, () => {
        req({
            url: 'http://rtr.pbs.gov.tw/pbsmgt/RoadAllServlet?ajaxAction=roadAllCache',
            json: true
        }, (err, res, body) => {
            const data = body.formData.filter(x=>x.area_sn == '20080'|| x.area_sn == '20071')
            response.status(200).send(data);
        });    
    })    
});

export const weather = functions.https.onRequest((request,response)=>{
    return cors(request, response,()=>{
        req({
            url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-394C0928-C7D7-4F09-B453-4B60B146947D&stationId=D2F230',
            json: true
        }, (error, res, body) => {
            response.status(200).send(body);
        });   
    });    
});