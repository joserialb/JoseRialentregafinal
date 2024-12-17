import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("ID desde la URL:", id);
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = { id: docSnap.id, ...docSnap.data() };
          console.log("Producto encontrado:", productData);
          setProduct(productData);
        } else {
          console.log("Producto no encontrado");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Producto no encontrado.</p>}
    </div>
  );
};

export default ItemDetailContainer;
