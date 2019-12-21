import store from "./store";
import Firebase from "firebase";
import router from "./router"
import { UPDATE_USER } from "./store/constants";

const config = {
    apiKey: "AIzaSyCnXJigrILkSbRHWmMRaVpVgekY76ep6e4",
    authDomain: "documentive-da37d.firebaseapp.com",
    databaseURL: "https://documentive-da37d.firebaseio.com",
    projectId: "documentive-da37d",
    storageBucket: "documentive-da37d.appspot.com",
    messagingSenderId: "712719294772",
    appId: "1:712719294772:web:05fbe9ced78af581018561",
    measurementId: "G-SJNTCRTNP7"
};

export default {
    install: (Vue, options) => {
        const firebase = Firebase.initializeApp(config)
        const auth = firebase.auth();

        Vue.prototype.$auth = {
            login: async (email, pass, type) => {
                if (type == "login") {
                    return await auth.signInWithEmailAndPassword(email, pass);
                }
                
                return await auth.createUserWithEmailAndPassword(email, pass);
            },
            logout: async() => {
                await auth.signOut()
            }
        }

        auth.onAuthStateChanged(user => {
            if (user) {
                router.push({name: 'app'})
            }

            store.commit(UPDATE_USER, { user })
        })
    },
}
