import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Constante para el uso de la Variable de Entorno del PUERTO de ejecucción del Servidor
export const ENVPORT = {
  PORT: process.env.PORT,
};

// Constante para el uso de la Variable de Entorno de Conexción para MONGODB
export const MONGO_URL = {
  MONGO_URL: process.env.MONGO_URL,
};

// Middlewares Globales para el uso del Servidor
export const Global = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
};
