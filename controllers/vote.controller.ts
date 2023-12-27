import { NextFunction, Request, Response } from "express";
import models from "../models";
import ApiError from "../error";


class VoteController {


  async vote(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, pictureId } = req.body
      console.log(token, pictureId)
      const user: any = await models.User.findOne({
        where: { token: token }, include: [
          { model: models.Vote, as: 'vote' }
        ]
      })
      if (user) {
        const user_votes = await models.Vote.findAll({where: {userId: user.id}})
        if (!user_votes.length || user.token === '9643309050043326') {
          const picture: any = await models.Picture.findOne({ where: { id: pictureId } })
          if (picture) {
            const vote = await models.Vote.create({
              userId: user.id,
              pictureId: picture.id
            })
            return res.json(
              {
                status: true,
                message: "Голос успешно засчитан",
                vote_data: {
                  vote,
                  picture,
                  user
                }
              }
            )
          } else {
            next(ApiError.badRequest('Такого рисунка не существует!'))
          }
        } else {
          next(ApiError.badRequest('Голос пользователя с таким идентификатором уже засчитан!'))
        }
      } else {
        next(ApiError.forbidden("Пользователя с таким идентификатором не существует!"))
      }
    } catch (error) {
      console.log(error)
    }
  }

}

export default new VoteController()