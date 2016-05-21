import { Template } from 'meteor/templating';
import { Users } from '../api/collections.js';
import { Libros } from '../api/collections.js';

import { ReactiveDict } from 'meteor/reactive-dict';

import './listar.html';
  

   Template.listar.helpers({
    userNombre2: function(){
        return Session.get('nombre2');
    },

    userEdad: function(){
        return Session.get('edad');
    },

    userCodigo: function(){
        return Session.get('codigo');
    }
  });

 Template.listar.events({

    'submit #form-c': function(event, template){
        event.preventDefault();         
        var name = event.target.name.value;
        var edad = event.target.edad.value;
        var codigo = event.target.codigo.value;
        Session.set('nombre2', name);
        Session.set('edad', edad);
        Session.set('codigo', codigo);
            
            var libro = {
                name: name,
                edad: edad,
                codigo: codigo,
            };
        var libroId = Session.get('update');
            if (libroId != undefined){
                Libros.update({_id: libroId}, libro);
            } else {
                Libros.insert(libro);
                console.log("Este es el libro: ", libro);

            }
        console.log("Este es el estudiante: ", libro);
            event.target.name.value = '';
            event.target.edad.value = '';
    },
    });
