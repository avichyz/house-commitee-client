// /*
//   TokenScopesArray
//   Valid values are found under:
//   AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings
//   Example values: ['profile', 'email', 'openid', 'aws.cognito.signin.user.admin', 'phone']

//   RedirectUriSignOut 
//   This value must match the value specified under:
//   AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings -> Sign out URL(s)
// */
// var authData = {
//     ClientId: '124711242294-probably wrong', // Your client id here
//     AppWebDomain: 'http://ronclienttry.s3-website-us-west-2.amazonaws.com',
//     TokenScopesArray: <TODO: add scope array>, e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
// 	RedirectUriSignIn : 'www.google.com',
// 	RedirectUriSignOut : 'www.walla.co.il',
// 	IdentityProvider : 'Facebook',
// 	UserPoolId : 'us-east-2_2G6QyEtrR', // Your user pool id here
// 	AdvancedSecurityDataCollectionFlag : <TODO: boolean value indicating whether you want to enable advanced security data collection>, e.g. true
// };
// var auth = new AWSCognito.CognitoIdentityServiceProvider.CognitoAuth(authData);


// // ES Modules, e.g. transpiling with Babel
// import {CognitoAuth} from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';

// auth.userhandler = {
//             onSuccess: function(result) {
//             alert("Sign in success");
//         showSignedIn(result);
// 	},
// 	onFailure: function(err) {
//             alert("Error!");
//         }
// };

// // auth.getSession();

// // var curUrl = window.location.href;
// // auth.parseCognitoWebResponse(curUrl);

// // function onLoad() {
// // 	var auth = initCognitoSDK();
// // 	var curUrl = window.location.href;
// // 	auth.parseCognitoWebResponse(curUrl);
// // }

// // auth.signOut();