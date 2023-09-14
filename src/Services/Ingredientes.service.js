import ConectDB from "../Database/connection.js";

// Servicio para encontrar en el Documento Hamburguesas las Categorias Vegetarianas
export const getAllStock400 = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const stock = await collection.find({ stock: { $lt: 400 } }).toArray();

    return stock.length > 0
      ? {
          msg: "Stock de Ingredientes Inferior a 400 Encontradas",
          data: stock,
        }
      : {
          msg: "No hay Stock de Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateAllPrice = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const updatePrice = await collection.updateMany(
      {},
      { $mul: { precio: 1.5 } }
    );

    return updatePrice.modifiedCount > 0
      ? {
          msg: "Precio Aumentado a todos los Ingredientes en 1.5",
        }
      : {
          msg: "No hay Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteAllStock0 = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const deleteIngretientes = await collection.deleteMany({ stock: 0 });

    return deleteIngretientes.length > 0
      ? {
          msg: "Eliminados Ingredientes con Stock 0",
          data: deleteIngretientes,
        }
      : {
          msg: "No hay Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getIngredienteCaro = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const Ingrediente = await collection
      .find({})
      .sort({ precio: -1 })
      .limit(1)
      .toArray();

    return Ingrediente.length > 0
      ? {
          msg: "El Ingrediente más Caro es el Siguiente",
          data: Ingrediente,
        }
      : {
          msg: "No hay Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateIngredienteStock = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const Ingrediente = await collection.updateOne(
      { nombre: "Pan" },
      { $inc: { stock: 100 } }
    );

    return Ingrediente.modifiedCount > 0
      ? {
          msg: "El Ingrediente Pan se incremento el Stock en 100",
        }
      : {
          msg: "No hay Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getIngredienteClasico = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const IngredienteClasico = await collection
      .find({
        descripcion: { $regex: /clásico/i },
      })
      .toArray();

    return IngredienteClasico.length > 0
      ? {
          msg: "El Ingrediente es Clásico",
          data: IngredienteClasico,
        }
      : {
          msg: "No hay Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getIngredientePrecio = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const Ingrediente2_5 = await collection
      .find({ precio: { $gte: 2, $lte: 5 } })
      .toArray();

    return Ingrediente2_5.length > 0
      ? {
          msg: "El Ingrediente es Clásico",
          data: Ingrediente2_5,
        }
      : {
          msg: "No hay Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateOnePan = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const updatePan = await collection.updateMany(
      { nombre: "Pan" },
      { $set: { descripcion: "Pan fresco y crujiente" } }
    );

    return updatePan.acknowledged
      ? {
          msg: `Se ha Actualizado la descripción del “Pan” a “Pan fresco y crujiente”`,
        }
      : {
          msg: "No hay Pan en los Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllIngredienteAlfabetico = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Ingredientes");
    const AllIngrediente = await collection
      .find()
      .sort({ nombre: 1 })
      .toArray();

    return AllIngrediente.length > 0
      ? {
          msg: "El Ingrediente en orden Alfabético",
          data: AllIngrediente,
        }
      : {
          msg: "No hay Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
