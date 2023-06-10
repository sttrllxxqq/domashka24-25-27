// 24

let users = [
  {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
];

let activeUsers = users.filter(function(user) {
  return user.isActive;
});

let filteredUsers = activeUsers.filter(function(user) {
  let balance = parseFloat(user.balance.replace('$', '').replace(',', ''));
  return balance > 2000;
});

let phoneNumbers = filteredUsers.map(function(user) {
  return user.phone;
});

console.log(phoneNumbers);



// 25

function convert(obj) {
  const newObj = {};

  function flatten(obj, prefix = '') {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        flatten(obj[key], prefix + key + '.');
      } else {
        newObj[prefix + key] = obj[key];
      }
    }
  }

  flatten(obj);
  return newObj;
}

const obj = {
  x: 10,
  y: 20,
  inner: { x: 20, z: 30 },
  foo2: { k: 23, p: 13 }
};

const newObj = convert(obj);
console.log(newObj);

// 27

function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.getInfo = function() {
  console.log(`Name: ${this.name}`);
  console.log(`Age: ${this.age}`);
};

function Car(brand, model, year, licensePlate, owner) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.licensePlate = licensePlate;
  this.owner = null;

  if (owner.age >= 18) {
    this.owner = owner;
  } else {
    console.log("The owner must be at least 18 years old.");
  }
}

Car.prototype.getInfo = function() {
  console.log(`Brand: ${this.brand}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`License Plate: ${this.licensePlate}`);

  if (this.owner) {
    console.log("Owner:");
    this.owner.getInfo();
  }
};

const person1 = new Human("John Doe", 25);
const person2 = new Human("Jane Smith", 17);

const car1 = new Car("Toyota", "Corolla", 2020, "AB123CD", person1);
const car2 = new Car("Honda", "Civic", 2018, "EF456GH", person2);

car1.getInfo();
console.log("-----------------------");
car2.getInfo();
