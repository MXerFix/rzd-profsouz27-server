import { NextFunction, Request, Response } from "express";
import models from "../models";


class TokenController {
  

  async check(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.body
      const user = await models.User.findOne({where: {token: token}})
      if (user) {
        console.log(user)
        return res.json({status: true, user})
      } else {
        return res.json({status: false, message: "Пользователь с таким идентификатором не найден!"})
      }
    } catch (error) {
      console.log(error)
    }
  }

}

export default new TokenController()
