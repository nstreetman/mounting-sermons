import React from 'react'
import {AppRouter} from './router.js'
import {ACTIONS} from './actions.js'
import {STORE} from './store.js'

import {FooterComponent} from './components/component-footer.js'
import {HeaderComponent} from './components/component-header.js'
import {HomeView} from './views/view-home.js'
import {ClergyView} from './views/view-byClergy.js'
import {CampusView} from './views/view-byCampus.js'
import {SeriesView} from './views/view-bySeries.js'
import {UploadFormView} from './views/view-uploadForm.js'
import {LoginFormView} from './views/view-login.js'
import {SideBarAnon} from './components/component-filter.js'


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
				componentToRender = <HomeView/>
				break;
			case "LOGIN":
				componentToRender =  <LoginFormView/>
				break;
			case "UPLOAD":

				componentToRender = <UploadFormView/>
				break;
			case "SERIES":
				componentToRender = <SeriesView/>
				break;
			case "CLERGY":
				componentToRender = <ClergyView/>
				break;
			case "CAMPUS":
				componentToRender = <CampusView/>
				break;
			default:
				componentToRender = <h1>Nothing found!</h1>
		}

		return (
			<div><HeaderComponent/>
				<SideBarAnon/>
				{componentToRender}
				<FooterComponent/>
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
