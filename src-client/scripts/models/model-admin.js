export const AdminModel = Backbone.Model.extend({
})

AdminModel.logIn =  function(email, pw){
	if( email !== 'holycrosssermons@gmail.com' || password !== 'YesChurch1892'  ){ throw new Error(`Login information is incorrect!`) }

	return $.ajax({
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/#upload'
	})
}

// AdminModel.logOut =  function(){
// 	console.log('logging in!')
// 	return $.ajax({
// 		method: 'GET',
// 		url: '/auth/logout'
// 	})
// }

// UserModel.register =  function(data){
// 	if(typeof data !== 'object' ){ throw new Error(`UserModel.register() must receive an object`) }
// 	if(typeof data.email === 'undefined' || typeof data.password === 'undefined'  ){ throw new Error(`UserModel.register() must receive an object w/ email + password`) }
//
// 	return $.ajax({
// 		method: 'POST',
// 		data: JSON.stringify({ email: email, password: pw}),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		url: '/auth/register'
// 	})
// }
//
// UserModel.getCurrentUser =  function(){
// 	return $.ajax({
// 		method: 'GET',
// 		data: JSON.stringify({ email: email, password: pw}),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		url: '/auth/current'
// 	})
// }
