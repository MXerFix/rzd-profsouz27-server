import sequelize from "../db/index";
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  token: { type: DataTypes.STRING, allowNull: false },
})

const Vote = sequelize.define('vote', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // userId: { type: DataTypes.INTEGER },
  // pictureId: { type: DataTypes.INTEGER },
})

const Picture = sequelize.define('picture', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false, allowNull: true },
  author: { type: DataTypes.STRING, allowNull: false },
  author_age: { type: DataTypes.INTEGER, allowNull: false },
  author_gender: { type: DataTypes.STRING, allowNull: false },
  author_by_gender_id: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: true },
})


User.hasMany(Vote, { as: 'vote' })
Vote.belongsTo(User)

Picture.hasMany(Vote, { as: 'votes' })
Vote.belongsTo(Picture)

export default {
  User,
  Vote,
  Picture,
}