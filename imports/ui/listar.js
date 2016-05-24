import { Template } from 'meteor/templating';
import { Users } from '../api/estudiantes.js';
import { Libros } from '../api/libros.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './listar.html';
import './registroLibros.js';
import './registroEstudiantes.js';
const instance = Template.instance();

Template.listar.onCreated(function listarOnCreated() {
  this.state = new ReactiveDict();

});

  Template.listar.helpers({
    users: function () {
        return Users.find().fetch();
    },
    libros: function () {
        return Libros.find().fetch();
    },
    userListarLibros: function () {
        return instance.state.get('listarLibro');
    },
    userListarEstudiantes: function () {
        return instance.state.get('listarEstudiante');
    },
  });

 Template.listar.events({

    'click .delete': function (){
        Users.remove(this._id);
        Libros.remove(this._id)
    },

    'click .user': function (){
        console.log("User: ", this);
       instance.state.set('nombre', this.name);
      instance.state.set('ano', this.ano);
       instance.state.set('autor', this.autor);
        instance.state.set('lsbn', this.lsbn);
       instance.state.set('estado', this.estado);
        instance.state.set('update', this._id);
    },
    'click .libro': function (){
        console.log("Libro: ", this);
        instance.state.set('nombre2', this.name);
        instance.state.set('edad', this.edad);
        instance.state.set('codigo', this.codigo);
        instance.state.set('update2', this._id);
    },
    'click .listarLibro'(event, instance){
        event.preventDefault();
        instance.state.set('listarLibro', true);
        instance.state.set('listarEstudiante', false);
        console.log("submit lib bbbbbbb: ", instance.state.get('listarLibro'));
    },
    'click .listarEstudiante'(event, instance){
        event.preventDefault();
      instance.state.set('listarLibro', false);
      instance.state.set('listarEstudiante', true);
        console.log("submit est bbbbbbb: ", 2);
    },

  });
Template.listar.onCreated(function listarOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('libros');
  Meteor.subscribe('estduantes');
});