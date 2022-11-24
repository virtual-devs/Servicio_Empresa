import axios from "axios";

export const verifyToken = async (req, res, next) => {
  try {
    let url = "http://localhost:4000/verifyA";

    let config = {
      headers: {
        token: req.headers["token"]
      },
    };

    let data = {
      x: "x",
    };

    const respuesta = await axios.post(url, data, config)

    if(respuesta.status == 200) 
        next();
        
  } catch (error) {
    return res.status(401).json({ massage: "Unauthorized" });
  }
};
