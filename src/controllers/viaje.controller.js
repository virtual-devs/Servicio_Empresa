import { Viaje } from "../models/Viaje.js";
import { Op } from "sequelize";

export const getViajes = async (req, res) => {
  try {
    const viajes = await Viaje.findAll();
    viajes.reverse();
    res.json(viajes);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getViaje = async (req, res) => {
  try {
    const { id } = req.params;
    const { count, rows } = await Viaje.findAndCountAll({
      where: {
        idEmpresa: id,
        asientosDisp: {[Op.gt]: 0}
      },
      
    });
    rows.reverse();
    res.json({ count, rows });
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getViajesDisp = async (req, res) => {
  try {
    const { count, rows } = await Viaje.findAndCountAll({
      where: {
        asientosDisp: {[Op.gt]: 0}
      },
      
    });
    rows.reverse();
    res.json({ count, rows });
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getViajeOne = async (req, res) => {
  try {
    const { id } = req.params;
    const viajeOne = await Viaje.findOne({
      where:{
        id: id
      }
    });
    res.json(viajeOne);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getFiltroViaje = async (req, res) => {
  try {
    const { origen, destino, fecha } = req.params;
    const {count, rows} = await Viaje.findAndCountAll({
      where:{
        origen: origen,
        destino: destino,
        fecha: fecha
      }
    });
    rows.reverse();
    res.json({count, rows});
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const getFiltroViajeFecha = async (req, res) => {
  try {
    const {fecha} = req.params;
    const {count, rows} = await Viaje.findAndCountAll({
      where:{
        fecha: fecha
      }
    });
    rows.reverse();
    res.json({count, rows});
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};


export const createViaje = async (req, res) => {
  const {
    idEmpresa,
    origen,
    destino,
    fecha,
    hora,
    precio,
    asientos,
    asientosDisp,
    imagen
  } = req.body;

  try {
    const newViaje = await Viaje.create({
      idEmpresa,
      origen,
      destino,
      fecha,
      hora,
      precio,
      asientos,
      asientosDisp,
      imagen,
    });

    res.json(newViaje);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};

export const updateViaje = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            origen,
            destino,
            fecha,
            hora,
            precio,
            asientos,
            asientosDisp,
            imagen
        } = req.body;
    
        const viaje = await Viaje.findByPk(id);
        viaje.origen = origen
        viaje.destino = destino
        viaje.fecha = fecha
        viaje.hora = hora
        viaje.precio = precio
        viaje.asientos = asientos
        viaje.asientosDisp = asientosDisp
        viaje.imagen = imagen
        await viaje.save()
        res.json(viaje);
    
      } catch (error) {
        return res.status(500).json({ massage: error.massage });
      }
};

export const updateViajeAsientos = async (req, res) => {
  try {
      const { id } = req.params;
      const { ocupado } = req.params;

      const viaje = await Viaje.findByPk(id);

      viaje.asientosDisp = viaje.asientosDisp - ocupado
      await viaje.save()
      res.json(viaje);
  
    } catch (error) {
      return res.status(500).json({ massage: error.massage });
    }
};


export const deleteViaje = async (req, res) => {
  try {
    const { id } = req.params;
    await Viaje.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ massage: error.massage });
  }
};
