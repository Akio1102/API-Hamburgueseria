import { Router } from "express";
import * as IngredientesController from "../Controllers/Ingredientes.js";

const ROUTER = Router();

export default ROUTER.get("/Stock-400", IngredientesController.GetAllStock400)
  .get("/Price", IngredientesController.UpdateAllPrice)
  .get("/Stock-0", IngredientesController.DeleteAllStock0)
  .get("/Caro", IngredientesController.GetIngredienteCaro)
  .get("/Stock-100", IngredientesController.UpdatePanStock)
  .get("/Clasico", IngredientesController.GetIngredienteClasico)

  .get("/Precio-2-5", IngredientesController.GetIngredientePrecio)
  .get("/UpdatePan", IngredientesController.UpdateOnePan)
  .get("/Asc", IngredientesController.GetAllIngredienteAlfabetico)
  .get(
    "/No-Hambusquesas",
    IngredientesController.GetAllIngredientesNinHamburguesa
  );
