import React from 'react';
import ReactDom from 'react-dom';

//import './common/style/main.css';
/*import dog from './common/img/dogs.jpg';
import kb from './common/img/3kb.jpg';
const giphy=require('./common/img/giphy.gif');
console.log(dog);*/
import 'font-awesome/css/font-awesome.css';
//import style from './common/style/main.css';
//import aac from './common/style/aac.css'
//import style from './main.css'
//import from './common/style/main.scss'
//import './common/style/main.less'
//import S from './main.less'
//let a={a:1,b:2};
//console.log({...a,c:3});
ReactDom.render(
	/*<div>
		<img src={dog} alt=""/>
		<img src={kb} alt=""/>
		<img src={giphy} alt=""/>
		<img src={require('./common/img/sc.png')} alt=""/>
	</div>,*/
	<div className="ot">
		<img src={require('./common/img/dogs.jpg')} alt=""/>
		<i className="fa fa-rocket"></i>
		React
	</div>,
	document.getElementById('root')
	);

