import { Template } from 'meteor/templating';
//import { Users } from '../api/collections.js';
import { Libros } from '../api/libros.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './registroLibros.html';
//import '../api/collections.js';
const instance = Template.instance();

Template.registroLibros.onCreated(function registroLibrosOnCreated() {
  this.state = new ReactiveDict();

});
  
  Template.registroLibros.helpers({
    userNombre: function (){
        return instance.state.get('name');
    },

    userAno: function (){
        return instance.state.get('ano');
    },

    userAutor: function (){
        return  instance.state.get('autor');
    },
    userLsbn: function (){
        return  instance.state.get('lsbn');
    },
    userEstado: function () {
        return  instance.state.get('estado');
    },

  });
  Template.registroLibros.events({
    'submit  #form-a' (event, instance) {
        event.preventDefault();             

        if (estado === undefined) {
            alert("Selecciona algún estado");
        } else {
            instance.state.set('name',  event.target.name.value);
            instance.state.set('ano', event.target.ano.value);
            instance.state.set('lsbn',event.target.lsbn.value);
            instance.state.set('autor',event.target.autor.value);
            instance.state.set('estado',event.target.estado.value);
            
            const name1=   instance.state.get('name');
            const ano1=    instance.state.get('ano');
            const isbn1=   instance.state.get('lsbn');
            const autor1=  instance.state.get('autor');
            const estado1= instance.state.get('estado');

            console.log("-name",instance.state.get('name'));
            console.log("-ano",instance.state.get('ano'));
            console.log("-autor",instance.state.get('autor'));
            console.log("-isbn",instance.state.get('lsbn'));
            console.log("-estado",instance.state.get('estado'));
            // var libro = {
            //     name: name1,
            //     ano: ano1,
            //     isbn: isbn1,
            //     autor: autor1
            // };
            // Users.insert(libro);
            // Users.insert(function (name, ano, isbn, autor) {
            //    name= name1,
            //     ano=ano1,
            //     isbn=isbn1,
            //     autor=autor1
            // });
           // nombre, ano, autor, isbn, estado
            Meteor.call('libros.insert', name1, ano1, autor1, isbn1, estado1);
            //     instance.state.get('name'),
            //     instance.state.get('ano'),
            //     instance.state.get('lsbn'),
            //     instance.state.get('autor'),
            //     instance.state.get('estado'));
            event.target.name.value = '';
            event.target.ano.value ='';
            event.target.lsbn.value ='';
            event.target.autor.value = '';
        }
    },

    'change select' (event, instance) {
        event.preventDefault();
        instance.state.set('estado',  $(event.target).val());       
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

  });
Template.registroLibros.onCreated(function registroLibrosOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('libros');
});