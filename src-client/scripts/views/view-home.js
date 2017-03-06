import React from 'react'
import {NavComponent} from '../components/component-nav.js'
import {NewShoutComponent} from '../components/component-new_shout.js'
import {ShoutOutListComponent} from '../components/component-shout_list.js'
import {ACTIONS} from '../actions.js'

export const HomeView = React.createClass({
	getInitialState: function(){
		return {
			shoutOutList: []
		}
	},

	componentDidMount: function(){
		let component = this
		ACTIONS.fetchAllShouts().then(function(serverRes){
			console.log('shout data', serverRes)
			component.setState({ shoutOutList: serverRes  })
		})
	},
	
	render: function(){
		console.log('from <HomeView/>', this.props.shoutOutsListData)
		return (

			<div className="container">
					<NavComponent/>
					<NewShoutComponent/>
					<ShoutOutListComponent shoutOutsListData={this.state.shoutOutList}/>
			</div>
		)
	}
})