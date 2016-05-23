import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


export const Users = new Mongo.Collection('users');
export const Libros = new Mongo.Collection('libros');

Meteor.methods({
   'Libros.insert'(nombre, ano, isbn, autor) {
   
    Users.insert({
    nombre,
    ano,
    isbn,
    autor,
    });
  },
});

