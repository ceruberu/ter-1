require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SellerComponent from './SellerComponent'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		typeOfUser : null  //  null, buyer 아니면 seller, seller면 sellerComponent, null 은 로그인 하기 전 
  	} 

  }
  render() {
    return (
    	<div>
		    <nav>
		      <div className="index">
		        <img src={yeomanImage} alt="Yeoman Generator" />
		        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
		      </div>
		    </nav>
	        <SellerComponent/>
	    </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
