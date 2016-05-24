import { Template } from 'meteor/templating';
import { Users } from '../api/estudiantes.js';
import { Libros } from '../api/libros.js';

import './actualizar.html';

Template.actualizar.helpers({

       updateEstudiante: function () {
        return Session.get('update');
    },
        updateLibro: function () {
        return Session.get('update2');
    }
 });
Template.actualizar.events({

        'click .updateLibro': function(event, template){
            event.preventDefault();
            var userId = Session.get('update');
            console.log("Nuevooooo user", userId);
            console.log("name user", name);
            var name= document.forms["form-a"].elements[0].value;
            var ano = document.forms["form-a"].elements[1].value;
            var autor = document.forms["form-a"].elements[2].value;
            var lsbn = document.forms["form-a"].elements[3].value;
            var estado = Session.get('estado');

            var user = {
                name: name,
                ano: ano,
                lsbn: lsbn,
                autor: autor,
                estado: estado
            };
            if (userId != undefined){
                Users.update({_id: userId}, user);
                console.log("Nuevooooo user", user);
            }
        },      
        'click .updateEstudiante': function(event, template){
            event.preventDefault();
            var libroId = Session.get('update2');
            console.log("Nuevooooo id  est", libroId);
            var name= document.forms["form-c"].elements[0].value;
            var edad = document.forms["form-c"].elements[1].value;
            var codigo = document.forms["form-c"].elements[2].value;

            var libro = {
                name: name,
                edad: edad,
                codigo: codigo
            };
             if (libroId != undefined){
                Libros.update({_id: libroId}, libro);
                console.log("Nuevooooo libro", libro);
            }
        },
    });
