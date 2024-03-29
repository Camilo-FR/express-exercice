export const listErrors = (err) => {
  let errors = {};
  err.errors &&
    Object.keys(err.errors).map((key) => {
      errors = { ...errors, [key]: err.errors[key].message }; // ...errors : spread operator
    });

  err.code === 11000 &&
    Object.keys(err.keyPattern).map((key) => {
      errors = { ...errors, [key]: `${key} existe déjà` };
    });

  return errors;
};
