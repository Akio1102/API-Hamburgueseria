import * as CategoriasService from "../Services/Categorias.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

// Controllador del Servicio para los Hamburguesas Vegetarianas
export const GetAllCategorias = async (req, res) => {
  try {
    const allCategorias = await CategoriasService.getAllCategorias();
    sendSuccessResponse(res, allCategorias);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Controllador del Servicio para los Hamburguesas del ChefB
export const GetAllCategoriasGourmet = async (req, res) => {
  try {
    const allGourmet = await CategoriasService.getAllCategoriasGourmet();
    sendSuccessResponse(res, allGourmet);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
