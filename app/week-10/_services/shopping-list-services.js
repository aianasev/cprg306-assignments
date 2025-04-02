import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const itemsRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(itemsRef);
    let items = [];
    querySnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
}

export async function addItem(userId, item) {
    try {
      const itemsRef = collection(db, "users", userId, "items");
      const docRef = await addDoc(itemsRef, item);
      return docRef.id;
    } catch (error) {
    console.error("Error adding document: ", error);
    }
}