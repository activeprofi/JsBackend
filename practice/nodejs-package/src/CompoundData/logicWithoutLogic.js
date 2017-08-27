const If = condition => a => b => condition(a, b);

const True = (a, b) => a;

const False = (a, b) => b;

export { If, True, False };
