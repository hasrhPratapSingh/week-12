// Pick allows you to create a new type by selecting a set of properties from an existing type or interface.

interface User1 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps  = Pick<User1, 'name' | 'age' | 'email'>

function updateUser(updatedProps: UpdateProps){
  //hit the database to update the user but the thing you have to update is only name & e-mail, age 
}