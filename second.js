class structure{
  constructor() {
    this.isStructure = true;
    this.isManmade = true;
  }
}

class building extends structure {
  constructor(name, stories, address) {
    super();
    this.name = name;
    this.stories = stories;
    this.address = address;
    this.guests = [];
  }

  info () {
    console.log('name:', this.name,
    '| stories:' , this.stories,
    '| address:', this.address,
    );
  }

  get needElevator() {
    return this.stories > 10;
  }

  set guest(nameOfGuest) {
    this.guest.push(nameOfGuest);
  }
}

class Restaurant extends building {
  constructor(name,stories,address,cuisine) {
    super (name, stories, address);
    this.cuisine = cuisine;
  }

  info () {
    super.info();
    console.log(`we serve ${this.cuisine} cuisine`);
  }
}

const kaiju = new Restaurant(
  'kaiju',
  2,
  'SF, CA',
  'Japanese'
);

console.log('kaiju', kaiju);