import { defineStore, createPinia } from 'pinia'
//import { auth } from '../firebase/firebase'
//import { signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import router from '../router/index'
//import { db } from '../firebase/firebase'
//import { query,  collection, onSnapshot, doc, where, orderBy, getDoc, limit, startAfter, setDoc, addDoc, getDocs, updateDoc } from 'firebase/firestore'
export const useAuthStore = defineStore({
    id: 'useAuthStore',
    state: () => ({
        number: "",
        password: "",
        viewInitial: "",
        userAccess: "",
        textButtonLogin: false
    }),
    getters: {},
    actions: {
        signIn() {
            console.log("Iniciar sesion");
            if(this.number == "" || this.password == "") {
                console.log("Completa la info");
                
            } else {
                console.log(this.number, this.password);
                
                this.textButtonLogin = true
               /*  signInWithEmailAndPassword( auth, `${this.number}@grupo-sipref.com.mx`, this.password).then(( userCredential ) => {
                    auth.onAuthStateChanged( async ( user ) => {
                        if(user) {
                            
                        }
                    })
                }).catch( err => {
                    this.number = ""
                    this.password = ""
                    this.textButtonLogin = false
                }) */
            }
        },
       /*  async signOut() {
            console.log("Salir");
            try {
                this.textButtonLogin = false
                this.number = ""
                this.password = ""
                await signOut(auth)
                localStorage.removeItem('SystemDataSIPREF')
                location.reload()
                // router.push('/')
            } catch (error) {
                console.log(error)
            }
        } */
    }
})