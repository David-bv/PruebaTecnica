import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { typesUsers } from '../types/types'


//update User

export const userEdit = (data, user) => {
    return async (dispatch) => {
        const getCollection = collection(db, 'DbUsers')
        const q = query(getCollection, where('numberId', '==', data))
        console.log(q);
        const datosQ = await getDocs(q)
        console.log(datosQ);
        let id
        datosQ.forEach(async(docu) => {
            id = docu.id
        })
        console.log(id);

        const docRef = doc(db, 'DbUsers', id)
        await updateDoc(docRef, user)
        .then(() => showUser())
    }
}

export const userEditSyn = ( user ) => {
    return  {
        type: typesUsers.edit,
        payload: user
    }
}

// Delete User

export const userDelete = ( data ) =>{
    return async(dispatch) => {

        const getCollection = collection(db,'DbUsers');
        const q = query(getCollection,where("numberId","==", data))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"DbUsers",docu.id));
        })
        dispatch(deleteSyn(data));
    }
}

export const deleteSyn = ( user ) => {
    return{
        type: typesUsers.delete,
        payload: user
    }
}

//List User

export const showUser = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, 'DbUsers'));
        const userCollection = [];
        data.forEach((doc) => {
            userCollection.push({
                ...doc.data()
            })
        });
        dispatch(showUserSync(userCollection));
    }
}

export const showUserSync = (user) => {
    return {
        type: typesUsers.list,
        payload: user
    }
}

//Create User

export const userRegister = (user) => {
    return(dispatch) => {
        addDoc(collection(db,'DbUsers'), user)
        .then(resp => {
            dispatch(userRegisterSinc(user))
            dispatch(showUser()) 
        })
        .catch (error => {
            console.log(error);
        })
    }
}

export const userRegisterSinc = (user) => {
    return {
        type: typesUsers.create,
        payload: user
    }
}