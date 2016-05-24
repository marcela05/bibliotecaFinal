import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


export const Users = new Mongo.Collection('users');

Meteor.methods({

});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('users', function estudiantesPublication() {
    return Users.find();
  });
}