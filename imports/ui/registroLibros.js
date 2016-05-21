import { Template } from 'meteor/templating';
import { Users } from '../api/collections.js';
import { Libros } from '../api/collections.js';


import './registroLibros.html';
  
  Template.registroLibros.helpers({
    users: function () {
        return Users.find().fetch();
    },
    libros: function () {
        return Libros.find().fetch();
    },
    userListarLibros: function () {
        return Session.get('listarLibro');
    },
    userListarEstudiantes: function () {
        return Session.get('listarEstudiante');
    },
  });

    Template.registroLibros.events({
    'click .delete': function (){
        Users.remove(this._id);
        Libros.remove(this._id)
    },

    'click .user': function (){
        console.log("User: ", this);
        Session.set('nombre', this.name);
        Session.set('ano', this.ano);
        Session.set('autor', this.autor);
        Session.set('lsbn', this.lsbn);
        Session.set('estado', this.estado);
        Session.set('update', this._id);
    },
    'click .libro': function (){
        console.log("Libro: ", this);
        Session.set('nombre2', this.name);
        Session.set('edad', this.edad);
        Session.set('codigo', this.codigo);
        Session.set('update2', this._id);
    },
    'click .listarLibro': function(event, template){
        event.preventDefault();
            Session.set('listarLibro', true);
            Session.set('listarEstudiante', false);
            console.log("submit lib bbbbbbb: ", Session.get('listarLibro'));
    },
    'click .listarEstudiante': function(event, template){
        event.preventDefault();
       Session.set('listarLibro', false);
        Session.set('listarEstudiante', true);
        console.log("submit est bbbbbbb: ", 2);
    },

  });
