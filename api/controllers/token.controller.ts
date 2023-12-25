import { NextFunction, Request, Response } from "express";
import models from "../models";


class TokenController {
  

  async check(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.body
      const user = await models.User.findOne({where: {token: token}})
      if (user) {
        return res.json(true)
      } else {
        return res.json(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

}

export default new TokenController()
