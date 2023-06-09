const express = require('express');
const path = require('path');
const app = express();

app.listen(5000, function(){
  console.log("서버 정상 열림 5000")
})
app.use(express.static(path.join(__dirname, 'waterworks/dist')));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'waterworsk/dist/index.html'))
})

// app.get('/', function(요청, 응답){
//   응답.send('메인화면');
// })
// app.get('/', function(요청, 응답){
//   응답.sendFile(__dirname + '/index.html');
//   // sendFile - 파일을 보낼 수 있는 함수
//   // __dirname - 현재 파일의 경로
// })
// // app.get('/about', function(요청, 응답){
// //   응답.send("어바웃 화면");
// // })
// app.get('/about', function(요청, 응답){
//   응답.sendFile(__dirname + '/about.html');
// })
// // app.get('/about/list', function(요청, 응답){
// //   응답.send("어바웃 리스트");
// // })
// app.get('/about/list', function(요청, 응답){
//   응답.sendFile(__dirname + '/aboutList.html');
// })
// // app.get('/introduce', function(요청, 응답){
// //   응답.send("소개화면")
// // })
// app.get('/introduce', function(요청, 응답){
//   응답.sendFile(__dirname + '/introduce.html');
// })
// yarn global add nodemon 입력 - 코드 변경시 재시작하는 번거로움을 해소시켜주는 라이브러리 변경 사항을 자동으로 반영 - 자동으로 재시작
//  nodemon server.js 입력 - nodemon 서버 여는 방법

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'waterworsk/dist/index.html'))
})

module.exports = app;