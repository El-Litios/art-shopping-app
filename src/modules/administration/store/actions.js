import {db} from '@/api';
import { collection, getDocs, query } from "firebase/firestore";

export const getProductsList = async ({commit}) => {
    const productsArr = [];
    const productsCollectionQuery = query(collection(db, "products"));
    const productsCollection = await getDocs(productsCollectionQuery);
    productsCollection.forEach((doc) => {
      let data = doc.data()
                data.id = doc.id
                console.log(data);
                productsArr.push(data)
    });
    commit('setDataToArray', productsArr)
}