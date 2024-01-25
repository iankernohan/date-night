import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase.config";

const collectionRef = collection(db, 'ratings')

export async function getData() {
    const data = [];
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
    return data
}

export function addData(data) {
    addDoc(collectionRef, data)
        .then(() => console.log('data added'))
        .catch((err) => console.log(err))
}

export async function updateData(id, data) {
    const docRef = doc(collectionRef, id);
    updateDoc(docRef, data)
        .then(() => console.log('data updated'))
        .catch((err) => console.log('error updating data ' + err))
}

export function deleteData(id) {
    const docRef = doc(collectionRef, id);
    deleteDoc(docRef)
        .then(() => console.log('data deleted'))
        .catch(err => console.log('error deleting data ' + err))
}