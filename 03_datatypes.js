        //1. is primitive data type
        // string, number, boolean, undefined, null, biglnt, symbol//

        //string//
        let name = "vivek"
         console.log(name);
         console.log(typeof(name))

         //number//

         let a = 5
         console.log(a);
         console.log(typeof(a))

         //boolean//

         let result = true
         console.log(result)
          console.log(typeof(result))

          //null//

          let code = null
         console.log(code)
          console.log(typeof(code))

          //undifend//

          let x;
         console.log(x)
          console.log(typeof(x))

          //symbol//

           let id = Symbol("id")
         console.log(id)
          console.log(typeof(id))

          //2. NonPrimitive data type//

          //object//

          let student = {
            Name :" vivek",
            Age :17
          };
          console.log(student);

          //change student name //

             student.Name = "ravi";
            console.log(student);
            console.log(typeof student);
            

            //array//
            let fruits =["apple","mango", "banana"]
            console.log(fruits);

          // array me kis index pe kya hai print karana //
            console.log(fruits[1]);
            console.log(typeof fruits);
            


        //function//
        function number(){
            console.log("hello kya haal chal hai apka ");
            
        }
        number();
        console.log(typeof Array);
        
        

         