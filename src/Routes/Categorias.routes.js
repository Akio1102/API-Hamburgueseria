import { Router } from "express";
import * as HamburguesaController from "../Controllers/";

const ROUTER = Router();

export default ROUTER.get(
  "/Vegetariana",
  HamburguesaController.GetAllVetegarianos
)
  .get("/ChefB", HamburguesaController.GetAllChefB)
  .get("/Pan-Integral", HamburguesaController.GetAllPanIntegral)
  .put("/New-Ingrediente", HamburguesaController.UpdateAllIngredientes)
  .get("/Sin-Cheddar", HamburguesaController.GetAllSinQuesoCheddar)
  .get("/Precio-Menor", HamburguesaController.GetAllPrecioMenor)
  .delete("/Ingredientes5", HamburguesaController.DeleteAllIngretientes5);
