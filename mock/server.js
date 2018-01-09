let express = require('express');
// let cors = require('cors');
let app = express();

let ad = require('./home/ad');

// app.use(cors());

//广告接口
app.get('/api/ad',(req,res) =>{
    res.send(ad);
})


let list = require('./home/list');
//获取列表  需要传递城市
app.get('/api/list/:city/:page',(req,res) => {
    console.log(req.params.city);
    console.log(req.params.page);
    res.send(list)
})

//fetch(url,{})
app.listen(3000);
