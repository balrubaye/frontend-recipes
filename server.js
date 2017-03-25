require('babel-core/register')({
  presets: ['es2015','react']
});
const express= require('express');
const react= require('react');
const reactDom= require('react-dom/server');
const app= express();
const mainComp= require('./public/components/main.jsx');
const http=require('http');
const server= http.Server(app);
const path= require('path');
const nconf= require('nconf');

//use the config.json file  for application configuration 
nconf.argv()
	 .env('__')
	 .file({ file:'./config.json'});

const port= nconf.get('http:port');	


let mainFact= react.createFactory(mainComp);


//use ejs for the views 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use('/public', express.static(path.resolve(__dirname,'public')));

app.get('*', (req, res)=>{

	res.render('index', {
		title: 'The web front-end Recipes',
		react: reactDom.renderToString(mainFact() )
	})
})

server.listen(port, (err)=>{
	console.log(`listining on port ${port}` );
})
