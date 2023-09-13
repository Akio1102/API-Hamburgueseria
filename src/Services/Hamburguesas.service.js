import ConectDB from "../Database/connection.js";

// Servicio para encontrar en el Documento Hamburguesas las Categorias Vegetarianas
export const getAllVegetarianos = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const vegetarianas = await collection
      .find({ categoria: "Vegetariana" })
      .toArray();

    return vegetarianas.length > 0
      ? {
          msg: "Hamburguesas Vegetarianas Encontradas",
          data: vegetarianas,
        }
      : {
          msg: "No hay Hamburguesas Vegetarianas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

// Servicio para encontrar en el Documento Hamburguesas del ChefB
export const getAllChefB = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const allChefB = await collection
      .find({
        chef: "ChefB",
      })
      .toArray();

    return allChefB.length > 0
      ? {
          msg: "Hamburguesas Hechas por ChefB Encontradas",
          data: allChefB,
        }
      : { msg: "No hay Hamburguesas Hechas por ChefB", status: 404 };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

// Servicio para encontrar en el Documento Hamburguesas del ChefB
export const getAllHamburguesaIntegral = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const allIntegral = await collection
      .find({
        ingredientes: "Pan integral",
      })
      .toArray();

    return allIntegral.length > 0
      ? {
          msg: "Hamburguesas Con Pan Integral",
          data: allIntegral,
        }
      : { msg: "No hay Hamburguesas Con Pan Integral", status: 404 };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateHamburguesaClasica = async (nuevoIngrediente = "Arepa") => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const updateClasica = await collection.updateOne(
      { nombre: "Clásica" },
      { $push: { ingredientes: nuevoIngrediente } }
    );

    return updateClasica.modifiedCount > 0
      ? {
          msg: "Se agrego un nuevo Ingrediente a la Hamburguesa Clásica",
        }
      : { msg: "No hay Hamburguesas Con Pan Integral", status: 404 };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllHamburguesassinQuesoCheddar = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const allQuesoCheddar = await collection
      .find({ ingredientes: { $ne: "Queso cheddar" } })
      .toArray();

    return allQuesoCheddar.length > 0
      ? {
          msg: "Hamburguesas Sin queso Cheddar Encontradas",
          data: allQuesoCheddar,
        }
      : { msg: "No hay Hamburguesas Con Pan Quedo Cheddar", status: 404 };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllHamburguesasPrecioMenor = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const allHamburguesas = await collection
      .find({ precio: { $lte: 9 } })
      .toArray();

    return allHamburguesas.length > 0
      ? {
          msg: "Hamburguesas Precio menor o igual a 9",
          data: allHamburguesas,
        }
      : {
          msg: "No hay Hamburguesas Con Precio menor o igual a 9",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteIngretientes5 = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const allHamburguesas = await collection.deleteMany({
      $expr: { $lt: [{ $size: "$ingredientes" }, 5] },
    });

    return allHamburguesas.deletedCount > 0
      ? {
          msg: "Hamburguesas con menos de 5 Ingredientes",
          data: allHamburguesas,
        }
      : {
          msg: "No hay Hamburguesas Con Precio menos de 5 Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
