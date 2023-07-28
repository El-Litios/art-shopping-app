import {db} from '@/api';
import { collection, getDocs, query } from "firebase/firestore";

export const getUsersList = async ({commit}) => {
    const usersArr = [];
    const usersCollectionQuery = query(collection(db, "users"));
    const usersCollection = await getDocs(usersCollectionQuery);
    usersCollection.forEach((doc) => {
      let data = doc.data()
                data.id = doc.id
                console.log(data);
                usersArr.push(data)
    });
    commit('setDataToArray', usersArr)
}