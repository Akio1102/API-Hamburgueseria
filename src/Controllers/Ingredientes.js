import * as IngredientesService from "../Services/Ingredientes.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

// Controllador del Servicio para los Hamburguesas Vegetarianas
export const GetAllStock400 = async (req, res) => {
  try {
    const allStock = await IngredientesService.getAllStock400();
    sendSuccessResponse(res, allStock);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Controllador del Servicio para los Hamburguesas del ChefB
export const UpdateAllPrice = async (req, res) => {
  try {
    const price = await IngredientesService.updateAllPrice();
    sendSuccessResponse(res, price);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteAllStock0 = async (req, res) => {
  try {
    const stock = await IngredientesService.deleteAllStock0();
    sendSuccessResponse(res, stock);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetIngredienteCaro = async (req, res) => {
  try {
    const Ingrediente = await IngredientesService.getIngredienteCaro();
    sendSuccessResponse(res, Ingrediente);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdatePanStock = async (req, res) => {
  try {
    const updatedIngrediente =
      await IngredientesService.updateIngredienteStock();
    sendSuccessResponse(res, updatedIngrediente);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetIngredienteClasico = async (req, res) => {
  try {
    const Clasico = await IngredientesService.getIngredienteClasico();
    sendSuccessResponse(res, Clasico);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetIngredientePrecio = async (req, res) => {
  try {
    const Precio = await IngredientesService.getIngredientePrecio();
    sendSuccessResponse(res, Precio);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOnePan = async (req, res) => {
  try {
    const Pan = await IngredientesService.updateOnePan();
    sendSuccessResponse(res, Pan);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllIngredienteAlfabetico = async (req, res) => {
  try {
    const IngredientesAlfa =
      await IngredientesService.getAllIngredienteAlfabetico();
    sendSuccessResponse(res, IngredientesAlfa);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllIngredientesNinHamburguesa = async (req, res) => {
  try {
    const IngredientesNin =
      await IngredientesService.getAllIngredientesNinHamburguesa();
    sendSuccessResponse(res, IngredientesNin);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
