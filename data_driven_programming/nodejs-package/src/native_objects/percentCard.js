export const make = (name, percent) => ({
  name,
  damage: health => Math.round(health * percent / 100),
});
