const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));  

app.options('*', cors())
const port = 3000;

const svc = require('./controllers/surveyController');

app.listen(port, function() {
    console.log('listening on', port)
})

app.use(express.json());

app.use(express.static(path.join(__dirname, '../Front/build')))

// 리액트, nodejs 서버 연결하는 부분
app.get('/', function(req, res) {
    // 메인 페이지로 접속했을 때 프론트에서 리액트로 build한 index.html 보내기
    res.sendFile(path.join(__dirname, '../Front/build/index.html'));
})

// 리액트가 페이지 라우팅하게 전권 넘기기
// 사용자가 react route에 없는 페이지에 접속하면 메인 페이지 띄움
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../Front/build/index.html'))
})

app.use('/test', svc);