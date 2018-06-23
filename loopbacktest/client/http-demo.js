const request = require('request');
 
// request('http://localhost:3000/api/Notes', { json: true }, (err, res, body) => {
//   if (err) {
//   console.log('error occured ******') ;
//   return console.log(err); }
//   console.log(body);
// });

var obj={
	"title":"modified string2",
	"content":"modified string2",
	"id":"a"
};
request({
	method:"PATCH",
	uri:'http://localhost:3000/api/Notes',
	json:obj
},(err,response,body)=>{
	if (err)return console.log(err);
	console.log(body);
})