import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


export const Users = new Mongo.Collection('users');
export const Libros = new Mongo.Collection('libros');
Meteor.methods({
   'libros.insert'(nombre, ano, autor, isbn, estado) {
    Libros.insert({
    nombre:nombre,
    ano:ano,    
    autor:autor,
    isbn:isbn,
    estado:estado
    });
  },
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('users', function tasksPublication() {
    return Users.find();
  });
}