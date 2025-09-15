import bd from "./BD.js"

const Usuario = bd.sequelize.define('login',{
    id:{
        type: bd.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    nome:{
        type: bd.Sequelize.STRING,
        allowNull: false
    },

    email:{
        type: bd.Sequelize.STRING,
        allowNull: false
    },

    senha:{
        type: bd.Sequelize.STRING,
        allowNull: false
    }
})

Usuario.sync();

export default Usuario;