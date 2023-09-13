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

export const UpdateClasica = async (req, res) => {
  try {
    const updateClasica = await HamburguesaService.updateHamburguesaClasica();
    sendSuccessResponse(res, updateClasica);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllSinQuesoCheddar = async (req, res) => {
  try {
    const allSinCheddar =
      await HamburguesaService.getAllHamburguesassinQuesoCheddar();
    sendSuccessResponse(res, allSinCheddar);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllPrecioMenor = async (req, res) => {
  try {
    const allPrecioMenor =
      await HamburguesaService.getAllHamburguesasPrecioMenor();
    sendSuccessResponse(res, allPrecioMenor);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteAllIngretientes5 = async (req, res) => {
  try {
    const deleteIngrediente = await HamburguesaService.deleteIngretientes5();
    sendSuccessResponse(res, deleteIngrediente);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
