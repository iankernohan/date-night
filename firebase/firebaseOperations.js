import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

const collectionRef = collection(db, "ratings");
const foodCollectionRef = collection(db, "food");

export async function getData() {
  const data = [];
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
  return data;
}

export async function addData(data) {
  try {
    await addDoc(collectionRef, data);
    console.log("data added");
  } catch (err) {
    console.log(err);
  }
}

export async function updateData(id, data) {
  const docRef = doc(collectionRef, id);
  try {
    await updateDoc(docRef, data);
    console.log("data updated");
  } catch (err) {
    console.log(err);
  }
}

export async function deleteData(id) {
  const docRef = doc(collectionRef, id);
  try {
    await deleteDoc(docRef);
    console.log("data deleted");
  } catch (err) {
    console.log(err);
  }
}

// FOOD ENDPOINTS

export async function getFoodData() {
  const data = [];
  const snapshot = await getDocs(foodCollectionRef);
  snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
  return data;
}

export async function addFoodData(data) {
  try {
    await addDoc(foodCollectionRef, data);
    console.log("data added");
  } catch (err) {
    console.log(err);
  }
}

export async function updateFoodData(id, data) {
  const docRef = doc(foodCollectionRef, id);
  try {
    await updateDoc(docRef, data);
    console.log("data updated");
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFoodData(id) {
  const docRef = doc(foodCollectionRef, id);
  try {
    await deleteDoc(docRef);
    console.log("data deleted");
  } catch (err) {
    console.log(err);
  }
}
