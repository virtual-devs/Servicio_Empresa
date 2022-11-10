import { Renta } from "../models/Renta.js";

export const getRentas = async (req, res) => {
  try {
    const rentas = await Renta.findAll();
    res.json(rentas);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getFiltroRenta = async (req, res) => {
  try {
    const { asientos, transmision, aire } = req.params;
    const {count, rows} = await Renta.findAndCountAll({
      where:{
        asientos: asientos,
        transmision: transmision,
        aire: aire
      }
    });
    res.json({count, rows});
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getRenta = async (req, res) => {
  try {
    const { id } = req.params;
    const {count, rows} = await Renta.findAndCountAll({
      where:{
        idEmpresa: id
      }
    });
    res.json({count, rows});
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getRentaOne = async (req, res) => {
  try {
    const { id } = req.params;
    const rentaOne = await Renta.findOne({
      where:{
        id: id
      }
    });
    res.json(rentaOne);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const createRenta = async (req, res) => {
  const {
    idEmpresa,
    asientos,
    transmision,
    aire,
    modelo,
    imagen,
    detalles,
    disponible,
    precio,
  } = req.body;

  try {
    const newRenta = await Renta.create({
      idEmpresa,
      asientos,
      transmision,
      aire,
      modelo,
      imagen,
      detalles,
      disponible,
      precio,
    });

    res.json(newRenta);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const updateRentas = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      asientos,
      transmision,
      aire,
      modelo,
      imagen,
      detalles,
      disponible,
      precio,
    } = req.body;

    const renta = await Renta.findByPk(id);
    renta.asientos = asientos
    renta.transmision = transmision
    renta.aire = aire
    renta.modelo = modelo
    renta.imagen = imagen
    renta.detalles = detalles
    renta.disponible = disponible
    renta.precio = precio
    await renta.save()
    res.json(renta);

  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const deleteRentas = async (req, res) => {
  try {
    const { id } = req.params;
    await Renta.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};
