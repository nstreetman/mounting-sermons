import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import YouTubeAudio from 'react-youtube-audio'

import {ViewController} from './viewController.js'
import {SermonCollection} from './models/model-sermon.js'
import {HomeView} from './views/view-home.js'


ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
