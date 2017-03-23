import styles from './styles/main.scss'
import app from './scripts/app.js'

if(window.location.hostname === 'localhost'){
	let linkEl = document.querySelector('link[href="./css/styles.css"]')
	let headEl = document.querySelector('head')
	headEl.removeChild(linkEl)
}
