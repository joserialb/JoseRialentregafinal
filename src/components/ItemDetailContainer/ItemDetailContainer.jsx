import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtén el ID desde la URL
  const [product, setProduct] = useState(null); // Estado del producto
  const [loading, setLoading] = useState(true); // Controla la carga

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      console.log("ID desde la URL:", id);

      try {
        const docRef = doc(db, "products", id); // Busca en Firestore usando el ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Producto no encontrado en Firestore");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        console.log("Producto obtenido:", product);

      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles...</p>;
  }

  if (!product) {
    return <p>El producto no existe o no se encontró.</p>;
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;


