import {db} from '@/api';
import { collection, getDocs, query } from "firebase/firestore";

export const getCategoriesList = async ({commit}) => {
    const categoriesArr = [];
    const categoryCollectionQuery = query(collection(db, "categories"));
    const categoryCollection = await getDocs(categoryCollectionQuery);
    categoryCollection.forEach((doc) => {
      let data = doc.data()
                data.id = doc.id
                categoriesArr.push(data)
    });
    commit('setCategories', categoriesArr)
}

export const getProductsList = async ({commit}) => {
    const productsArr = [];
    const productCollectionQuery = query(collection(db, "products"));
    const productCollection = await getDocs(productCollectionQuery);
    productCollection.forEach((doc) => {
      let data = doc.data()
                data.id = doc.id
                productsArr.push(data)
    });
    commit('setProducts', productsArr)
}