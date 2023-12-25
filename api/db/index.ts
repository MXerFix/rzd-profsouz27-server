import { Sequelize } from "sequelize";


const IS_DEV = process.env.NODE_ENV === "dev";


const sequelizeInit = () => {
  if (IS_DEV) {
    return new Sequelize(
      // process.env.DB_NAME,
      // process.env.DB_USER,
      // process.env.DB_PASSWORD,
      "rzd_profsouz_local",
      "root",
      "Maks2347",
      {
        dialect: "mysql",
        // dialectModule: require('mysql2'),
        host: "localhost",
        port: 3306,
      }
    )
  } else {
    return new Sequelize(
      // process.env.DB_NAME,
      // process.env.DB_USER,
      // process.env.DB_PASSWORD,
      'a0729726_vote2024rcdm',
      'a0729726_vote2024rcdm',
      'vYoRLyzt',
      {
        dialect: "mysql",
        // dialectModule: require('mysql2'),
        host: "rcdm-dorprofzhel27.ru",
        port: 3306,
      }
    );
  }
}

// IS_DEV
//   ? sequelize = new Sequelize(
//     // process.env.DB_NAME,
//     // process.env.DB_USER,
//     // process.env.DB_PASSWORD,
//     "rzd_profsouz_local",
//     "root",
//     "Maks2347",
//     {
//       dialect: "mysql",
//       // dialectModule: require('mysql2'),
//       host: "localhost",
//       port: 3306,
//     }
//   )
//   : sequelize = new Sequelize(
//     // process.env.DB_NAME,
//     // process.env.DB_USER,
//     // process.env.DB_PASSWORD,
//     // 'syncsound_local',
//     // 'root',
//     // 'Maks2347',
//     {
//       dialect: "mysql",
//       // dialectModule: require('mysql2'),
//       host: "rcdm-dorprofzhel.ru",
//       port: 3306,
//     }
//   );

  export default sequelizeInit()
