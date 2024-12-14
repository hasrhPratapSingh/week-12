"use strict";
// how to create a object in typescript
const user6 = {
    "ras@1d": {
        id: 'ras@1d',
        username: 'harkirat'
    },
    "ras@2d": {
        id: 'ras@2d',
        username: 'harvi'
    }
};
const user8 = {
    "ras@1d": {
        id: 'ras@1d',
        username: 'harkirat'
    },
    "ras@2d": {
        id: 'ras@2d',
        username: 'harvi'
    }
};
//Map
// Maps gives you an even fancier way to deal with objects. Very similiar to Maps in c++.
const userMap = new Map();
userMap.set("ras@1d", {
    id: 'ras@1d',
    username: 'harkirat'
});
userMap.set("ras@2d", {
    id: 'ras@2d',
    username: 'harvi'
});
const usr = userMap.get("ras@1d");
console.log(user);
