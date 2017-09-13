export const make = (name, damage) =>
  (message) => {
    switch (message) {
      case 'name' : return name;
      case 'damage' : return damage;
      default : return 'Undefined method';
    }
  };
