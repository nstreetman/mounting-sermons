import React from 'react'

export const ViewController = React.createClass({

   getInitialState: function(){
		ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
		let storeObject = STORE.getStoreData()
		return storeObject
	},

   componentDidMount: function(){
      let component = this
      STORE.onStoreChange(function(){
         let newStoreObj = STORE.getStoreData()
         component.setState(newStoreObj)
      })

      ACTIONS.fetchAllSermons()
   },

      render: function(){
         let componentToRender

         switch(this.state.currentNavRoute){
			case "CAMPUS":
				componentToRender = <CampusView {...this.state}/>
				break;
			case "CLERGY":
				componentToRender = <ClergyView {...this.state}/>
				break;
 			case "FORM":
				componentToRender = <FormView {...this.state}  />
				break;
            case "HOME":
   			componentToRender = <HomeView {...this.state} />
   			break;
            case "HOME":
      		componentToRender = <HomeView {...this.state} />
      		break;
 			default:
		}
      return(
         <div>
				<HomeView { ...this.state }/>
				{componentToRender}
			</div>
      )
   }
})
