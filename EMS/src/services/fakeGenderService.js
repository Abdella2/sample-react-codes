const genders = [
  {
    _id: '654131a7145f835973cf5e1d',
    name: 'Male'
  },
  {
    _id: '654131a7145f835973cf5e1',
    name: 'Female'
  }
];

export function getGenders() {
  return genders;
}

export function getGender(id) {
  return genders.find((g) => g._id === id);
}
