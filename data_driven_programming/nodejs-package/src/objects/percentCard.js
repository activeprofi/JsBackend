export const make = (name, percent) =>
  (message, health) => {
    switch (message) {
      case 'name' : return name;
      case 'damage' : return health * percent / 100;
      default : return 'Undefined method';
    }
  };
