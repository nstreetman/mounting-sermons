import React from 'react'
import ReactDOM from 'react-dom'




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
                 <button className='btn btn-default'><a href="https://secure.accessacs.com/access/memberlogin.aspx?sn=142564">CHURCH DIRECTORY</a></button>
               </div>
               <div className='col-sm-4 tithe'>
                 <button className='btn btn-default'><a href="http://www.holycross.net/give">GIVE ONLINE HERE</a></button>
               </div>
               <div className='col-sm-4 social'>

                 <button className='btn btn-default socialbtn'><a href="https://www.facebook.com/HolyCrossSC"><i className="fa fa-facebook" aria-hidden="true"></i></a></button>
                 <button className='btn btn-default socialbtn'><a href="https://twitter.com/HolyCrossCHS"><i className="fa fa-twitter" aria-hidden="true"></i></a></button>
                 <button className='btn btn-default socialbtn'><a href="https://vimeo.com/holycrosssc"><i className="fa fa-vimeo" aria-hidden="true"></i></a></button>
                 <button className='btn btn-default socialbtn'><a href="https://www.flickr.com/photos/holycrosssc/sets"><i className="fa fa-flickr" aria-hidden="true"></i></a></button>
               </div>
             </div>
           </div>
           <p className='directions'>CHURCH OF THE HOLY CROSS, 2520 MIDDLE STREET, SULLIVAN&#39;S ISLAND, SC 29482 843-883-3586 INFO@HOLYCROSS.NET</p>
           <p className='directions'><a className="footer_login" href="#login">Login</a></p>

           <p className='designer_tag'>Designed by eCothran, bCallahan &#38; nStreetman &#169; 2017 | Powered by Coffee</p>
           </div>


         )
      }
})
