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
