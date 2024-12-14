interface User2 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type updateProps = Pick<User2, 'name' | 'age' | 'email'>;

type updatePropsOptional = Partial<updateProps>

function updateUser1(updatedProps:updatePropsOptional){

}