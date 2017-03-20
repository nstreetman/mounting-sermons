import React from 'react'

export const ViewController = React.createClass({

   getInitialState: function(){
	     let stateObj = STORE.getStoreData()
        return stateObj
	},

   componentWillMount: function(){
      let vcComponent = this
      STORE.onStoreChange(function(){
         let newStoreState = STORE.getStoreData()
         vccomponent.setState(newStoreState)
      })

      let router = new AppRuter()
   },

      render: function(){
         let componentToRender = this.state.currentView
         let componentToRender

         switch(currentView){
			case "HOME":
				componentToRender = <h1 className='M-bg_success'> Home Page </h1>
				break;
			case "CLERGY":
				componentToRender = <h1 className = 'M-bg_info'> Login Form </h1>
			// 	break;
 		// 	case "FORM":
			// 	componentToRender = <FormView {...this.state}  />
			// 	break;
         //    case "HOME":
   		// 	componentToRender = <HomeView {...this.state} />
   		// 	break;
         //    case "HOME":
      	// 	componentToRender = <HomeView {...this.state} />
      		break;
 			default:
		}
      return(
         <div>
				<SideBar/>
				{componentToRender}
			</div>
      )
   }
})
