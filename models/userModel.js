// data model
/*
{
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active"
}
*/

let userArray = [];
let nextId = 1;

function getAll() {
  return userArray;
};

function addOne(name,email,password,phone_number,gender,date_of_birth,membership_status) {
    if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
        return false;
    }
    // Create a new user object with the provided details
    const newUser = {
        id: nextId++,
        name: name,
        email: email,
        password: password,
        phone_number: phone_number,
        gender: gender,
        date_of_birth: date_of_birth,
        membership_status: membership_status
    };

    // Add the new user to the userArray
    userArray.push(newUser);
    return newUser;
};

function findById(id) {
  const user = userArray.find((user) => user.id === Number(id));
  if (user) {
    return user;
  } else return false;
};

function updateOneById(id, updatedData) {
  const user = findById(id);
  if (user) {
    if (updatedData.name) {
        user.name = updatedData.name;
      }
      if (updatedData.email) {
        user.email = updatedData.email;
      }
      if (updatedData.password) {
        user.password = updatedData.password;
      }
      if (updatedData.phone_number) {
        user.phone_number = updatedData.phone_number;
      }
      if (updatedData.gender) {
        user.gender = updatedData.gender;
      }
      if (updatedData.date_of_birth) {
        user.date_of_birth = updatedData.date_of_birth;
      }
      if (updatedData.membership_status) {
        user.membership_status = updatedData.membership_status;
      }
    return user;
  }
  return false;
};

function deleteOneById(id) {
  const user = findById(id);
  if (user) {
    const initialLenght = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLenght;
  } else return false;
};
if (require.main === module) {
    let result = addOne("Paris in 7 Days Tour", "Paris is synonymous.", "https://www.course-api.com/images/users/user-1.jpeg", 500);
    console.log(result);
    result = addOne("Finland in 7 Days Tour", "Finland is synonymous.", "https://www.course-api.com/images/users/user-2.jpeg", 800);
    console.log(result);
    console.log(`getAll called: ${JSON.stringify(getAll(), null, 2)}`);
    console.log(`findById called: ${JSON.stringify(findById(2), null, 2)}`);
    console.log(
      `updateById called: ${JSON.stringify(updateOneById(2, {
        name: "Italy in 7 Days Tour",
        info: "Italy is synonymous.",
        image: "https://www.course-api.com/images/users/user-2.jpeg",
        price: 800
      }), null, 2)}`
    );
    console.log(`findById called after item updated: ${JSON.stringify(findById(2), null, 2)}`);
    console.log(`deleteById called: ${JSON.stringify(deleteOneById(2), null, 2)}`);
    console.log(`findById called after item deleted: ${JSON.stringify(findById(2), null, 2)}`);
  }

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
