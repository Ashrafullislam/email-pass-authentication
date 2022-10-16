# Email-Password-Varification and Reset a new Password if user forget her password
# Projects create steps:{
#.npx-create-react-app project name 
#.go to firebase > go to console and click create a projects
#.Register the app
#.Click one  app>Authentication>Signin method>enable email-verification>
#.install firebase and firebase app import code copy and paste projects> src> Firebase.init.js and export app;
#.app.js > follow the firebase documentation >authentication > password-authentication 
#.make accouont with verify import and call the method > import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
#.make an event handlar and apply onsubmit ={} inner the Form tag  
#.apply condition usinsg state to see the error message and success message .using .then to get result from firebase 
#.using regex-password-validation-from stackoverflow and using if else to check password type 
#.See the firebase project settings and see the  users 
#.See the firebase docs> authentication > Manage user to control verify 
#.install react-router-dom to toggole signup to log in 

