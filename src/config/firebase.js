import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
// confignya didapat dari halaman firebase kalian
// bisa dicek di https://firebase.google.com/
const firebaseConfig = {
    apiKey: "",
    authDomain: "mood-meter-13966.firebaseapp.com",
    projectId: "mood-meter-13966",
    storageBucket: "mood-meter-13966.appspot.com",
    messagingSenderId: "17422836348",
    appId: "1:17422836348:web:25d2fbcb86bbaddb759ff9",
    measurementId: "G-YKPBJ9XBLH"
};

const app = initializeApp(firebaseConfig);
// ambil auth dari firebase di sini sekali aja biar bisa dipakai berkali-kali
const auth = getAuth(app);

//diexport
export { auth };