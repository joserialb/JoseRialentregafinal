import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

const addTestDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      name: "Producto de prueba",
      price: 123.45,
      category: "test",
    });
    console.log("Documento añadido con ID: ", docRef.id);
  } catch (e) {
    console.error("Error añadiendo documento: ", e);
  }
};

addTestDocument();
