import { Template } from 'meteor/templating';
import { Users } from '../api/collections.js';
import { Libros } from '../api/collections.js';

import { ReactiveDict } from 'meteor/reactive-dict';
 
import './registroEstudiantes.html';


 Template.registroEstudiantes.helpers({
    userNombre: function(){
        return Session.get('nombre');
    },

    userAno: function(){
        return Session.get('ano');
    },

    userAutor: function(){
        return Session.get('autor');
    },
    userLsbn: function(){
        return Session.get('lsbn');
    },
    userEstado: function () {
        return Session.get('estado');
    },

  });

 Template.registroEstudiantes.events({

    'submit #form-a': function(event, template){
        event.preventDefault();        
        
        var name = event.target.name.value;
        var ano = event.target.ano.value;
        var lsbn = event.target.lsbn.value;
        var autor = event.target.autor.value;
        var estado = Session.get('estado');

        if (estado === undefined) {
            alert("Selecciona algún estado");
        } else {
            Session.set('name', name);
            Session.set('ano', ano);
            Session.set('lsbn', lsbn);
            Session.set('autor', autor);
            Session.set('estado', estado);
            
            var user = {
                name: name,
                ano: ano,
                lsbn: lsbn,
                autor: autor,
                estado: estado
            };
             Users.insert(user);
            // var userId = Session.get('update');
            // if (userId != undefined){
            //     Users.update({_id: userId}, user);
            // } else {
               
            //     console.log("Este es el libro: ", user);

            // }

            event.target.name.value = '';
            event.target.autor.value = '';
        }
    },

    'change select': function(evt) {
        evt.preventDefault();
        var newValue = $(evt.target).val();

        Session.set('estado', newValue);

        console.log("El estado es: ", newValue);
        if (newValue === 'Disponible') {
            //alert('Es mujer');
        } else {
            
        }        
    },

    'blur #comment': function(event) {
        event.preventDefault();
        var _comment = $('[name="comment"]').val();
        console.log("blur comment", _comment);
    },

    'blur #name': function(event) {
        event.preventDefault();
        var _name = $('[name="name"]').val();
        console.log("blur name", _name);
    },

    'keyup #comment': function () {
        var text_max = 120;
        var text_length = $('#comment').val().length;
        var text_remaining = 120;
        if (text_remaining > 0) {
            text_remaining = text_max - text_length;
            $('#comment_feedback').html(text_remaining + 
                ' characters remaining...');        
        } 
    },

    'submit #form-b': function(event, template){
        event.preventDefault();
        //var _name = event.target.fupInput.value
        var _name = $('[name="fupInput"]').val();
        console.log("submit b: ", _name);
    }
  });
