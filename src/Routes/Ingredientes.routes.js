import { Router } from "express";
import * as IngredientesController from "../Controllers/Ingredientes.js";

const ROUTER = Router();

export default ROUTER.get("/Stock-400", IngredientesController.GetAllStock400)
  .get("/Price", IngredientesController.UpdateAllPrice)
  .get("/Stock-0", IngredientesController.DeleteAllStock0)
  .get("/Caro", IngredientesController.GetIngredienteCaro)
  .get("/Price-Pan", IngredientesController.UpdatePanStock)
  .get("/Clasico", IngredientesController.GetIngredienteClasico);
