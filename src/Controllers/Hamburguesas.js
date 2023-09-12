import * as HamburguesaService from "../Services/Hamburguesas.service.js";
import { handleResponse, sendErrorResponse } from "../Helpers/SendResponse.js";

// Controllador del Servicio para los Hamburguesas Vegetarianas
export const GetAllVetegarianos = async (req, res) => {
  try {
    const allVegetarianos = await HamburguesaService.getAllVegetarianos();
    handleResponse(res, allVegetarianos);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Controllador del Servicio para los Hamburguesas del ChefB
export const GetAllChefB = async (req, res) => {
  try {
    const allChefB = await HamburguesaService.getAllChefB();
    handleResponse(res, allChefB);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllPanIntegral = async (req, res) => {
  try {
    const allIntegral = await HamburguesaService.getAllHamburguesaIntegral();
    handleResponse(res, allIntegral);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
