import ConectDB from "../Database/connection.js";

// Servicio para encontrar en el Documento Hamburguesas las Categorias Vegetarianas
export const getAllCategorias = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Categorias");
    const Categorias = await collection.find().toArray();

    return Categorias.length > 0
      ? {
          msg: "Categorias de Hamburguesas Encontradas",
          data: Categorias,
        }
      : {
          msg: "No hay Categorias",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllCategoriasGourmet = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Categorias");
    const Categorias = await collection
      .find({
        descripcion: { $regex: /gourmet/i },
      })
      .toArray();

    return Categorias.length > 0
      ? {
          msg: "Categorias Goutmet Encontradas",
          data: Categorias,
        }
      : {
          msg: "No hay Categorias",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
