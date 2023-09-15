import { Router } from "express";
import * as ChefsController from "../Controllers/Chefs.js";

const ROUTER = Router();

export default ROUTER.get("/Carnes", ChefsController.GetAllCarnes)
  .get("/ChefC", ChefsController.UpdateChefC)
  .get("/Count", ChefsController.GetCountChefs)
  .get("/CreateChef", ChefsController.CreateChef)
  .get("/ChefsA", ChefsController.GetAllChefsA)
  .get("/Chef-Vegano", ChefsController.DeleteChefsVeg);
