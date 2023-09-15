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

export const GetAllAsc = async (req, res) => {
  try {
    const allAsc = await HamburguesaService.getAllHamburguesasAsc();
    sendSuccessResponse(res, allAsc);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllTomateLechuga = async (req, res) => {
  try {
    const allTomateLechuga =
      await HamburguesaService.getAllHamburguesasTomate_Lechuga();
    sendSuccessResponse(res, allTomateLechuga);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateHamburguesaGourmet = async (req, res) => {
  try {
    const allGourmet = await HamburguesaService.updateHamburguesaGourmet();
    sendSuccessResponse(res, allGourmet);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllHamburguesaCara = async (req, res) => {
  try {
    const allCara = await HamburguesaService.getHamburguesaCara();
    sendSuccessResponse(res, allCara);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateAllClasica = async (req, res) => {
  try {
    const allClasica = await HamburguesaService.updateAllHamburguesaClasica();
    sendSuccessResponse(res, allClasica);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllHamburguesa7 = async (req, res) => {
  try {
    const allIngredientes7 =
      await HamburguesaService.getHamburguesaIngredientes7();
    sendSuccessResponse(res, allIngredientes7);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllCaraGourmet = async (req, res) => {
  try {
    const allCaraGourmet = await HamburguesaService.getHamburguesaCaraGourmet();
    sendSuccessResponse(res, allCaraGourmet);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllHamburquesaIngredientes = async (req, res) => {
  try {
    const allSinCheddar = await HamburguesaService.getHamburguesaIngredientes();
    sendSuccessResponse(res, allSinCheddar);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllChefHamburquesas = async (req, res) => {
  try {
    const allChefHamburguesas = await HamburguesaService.getChefHamburguesas();
    sendSuccessResponse(res, allChefHamburguesas);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllCategoriaHamburquesa = async (req, res) => {
  try {
    const allCategoriaHamburguesas =
      await HamburguesaService.getCategoriaHamburguesas();
    sendSuccessResponse(res, allCategoriaHamburguesas);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllChefsCostoIngredientes = async (req, res) => {
  try {
    const allCostoIngredientes =
      await HamburguesaService.getChefsCostoIngredientes();
    sendSuccessResponse(res, allCostoIngredientes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllHamburquesaCategoria = async (req, res) => {
  try {
    const allHamburguesaCategoria =
      await HamburguesaService.getHamburguesasCategoria();
    sendSuccessResponse(res, allHamburguesaCategoria);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllHamburquesaMaxIngredientes = async (req, res) => {
  try {
    const allMaxIngredientes =
      await HamburguesaService.getHamburguesasMaxIngredientes();
    sendSuccessResponse(res, allMaxIngredientes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllPromedioPrecio = async (req, res) => {
  try {
    const allPromedioPrecio = await HamburguesaService.getPromedioPrecio();
    sendSuccessResponse(res, allPromedioPrecio);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllChefsHamburquesaCara = async (req, res) => {
  try {
    const allChefsCara = await HamburguesaService.getChefsHamburguesaCara();
    sendSuccessResponse(res, allChefsCara);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
