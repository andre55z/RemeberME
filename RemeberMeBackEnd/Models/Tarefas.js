import bd from "./BD.js"
import Usuario from "./Users.js"

const Tarefas = bd.sequelize.define('tarefa', {
    id: {
        type: bd.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: bd.Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: bd.Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: bd.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    feito: {  
        type: bd.Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

Usuario.hasMany(Tarefas, {foreignKey: 'userId'});
Tarefas.belongsTo(Usuario, {foreignKey: 'userId'});

bd.sequelize.sync({ alter: true });

Tarefas.sync();

export default Tarefas;