 // how to create a object in typescript
 
 type user4 = {
  id:string;
  username:string;
 }

 type user5 = {
  [key:string]:user4;
 }

 const user6 : user5 ={
  "ras@1d": {
    id:'ras@1d',
    username: 'harkirat'
  },
  "ras@2d": {
    id: 'ras@2d',
    username: 'harvi'
  }
 } 

 // Records and Maps
 // Records gives you a cleaner type of objects

 type Userobj = {
  id:string;
  username:string;
 }

 type userObj = Record<string, Userobj>;

 const user8: userObj = {
  "ras@1d": {
    id:'ras@1d',
    username: 'harkirat'
  },
  "ras@2d": {
    id: 'ras@2d',
    username: 'harvi'
  }
 }

 //Map
 // Maps gives you an even fancier way to deal with objects. Very similiar to Maps in c++.


 const userMap = new Map<string, Userobj>();
 userMap.set("ras@1d", {
    id:'ras@1d',
    username: 'harkirat'
  })
 userMap.set("ras@2d", {
    id: 'ras@2d',
    username: 'harvi'
  })

  const usr = userMap.get("ras@1d");
  console.log(user);