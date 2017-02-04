'use strict';

import React from 'react';
import axios from 'axios'
import temp from '../tempdata.js'
require('styles//Newtime.css');

class NewtimeComponent extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			update: false
		}
		
	}

	getData(){

	}

	goTobroadCast(){

	}


	Allarticle(){
	  var result =[]
	  var func = function(message){	
	  	temp.forEach(function(mes, index){
	  		var one = <article key={index}>
	  					<h1 title=""><span>{mes.date[0]}</span><span>{mes.date[1]}</span><span>{mes.date[2]}</span></h1>
	  				    <div className='content'><p>{mes.title}</p><p>{mes.contents}</p></div>
	  				    <div className="video-player">
    					  <div className="embed-responsive embed-responsive-16by9 youtube">
							<iframe width="560" height="315" src={mes.youtube}></iframe>
							</div>
    					</div>
	  				   </article>
	  		result.push(one)
	  	})
	  }
	  func(message)
	  return result
	}
    
  
	render() {
		return (

				<div className"App">
				{this.Allarticle()}
				</div> 
		)
	}

}

NewtimeComponent.displayName = 'NewtimeComponent';

// Uncomment properties you need
// NewtimeComponent.propTypes = {};
// NewtimeComponent.defaultProps = {};

export default NewtimeComponent;
