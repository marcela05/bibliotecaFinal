import { Template } from 'meteor/templating';
import { Libros } from '../api/collections.js';
import './registroEstudiantes.html';
import { ReactiveDict } from 'meteor/reactive-dict';
const instance = Template.instance();

Template.registroEstudiantes.onCreated(function registroEstudiantesOnCreated() {
  this.state = new ReactiveDict();

});
  
   Template.registroEstudiantes.helpers({
    userNombre2: function(){
        return instance.state.get('nombre2');
    },

    userEdad: function(){
        return instance.state.get('edad');
    },

    userCodigo: function(){
        return instance.state.get('codigo');
    }
  });


 Template.registroEstudiantes.events({

    'submit  #form-c' (event, instance){
        event.preventDefault();         
        var name = event.target.name.value;
        var edad = event.target.edad.value;
        var codigo = event.target.codigo.value;
        instance.state.set('nombre2', name);
        instance.state.set('edad', edad);
         instance.state.set('codigo', codigo);
            
            var libro = {
                name: name,
                edad: edad,
                codigo: codigo,
            };
        var libroId = instance.state.get('update');
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
Template.registroEstudiantes.onCreated(function registroEstudiantesOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('collections');
});