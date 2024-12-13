import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./config";


const mockProductDetails = {
  1: { id: 1, name: "Bicicleta estática", price: 299.99, image: "/images/bicicleta_estatica.webp", category: "cardio", description: "Bicicleta estática de bajo impacto para entrenamiento cardiovascular." },
  2: { id: 2, name: "Cinta de caminar", price: 499.99, image: "/images/Cinta_de_caminar.webp", category: "cardio", description: "Cinta de caminar con inclinación ajustable para simular caminatas al aire libre." },
  3: { id: 3, name: "Elíptica", price: 399.99, image: "/images/Eliptica.webp", category: "cardio", description: "Máquina elíptica para entrenamiento de cuerpo completo sin impacto." },
  4: { id: 4, name: "Remo", price: 349.99, image: "/images/remo.webp", category: "cardio", description: "Máquina de remo para fortalecer brazos, piernas y espalda." },
  5: { id: 5, name: "Escalador", price: 279.99, image: "/images/Escalador.webp", category: "cardio", description: "Escalador para simular subir escaleras y mejorar la resistencia." },
  6: { id: 6, name: "Bicicleta reclinada", price: 329.99, image: "/images/Bicicleta_reclinada.webp", category: "cardio", description: "Bicicleta reclinada para mayor comodidad durante el ejercicio." },
  7: { id: 7, name: "Mancuernas ajustables", price: 149.99, image: "/images/Mancuernas_ajustables.webp", category: "fuerza", description: "Set de mancuernas ajustables para entrenamiento de fuerza variable." },
  8: { id: 8, name: "Banco de pesas", price: 199.99, image: "/images/Banco_de_pesas.webp", category: "fuerza", description: "Banco ajustable para ejercicios de pesas y entrenamiento de fuerza." },
  9: { id: 9, name: "Máquina de cable", price: 599.99, image: "/images/Máquina_de_cable.webp", category: "fuerza", description: "Máquina de cable multifuncional para diversos ejercicios de fuerza." },
  10: { id: 10, name: "Bandas de resistencia", price: 29.99, image: "/images/Bandas_de_resistencia.webp", category: "fuerza", description: "Set de bandas de resistencia para entrenamiento de fuerza y flexibilidad." },
  11: { id: 11, name: "Kettlebells", price: 79.99, image: "/images/Kettlebells.webp", category: "fuerza", description: "Set de kettlebells para entrenamiento funcional y de fuerza." },
  12: { id: 12, name: "TRX", price: 129.99, image: "/images/TRX.webp", category: "fuerza", description: "Sistema de entrenamiento en suspensión TRX para ejercicios con el peso corporal." },
  13: { id: 13, name: "Esterilla de yoga", price: 39.99, image: "/images/Esterilla_de_yoga.webp", category: "flexibilidad", description: "Esterilla antideslizante para yoga y ejercicios de estiramiento." },
  14: { id: 14, name: "Rodillo de espuma", price: 24.99, image: "/images/Rodillo_de_espuma.webp", category: "flexibilidad", description: "Rodillo de espuma para masaje y liberación miofascial." },
  15: { id: 15, name: "Pelota de pilates", price: 19.99, image: "/images/Pelota_de_pilates.webp", category: "flexibilidad", description: "Pelota de pilates para ejercicios de estabilidad y flexibilidad." },
  16: { id: 16, name: "Bloques de yoga", price: 14.99, image: "/images/Bloques_de_yoga.webp", category: "flexibilidad", description: "Set de bloques de yoga para ayudar en posturas y estiramientos." },
  17: { id: 17, name: "Correa de yoga", price: 9.99, image: "/images/Correa_de_yoga.webp", category: "flexibilidad", description: "Correa de yoga para mejorar la flexibilidad y alcance en estiramientos." },
  18: { id: 18, name: "Set de estiramientos", price: 34.99, image: "/images/Set_de_estiramientos.webp", category: "flexibilidad", description: "Set completo de herramientas para mejorar la flexibilidad y movilidad." }
};


const uploadProducts = async () => {
  try {
    for (const key in mockProductDetails) {
      const product = mockProductDetails[key];
      const docRef = doc(db, "products", `${product.id}`);
      await setDoc(docRef, product); 
      console.log(`Producto con ID ${product.id} subido correctamente.`);
    }
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
};


uploadProducts();