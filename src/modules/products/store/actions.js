import {db} from '@/api';
import { doc, getDoc } from "firebase/firestore";

export const getCategoriesList = async () => {
    const categoriesArr = [];
    const category = doc(db, "categories")
    const categoryDoc = await getDoc(category)

    if (categoryDoc.exists()) {
        console.log("Document data:", categoryDoc.data());
      } else {
        console.log("No such document!");
      }
}