import React from 'react'
import {AppRouter} from './router.js'
import {ACTIONS} from './actions.js'
import {STORE} from './store.js'

export const ViewController = React.createClass({

	getInitialState: function(){
		let stateObj = STORE.getStoreData()
		return stateObj
	},

	componentWillMount: function(){
		let vcComponent = this
		STORE.onStoreChange(function(){
			let newStoreState = STORE.getStoreData()
			vcComponent.setState(newStoreState)
		})

		let router = new AppRouter()
	},

	render: function(){
		let currentView = this.state.currentView
		let componentToRender

		switch(currentView){
			case "HOME":
				componentToRender = <h1 className="M-bg_success"> The Home Page</h1>
				break;
			case "LOGIN":
				componentToRender =  <h1 className="M-bg_info">Login</h1>
				break;
			default:
				componentToRender = <h1 className="M-bg_fail">Nothing found!</h1>
		}

		return (
			<div>
				<Sidebar/>
				{componentToRender}
			</div>
		)

	}
})


// export const ViewController = React.createClass({
//
//    getInitialState: function(){
// 		ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
// 		let storeObject = STORE.getStoreData()
// 		return storeObject
// 	},
//
//    componentDidMount: function(){
//       let component = this
//       STORE.onStoreChange(function(){
//          let newStoreObj = STORE.getStoreData()
//          component.setState(newStoreObj)
//       })
//
//       ACTIONS.fetchAllSermons()
//    },
//
//       render: function(){
//          let componentToRender
//
//          switch(this.state.currentNavRoute){
// 			case "CAMPUS":
// 				componentToRender = <CampusView {...this.state}/>
// 				break;
// 			case "CLERGY":
// 				componentToRender = <ClergyView {...this.state}/>
// 				break;
//  			case "FORM":
// 				componentToRender = <FormView {...this.state}  />
// 				break;
//             case "HOME":
//    			componentToRender = <HomeView {...this.state} />
//    			break;
//             case "HOME":
//       		componentToRender = <HomeView {...this.state} />
//       		break;
//  			default:
// 		}
//       return(
//          <div>
// 				<HomeView { ...this.state }/>
// 				{componentToRender}
// 			</div>
//       )
//    }
// })
