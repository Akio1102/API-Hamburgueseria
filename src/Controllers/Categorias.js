import * as HamburguesaService from "../Services/Hamburguesas.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

// Controllador del Servicio para los Hamburguesas Vegetarianas
export const GetAllVetegarianos = async (req, res) => {
  try {
    const allVegetarianos = await HamburguesaService.getAllVegetarianos();
    sendSuccessResponse(res, allVegetarianos);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Controllador del Servicio para los Hamburguesas del ChefB
export const GetAllChefB = async (req, res) => {
  try {
    const allChefB = await HamburguesaService.getAllChefB();
    sendSuccessResponse(res, allChefB);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllPanIntegral = async (req, res) => {
  try {
    const allIntegral = await HamburguesaService.getAllHamburguesaIntegral();
    sendSuccessResponse(res, allIntegral);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateAllIngredientes = async (req, res) => {
  try {
    const allIntegral = await HamburguesaService.updateHamburguesaIngrediente();
    sendSuccessResponse(res, allIntegral);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllSinQuesoCheddar = async (req, res) => {
  try {
    const allIntegral =
      await HamburguesaService.getAllHamburguesassinQuesoCheddar();
    sendSuccessResponse(res, allIntegral);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllPrecioMenor = async (req, res) => {
  try {
    const allIntegral =
      await HamburguesaService.getAllHamburguesasPrecioMenor();
    sendSuccessResponse(res, allIntegral);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteAllIngretientes5 = async (req, res) => {
  try {
    const allIntegral = await HamburguesaService.deleteIngretientes5();
    sendSuccessResponse(res, allIntegral);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
