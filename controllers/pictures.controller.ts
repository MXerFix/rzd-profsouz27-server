import { NextFunction, Request, Response } from "express";
import models from "../models";
import ApiError from "../error";


class PicturesController {
  

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const pictures = await models.Picture.findAll({
        include: [
          { model: models.Vote, as: 'votes' }
        ]
      })
      if (pictures.length && pictures) {
        return res.json({message: "Рисунки успешно загружены", pictures})
      } else {
        next(ApiError.badGateway('Ошибка загрузки, рисунки не найдены!'))
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }

}

export default new PicturesController()
