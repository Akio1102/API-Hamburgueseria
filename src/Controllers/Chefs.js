import * as ChefsService from "../Services/Chefs.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

// Controllador del Servicio para los Hamburguesas Vegetarianas
export const GetAllCarnes = async (req, res) => {
  try {
    const ChefsCarnes = await ChefsService.getAllChefsCarnes();
    sendSuccessResponse(res, ChefsCarnes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Controllador del Servicio para los Hamburguesas del ChefB
export const UpdateChefC = async (req, res) => {
  try {
    const especialidad = await ChefsService.updateChefC();
    sendSuccessResponse(res, especialidad);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetCountChefs = async (req, res) => {
  try {
    const CountChef = await ChefsService.getAllChefsCount();
    sendSuccessResponse(res, CountChef);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateChef = async (req, res) => {
  try {
    const CreateChef = await ChefsService.createChef();
    sendSuccessResponse(res, CreateChef);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllChefsA = async (req, res) => {
  try {
    const AllChefsA = await ChefsService.getAllChefsA();
    sendSuccessResponse(res, AllChefsA);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteChefsVeg = async (req, res) => {
  try {
    const ChefsVeg = await ChefsService.deleteAllChecfsVeg();
    sendSuccessResponse(res, ChefsVeg);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
