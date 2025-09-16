import {Sequelize} from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Importante para Aiven
    }
  },
  logging: console.log // Para ver queries no log
});

export default {sequelize, Sequelize}
