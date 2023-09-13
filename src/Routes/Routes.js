import { Router } from "express";
import IngredientesRoutes from "./Ingredientes.routes.js";
import CategoriasRoutes from "./Categorias.routes.js";
import HamburguesasRoutes from "./Hamburguesa.routes.js";
import ChefsRoutes from "./Chefs.routes.js";

const ROUTER = Router();

export default ROUTER.use("/Ingredientes", IngredientesRoutes)
  .use("/Categorias", CategoriasRoutes)
  .use("/Hamburguesa", HamburguesasRoutes)
  .use("/Chefs", ChefsRoutes);
