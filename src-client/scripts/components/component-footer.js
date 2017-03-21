import React from 'react'
import ReactDOM from 'react-dom'

// let footerStyle = {
//   background-color: '#333',
//   height: '15%',
// }

// let buttonStyle {
//   border: '2px solid #fff',
// 	background-color: '#333',
// 	color: '#fff',
// }

export const FooterComponent = React.createClass({
   // _makeFooter: function(evt){
   //    evt.preventDefault();
   //    let formEl = evt.target
   //    let footerValsObject = {
   //
   //    }
   // },
      render: function(){

         return(


           <div className='footer_container'>
           <div className='container-fluid footer_content'>
           <div className='row options'>
               <div className='col-sm-4 directory'>
                 <button className='btn btn-default'>CHURCH DIRECTORY</button>
               </div>
               <div className='col-sm-4 tithe'>
                 <button className='btn btn-default'>GIVE ONLINE HERE</button>
               </div>
               <div className='col-sm-4 social'>
                 <button className='btn btn-default socialbtn'><i className="fa fa-facebook" aria-hidden="true"></i></button>
                 <button className='btn btn-default socialbtn'><i className="fa fa-twitter" aria-hidden="true"></i></button>
                 <button className='btn btn-default socialbtn'><i className="fa fa-vimeo" aria-hidden="true"></i></button>
                 <button className='btn btn-default socialbtn'><i className="fa fa-flickr" aria-hidden="true"></i></button>
               </div>
             </div>
           </div>
           <p className='directions'>Church of the Holy Cross, 2520 Middle Street, Sullivan&#39;s Island, SC 29482 843-883-3586 info@HolyCross.net</p>
           <p className='designer_tag'>Designed by eCothran, bCallahan &#38; nStreetman &#169; 2017 | Powered by Coffee</p>
           </div>


         )
      }
})
