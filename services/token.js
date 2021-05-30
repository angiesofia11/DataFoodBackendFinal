const jwt = require('jsonwebtoken');
const models = require('../models');
const usuario = require('../models/usuario');


module.exports = {
    encode: async(usuario)=>{

        const token = jwt.sign({
            id:usuario.id, 
            nombre: usuario.nombre_usuario, 
            correo: usuario.correo, 
            rol: usuario.rol, 
            estado: usuario.estado

        }, 'config.secret', {
            expiresIn: 86400,
        }
        
        );

        return token


    }, 

    decode: async(token)=>{


    }



}