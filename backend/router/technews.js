const express = require('express');

const router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('95ac8a2ee01541158ca6804d35a82978');

const d1 = new Date();

let x = d1.toISOString();
console.log(x)

var i = x.indexOf('T')
console.log(i)
let today = x.slice(0,i);
console.log(today)


const d2 = new Date(); 
d2.setDate(d2. getDate() - 3);

let y = d2.toISOString();
var j = y.indexOf('T')
let yesterday = y.slice(0,j);
console.log(yesterday)


router.get('/technews', (req, res) => {




    newsapi.v2.topHeadlines({
        // q: 'trump',
        category: 'technology',
        from: yesterday,
        to: today,
        language: 'en',
        country: 'us',
        sortBy: 'relevancy'
    }, (err, response) => {
        if (err) console.error(err);
        else {
            console.log(response);
            res.status(200).json({
                message: "Data Fetched",
                technews: response
            })
        }
    });
})
module.exports = router 