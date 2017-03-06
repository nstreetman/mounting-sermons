import React from 'react'


export const NavComponent = React.createClass({
   _handleNavClick: function(evt){
      let updatedRating = evt.target.dataset.rated
      //(3b) .changeViewSetting Action (fires on Nav-Button click)
      ACTIONS.changeViewSetting(updatedRating)

   },

   _getBtnClassName: function(viewType, currentView){
      if(viewType === currentView){
         return 'btn btn-primary btn-lg'
      } else {
         return 'btn btn-default btn-lg'

      }
   },

   render: function(){
      let currentSelectedView = this.props.selectedView

      return (
         <div>
            <hr/>
            <button className={ this._getBtnClassName('ALL', currentSelectedView) } onClick={this._handleNavClick} data-rated="ALL"  >All</button>
            <button className={ this._getBtnClassName('G', currentSelectedView) } onClick={this._handleNavClick} data-rated="G"  >Family Friendly (Rated G)</button>
            <button className={ this._getBtnClassName('PG', currentSelectedView) } onClick={this._handleNavClick} data-rated="PG"  >Parental Guidance (Rated PG)</button>
            <button className={ this._getBtnClassName('R', currentSelectedView) } onClick={this._handleNavClick} data-rated="R"  >Mature Audiences (Rated R)</button>
            <hr/>
         </div>
      )
   }
})