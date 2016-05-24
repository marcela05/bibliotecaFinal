import { Template } from 'meteor/templating';
import { Users } from '../api/estudiantes.js';
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
            
            
            var estudiante = {
                name: name,
                edad: edad,
                codigo: codigo,
            };
             var estudianteId = instance.state.get('update');
            if (estudianteId != undefined){
                Users.update({_id: estudianteId}, estudiante);
            } else {                
                Users.insert(estudiante);                
                console.log("Este es el estudiante: ", estudiante);

            }
            //console.log("Este es el estudiante: ", estudiante);
            event.target.name.value = '';
            event.target.edad.value = '';
            event.target.codigo.value = '';
    },
    });
Template.registroEstudiantes.onCreated(function registroEstudiantesOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('estudiantes');
});