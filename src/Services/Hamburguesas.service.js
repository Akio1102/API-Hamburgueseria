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

export const updateHamburguesaClasica = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const updateClasica = await collection.updateOne(
      { nombre: "Clásica" },
      { $push: { ingredientes: "Arepa" } }
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
        }
      : {
          msg: "No hay Hamburguesas Con Precio menos de 5 Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllHamburguesasAsc = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const allHamburguesasAsc = await collection
      .find({})
      .sort({ precio: 1 })
      .toArray();

    return allHamburguesasAsc.length > 0
      ? {
          msg: "Hamburguesas listadas Ascendente según el Precio",
          data: allHamburguesasAsc,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllHamburguesasTomate_Lechuga = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const allHamburguesas = await collection
      .find({ ingredientes: { $in: ["Tomate", "Lechuga"] } })
      .toArray();

    return allHamburguesas.length > 0
      ? {
          msg: `Hamburguesas con Tomate o Lechuga como Ingredientes`,
          data: allHamburguesas,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateHamburguesaGourmet = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const updateClasica = await collection.updateMany(
      { categoria: "Gourmet" },
      { $inc: { precio: 2 } }
    );

    return updateClasica.acknowledged
      ? {
          msg: "Se ha incrementado en $2 todas las Hamburguesas Gourmet",
        }
      : { msg: "No hay Hamburguesas Gourmet", status: 404 };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getHamburguesaCara = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const HamburguesaCara = await collection
      .find({})
      .sort({ precio: -1 })
      .limit(1)
      .toArray();

    return HamburguesaCara.length > 0
      ? {
          msg: "La Hamburguesa más Cara encontrada",
          data: HamburguesaCara,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateAllHamburguesaClasica = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");

    const updateClasica = await collection.updateMany(
      { categoria: "Clásica" },
      { $push: { ingredientes: "Pepinillos" } }
    );

    return updateClasica.modifiedCount
      ? {
          msg: `Se ha agregado Pepinillos en los ingredientes de las Hamburguesas Clásicas`,
        }
      : { msg: "No hay Hamburguesas Gourmet", status: 404 };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getHamburguesaIngredientes7 = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const AllHamburguesaIngredientes7 = await collection
      .find({ ingredientes: { $size: 7 } })
      .toArray();

    return AllHamburguesaIngredientes7.length > 0
      ? {
          msg: "Hamburguesas con 7 Ingredientes",
          data: AllHamburguesaIngredientes7,
        }
      : {
          msg: "No hay Hamburguesas con 7 Ingredientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getHamburguesaCaraGourmet = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const CaraGourmet = await collection
      .find({ categoria: "Gourmet" })
      .sort({ precio: -1 })
      .limit(1)
      .toArray();

    return CaraGourmet.length > 0
      ? {
          msg: "La hamburguesa más cara preparada por un chef especializado en Gourmet es la Siguiente",
          data: CaraGourmet,
        }
      : {
          msg: "No hay Hamburguesa preprara por Chef especializado en Gourmet",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getHamburguesaIngredientes = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const Ingredientes = await collection
      .aggregate([
        {
          $unwind: "$ingredientes",
        },
        {
          $group: {
            _id: "$ingredientes",
            totalHamburguesas: { $sum: 1 },
          },
        },
        {
          $sort: { totalHamburguesas: -1 },
        },
      ])
      .toArray();

    return Ingredientes.length > 0
      ? {
          msg: "Los ingredientes que tiene las hamburguesas son los siguientes",
          data: Ingredientes,
        }
      : {
          msg: "No hay Hamburguesa",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getChefHamburguesas = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const Chefs = await collection
      .aggregate([
        {
          $group: {
            _id: "$chef",
            Numero_Hamburguesas: { $sum: 1 },
          },
        },
        {
          $sort: { Numero_Hamburguesas: -1 },
        },
      ])
      .toArray();

    return Chefs.length > 0
      ? {
          msg: "Los Chefs han preparado un Total de Hamburguesas",
          data: Chefs,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getCategoriaHamburguesas = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const CategoriaHamburguesas = await collection
      .aggregate([
        {
          $group: {
            _id: "$categoria",
            Cantidad: { $sum: 1 },
          },
        },
        {
          $sort: { Cantidad: -1 },
        },
        {
          $limit: 1,
        },
      ])
      .toArray();

    return CategoriaHamburguesas.length > 0
      ? {
          msg: "La Categoria con mayor cantidad de Hamburguesas es la siguiente",
          data: CategoriaHamburguesas,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getChefsCostoIngredientes = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const CostoIngredientes = await collection
      .aggregate([
        { $unwind: "$ingredientes" },
        {
          $lookup: {
            from: "Ingredientes",
            localField: "ingredientes",
            foreignField: "nombre",
            as: "ingredientesData",
          },
        },
        {
          $group: {
            _id: "$chef",
            costoTotal: { $sum: { $sum: "$ingredientesData.precio" } },
          },
        },
      ])
      .toArray();

    return CostoIngredientes.length > 0
      ? {
          msg: "El Costo Total de los ingredientes de todas las Hamburguesas es el Siguiente",
          data: CostoIngredientes,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getHamburguesasCategoria = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const DescripcionCategoria = await collection
      .aggregate([
        {
          $lookup: {
            from: "Categorias",
            localField: "categoria",
            foreignField: "nombre",
            as: "categoriasData",
          },
        },
      ])
      .toArray();

    return DescripcionCategoria.length > 0
      ? {
          msg: "hamburguesas con la Descripción de la Categoria",
          data: DescripcionCategoria,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getHamburguesasMaxIngredientes = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const MaxIngredientes = await collection
      .aggregate([
        { $unwind: "$ingredientes" },
        { $group: { _id: "$chef", ingredientesCount: { $sum: 1 } } },
        { $sort: { ingredientesCount: -1 } },
        { $limit: 1 },
      ])
      .toArray();

    return MaxIngredientes.length > 0
      ? {
          msg: "El Chef que preparo la Hamburguesas con Mayor Número de Ingredientes",
          data: MaxIngredientes,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getPromedioPrecio = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const PromedioPrecio = await collection
      .aggregate([
        { $group: { _id: "$categoria", precio: { $avg: "$precio" } } },
      ])
      .toArray();

    return PromedioPrecio.length > 0
      ? {
          msg: "El Promedio de los Precios de las Hamburguesas",
          data: PromedioPrecio,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getChefsHamburguesaCara = async () => {
  try {
    const db = await ConectDB();
    const collection = db.collection("Hamburguesas");
    const PromedioPrecio = await collection
      .aggregate([
        { $group: { _id: "$chef", hamburguesaCara: { $max: "$precio" } } },
        {
          $lookup: {
            from: "Chefs",
            localField: "_id",
            foreignField: "nombre",
            as: "chefData",
          },
        },
        { $project: { _id: 0, "chefData.nombre": 1, hamburguesaCara: 1 } },
      ])
      .toArray();

    return PromedioPrecio.length > 0
      ? {
          msg: "Chefs y Hamburguesa más cara preparada son las Siguientes",
          data: PromedioPrecio,
        }
      : {
          msg: "No hay Hamburguesas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
