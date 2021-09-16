const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');
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
d2.setDate(d2. getDate() - 5);

let y = d2.toISOString();
var j = y.indexOf('T')
let yesterday = y.slice(0,j);
console.log(yesterday)


router.get('/news',(req,res)=>{
    newsapi.v2.everything({
        q: 'trump',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk,techcrunch.com',
        from: yesterday,
        to: today,
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {
        console.log(response);
        res.status(200).json({
            message: "Data Fetched",
            news:response
        })
    });
});



//Contact Form
router.post("/feedback", (req, res) => {
  console.log(req.body.email)
  const feedback = {
    email: req.body.email,
    whoAreYou: req.body.whoAreYou,
    concern : req.body.concern
  }
  
  // res.status(200).json({
  //   message: "Data Saved Successfully",
  //   feeds : result
  // })
  
  //Email Service

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'techsoft257@gmail.com',
      pass: 'TechSoft@123'
    }
  });
  
  var mailOptions = {
    from: 'techsoft257@gmail.com',
    to: 'amitrajraj241@gmail.com,172achyutananda@gmail.com',
    subject: 'Feedback',
    html: `<h4> Email ${feedback.email}</h4><h4> About Sender </h4><p>${feedback.whoAreYou}</p><br><h4>Concern</h4><br><p>${feedback.concern}</p>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
});


module.exports = router;