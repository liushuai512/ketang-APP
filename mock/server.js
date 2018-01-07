let express = require('express');
// let cors = require('cors');
let app = express();

let ad = require('./home/ad');

// app.use(cors());

//广告接口
app.get('/api/ad',(req,res) =>{
    res.send(ad);
})

//fetch(url,{})
app.listen(3000);
