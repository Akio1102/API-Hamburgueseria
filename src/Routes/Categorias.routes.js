import { Router } from "express";
import * as CategoriasController from "../Controllers/Categorias.js";

const ROUTER = Router();

export default ROUTER.get("/", CategoriasController.GetAllCategorias).get(
  "/Gourmet",
  CategoriasController.GetAllCategoriasGourmet
);
