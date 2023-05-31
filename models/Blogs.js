const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model {}

Blogs.init(
  { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogs',
  }


);

module.exports = Blogs;

// class Blogs extends Model {}

// Blogs.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'user',
//         key: 'id'
//       }
//     },
//     created_at: {
//       field: 'created_at',
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     updated_at: {
//       field: 'updated_at',
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'blog',
//   }
// );

// module.exports = Blogs;
