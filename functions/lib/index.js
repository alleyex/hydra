"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const req = require("request");
exports.traffic = functions.https.onRequest((request, response) => {
    req({
        url: 'http://rtr.pbs.gov.tw/pbsmgt/RoadAllServlet?ajaxAction=roadAllCache',
        json: true
    }, (error, tesponse, body) => {
        response.send(JSON.stringify(body, undefined, 2));
    });
});
//# sourceMappingURL=index.js.map