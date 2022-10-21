require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person",personSchema) ;

// let Person;

const createAndSavePerson = (done) => {
  // done(null /*, data*/);
  
  var jd = new Person({name: "John Doe", age: 32, favoriteFoods: ["fruits", "vegetables", "eggs"]}) ;

  jd.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
  
};

var arrayOfPeople = [
  {name: "Manraj", age: 32, favoriteFoods: ["Dosa"]},
  {name: "Rahul", age: 21, favoriteFoods: ["Idli"]},
  {name: "Rakesh", age: 12, favoriteFoods: ["Rava"]}
];


const createManyPeople = (arrayOfPeople, done) => {

  Person.create(arrayOfPeople,function(err,people){
    if(err) return console.log(err) ;
    done(null,people) ;
  });
  
};

const findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {

Person.findOne({favoriteFoods: food}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
  
};

const findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

 
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
   
    person.favoriteFoods.push(foodToAdd);


    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
};

const findAndUpdate = function(personName, done){
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};

const removeById = (personId, done) => {

  Person.findByIdAndRemove(personId,function(err,removedDoc){
    if(err) return console.log(err) ;
    done(null,removedDoc)  ;
  }) ;
  
  
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({name: nameToRemove},function(err,response){
  if(err) return console.log(err) ;
    done(null,response) ;
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  
  Person.find({favoriteFoods:foodToSearch})
  .sort({name:1})
  .limit(2)
  .select({age:0})
  .exec(function(error,people){
    done(error,people) ;
  });
  
  
  
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
