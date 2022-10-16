# Email-Password-Varification and Reset a new Password if user forget her password
@ Projects create steps:{
A.npx-create-react-app project name 
B.go to firebase > go to console and click create a projects
C.Register the app
D.Click one  app>Authentication>Signin method>enable email-verification>
E.install firebase and firebase app import code copy and paste projects> src> Firebase.init.js and export app;
F.app.js > follow the firebase documentation >authentication > password-authentication 
G.make accouont with verify import and call the method > import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
H.make an event handlar and apply onsubmit ={} inner the Form tag  
I.apply condition usinsg state to see the error message and success message .using .then to get result from firebase 
J.using regex-password-validation-from stackoverflow and using if else to check password type 
K.See the firebase project settings and see the  users 
L.See the firebase docs> authentication > Manage user to control verify 
M.install react-router-dom to toggole signup to log in 

