/*
- A module used to hash passwords
-
-
-
-
- Author : Alexandros Lemesios (alexlemesios@gmail.com)
-
-
*/
"use strict";

const prompt = require('prompt');
const bcrypt = require('bcryptjs');

prompt.start();

const schema = {
  properties: {
    password: {
      hidden: true,
      required: true
    },
    passwordVerification: {
      hidden: true,
      required: true
    }
  }
}

prompt.get(schema, function (err, result) {

   if (result.password === result.passwordVerification) {
     console.log("Passwords have matched !");
   }
   else {
     console.log("Passwords didn't match , please try again");
     return;
   }
   let salt = bcrypt.genSaltSync(10);
   let hash = bcrypt.hashSync(result.password, salt);
   console.log(bcrypt.compareSync("test", hash));
});
