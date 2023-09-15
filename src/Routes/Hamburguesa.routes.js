import { Router } from "express";
import * as HamburguesaController from "../Controllers/Hamburguesas.js";

const ROUTER = Router();

export default ROUTER.get(
  "/Vegetariana",
  HamburguesaController.GetAllVetegarianos
)
  .get("/ChefB", HamburguesaController.GetAllChefB)
  .get("/New-Ingrediente", HamburguesaController.UpdateClasica)
  .get("/Pan-Integral", HamburguesaController.GetAllPanIntegral)
  .get("/Sin-Cheddar", HamburguesaController.GetAllSinQuesoCheddar)
  .get("/Precio-Menor", HamburguesaController.GetAllPrecioMenor)
  .get("/Ingredientes5", HamburguesaController.DeleteAllIngretientes5)
  .get("/Precio-Asc", HamburguesaController.GetAllAsc)
  .get("/Tomate-Lechuga", HamburguesaController.GetAllTomateLechuga)
  .get("/Precio-Gourmet", HamburguesaController.UpdateHamburguesaGourmet)
  .get("/Cara", HamburguesaController.GetAllHamburguesaCara)
  .get("/Clasica", HamburguesaController.UpdateAllClasica)
  .get("/Ingredientes7", HamburguesaController.GetAllHamburguesa7)
  .get("/Cara-Gourmet", HamburguesaController.GetAllCaraGourmet)
  .get("/Ingredientes", HamburguesaController.GetAllHamburquesaIngredientes)
  .get("/Total", HamburguesaController.GetAllChefHamburquesas)
  .get("/Categoria-Cantidad", HamburguesaController.GetAllCategoriaHamburquesa)
  .get("/Costo-Total", HamburguesaController.GetAllChefsCostoIngredientes)
  .get(
    "/Descripcion-Categoria",
    HamburguesaController.GetAllHamburquesaCategoria
  )
  .get("/Max", HamburguesaController.GetAllHamburquesaMaxIngredientes)
  .get("/Precio-Promedio", HamburguesaController.GetAllPromedioPrecio)
  .get("/Chefs-Cara", HamburguesaController.GetAllChefsHamburquesaCara);
