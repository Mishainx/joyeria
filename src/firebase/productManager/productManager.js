import { db } from "../config";
import { collection, addDoc, getDocs, doc, deleteDoc} from "firebase/firestore";

export const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      return products;
    } catch (error) {
      console.log(error);
      throw error; // Lanzar el error para manejarlo mejor en otros lugares
    }
  };
export const createProduct = async (product)=>{
    try{
        const docRef = await addDoc(collection(db, "products"), product);
        return docRef
    }
    catch(error){
        console.log(error)
    }   
}

export const deleteProduct = async (productId) => {
    try {
      const productRef = doc(db, "productos", productId);
      await deleteDoc(productRef);
      return { message: "Producto eliminado", id: productId };
    } catch (error) {
      console.log(error);
      throw error; // Lanzar el error para manejarlo mejor en otros lugares
    }
  };