import { HistorialR } from "../models/HistorialRenta.js";
import { HistorialV } from "../models/HistorialViaje.js";

export const getHistorialR = async (req, res) => {
  try {
    const historialR = await HistorialR.findAll();
    res.json(historialR);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getHistorialV = async (req, res) => {
  try {
    const historialV = await HistorialV.findAll();
    res.json(historialV);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getHistorialRE = async (req, res) => {
  try {
    const { id } = req.params;
    const { count, rows } = await HistorialR.findAndCountAll({
      where: {
        idEmpresa: id,
      },
    });
    res.json({ count, rows });
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getHistorialVE = async (req, res) => {
  try {
    const { id } = req.params;
    const { count, rows } = await HistorialV.findAndCountAll({
      where: {
        idEmpresa: id,
      },
    });
    res.json({ count, rows });
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const createHistorialR = async (req, res) => {
  const { idEmpresa, idRenta, idUser, fecha, dias, total } = req.body;

  try {
    const newHistorialR = await HistorialR.create({
      idEmpresa,
      idRenta,
      idUser,
      fecha,
      dias,
      total,
    });

    res.json(newHistorialR);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const createHistorialV = async (req, res) => {
  const { idEmpresa, idViaje, idUser, fecha, hora } = req.body;

  try {
    const newHistorialV = await HistorialV.create({
      idEmpresa,
      idViaje,
      idUser,
      fecha,
      hora,
    });

    res.json(newHistorialV);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};
