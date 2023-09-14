import ConectDB from "../Database/connection.js";

// Servicio para encontrar en el Documento Hamburguesas las Categorias Vegetarianas
export const getAllChefsCarnes = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Chefs");
    const ChefsCarnes = await collection
      .find({ especialidad: "Carnes" })
      .toArray();

    return ChefsCarnes.length > 0
      ? {
          msg: "Chefs Especializados en Carnes Encontrados",
          data: ChefsCarnes,
        }
      : {
          msg: "No hay Chefs Especializados en Carnes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateChefC = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Chefs");
    const ChefC = await collection.updateOne(
      { nombre: "ChefC" },
      { $set: { especialidad: "Cocina Internacional" } }
    );

    return ChefC.modifiedCount > 0
      ? {
          msg: "Se actualizado la especialidad del ChefC a Cocina Internacional",
        }
      : {
          msg: "No hay ChefC",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllChefsCount = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Chefs");
    const Chefs = await collection.countDocuments({});

    return Chefs > 0
      ? {
          msg: "Chefs Encontrados",
          data: `Hay un total de ${Chefs} Chefs`,
        }
      : {
          msg: "No hay Chefs",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createChef = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Chefs");
    const Chefs = await collection.insertOne({
      nombre: "ChefD",
      especialidad: "Cocina Asiática",
    });

    return Chefs.acknowledged
      ? {
          msg: "Chefs Creado con especialidad de Cocina Asiática",
        }
      : {
          msg: "No hay Chefs",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllChefsA = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Chefs");
    const AllChefs = await collection
      .find({ nombre: { $ne: "ChefA" } })
      .toArray();

    return AllChefs.length > 0
      ? {
          msg: `Chefs Encontrados Excepto "ChefA"`,
          data: AllChefs,
        }
      : {
          msg: "No hay Chefs",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteAllChecfsVeg = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Chefs");
    const deleteChefsVeg = await collection.deleteMany({
      especialidad: "Cocina Vegetariana",
    });

    return deleteChefsVeg.deletedCount > 0
      ? {
          msg: "Eliminados Chefs especializados en Cocina Vegetariana",
          data: deleteChefsVeg,
        }
      : {
          msg: "No hay Chefs especializados en Cocina Vegetariana",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
