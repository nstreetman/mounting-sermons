import React from 'react'

export const ShoutOutListComponent = React.createClass({

   _makeShoutOutComponents: function(shoutsList){
		let arrayOfShoutOutComponents = shoutsList.map(function(smod, i){
         return (
            <ShoutItem shoutData={smod} key={i}/>
         )
      }).reverse()

		return arrayOfShoutOutComponents
	},

   render: function(){
      let self = this
      let shoutsList = []

      
      return (
         <div className="col-sm-8">
            <h2>¡Shout Outs!</h2>

            <div className="shoutout">

               {this._makeShoutOutComponents(this.props.shoutOutsListData)}

            </div>
         </div>

      )
   }
})

export const ShoutItem = React.createClass({
   render: function(){
      return (
         <blockquote  style={{background: 'indianred', color: '#fff', padding: '4rem'}}>
            <p>{this.props.shoutData.msg}</p>
            <img src={this.props.shoutData.imgLink} alt="..."/>
            <cite>{this.props.shoutData.from}</cite>
            <h3 className="text-muted text-right">
               RATING:
               <span className="bg-warning text-primary text-center" style={{padding: '10px'}}>
                  {this.props.shoutData.rating}
               </span>
            </h3>
         </blockquote>
      )
   }
})