const express = require('express')
const app = express()
const path = require('path')

const port = 3000

app.listen(port, function() {
    console.log('listening on 3000')
})

app.use(express.json());
var cors = require('cors');
app.use(cors());

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