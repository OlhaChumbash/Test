
let student ={
    name: " ",       
    surname: " ",          
    
    
  friendsList: [
         {name: "Igor",
            surname: "Ivanov",},
         {name: "Svitlana",
             surname: "Snegkina",},
         {name: "Olha", 
             surname: "Chumbash",} ],

        

    addFriends: function(friend) {
        this.friendsList.push(friend);
      },

    searchFriends:  function (name) {
        return this.friends.friendsList.filter((item) => item.name == name);
    },

}




































// let arr = [];
// student.gruppstudents = arr;


//    function myObj (name, age, grupp){
//     this.name = name;
//     this.age = age;
//     this.group = grupp;
// };


// let user1 = new myObj ('Olya', '15', 'B22');
// let user2 = new myObj ('Dima', '20', 'B22');
// let user3 = new myObj ('Olya', '15', 'B22');
// let user4 = new myObj ('Olya', '35', 'B22');
// let user5 = new myObj ('Olya', '50', 'B22');



// student.gruppstudents.push(user1,user2,user3,user4,user5);

// student.gruppstudents.forEach( function ( elem) {
//    if (elem.age > 18) console.log(elem.age) })




// let such = student.gruppstudents.filter(age => age < 5);
// console.log(student);
 





// console.log(student);

// let mas = [    // массив єлементі котрого - обьекти
//     {
//     name: 'User',   
//     age: 23
// },
// {
//     name: 'User1',
//     age: 30
// },
// {
//     name: 'User2',
//     age: 31
// },

// ]

// mas.sort (function(a,b){
//     return b.age - a.age;  // сортировка от большего к меньшему
// });


// mas.sort (function(a,b){
//     return a.age - b.age;  // сортировка от  меньшему  к большему 
// });


// console.log(mas);

// let student = Object.create({},{
//         userName:{
//             value: 'Olha',
//             writable: true,
//             enumerable: true,
//             configurable: true,
//          },
//         userSurname:{
//             value: 'Chumbash',
//             writable: true,
//             enumerable: true,
//             configurable: true
//         },
        
//     }
//     )

//     Object.defineProperty(student, friends, {value : [],
//         writable : true,
//         enumerable : true,
//         configurable : true});

//         let user1 = 5;

//      student.students.friends.push(user1);


//     console.log(student);





// //Перебор массива
// let aff = [0,1,2,3,4,5,6,7,] 
// aff.forEach((elem)=> {
//     elem ++;
//     console.log(elem);
// })



//  Выборка в отдельный массив только одного поле из обьекта
// let mas = [    // массив єлементі котрого - обьекти
//     {
//     name: 'User',   
//     age: 2
// },
// {
//     name: 'User1',
//     age: 30
// },
// {
//     name: 'User2',
//     age: 42
// },

// ];

// let newMass = [];

// mas.forEach((elem)=>
//     newMass.push(elem.name)
// );
// console.log(newMass);



// Записываем в новый массив только те элементы другого массива котроые отвечают требованиям
// let aff = [0,1,2,3,4,5,6,7,] 
// let newAff  = aff.filter(function(elem){
//     return elem < 6;
// }
// )
// console.log (newAff)



// Создаем массив на основании старого
// let aff = [0,1,2,3,4,5,6,7,] 
// let newAff  = aff.map((elem)=> elem+'a')
// console.log (newAff)














































// let ob = Object.create({},{
//     name:{
//       value:'',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     surname: {
//       value:'',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
//   });
//   function add(n,s){
//     ob.name = n;
//     ob.surname = s;
//   }
//   add('Dima','Tuzkov');
  
//   Object.defineProperty(ob,'friends',{
//     value:[],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   })
  
//   function addFriend(n,a){
//     this.name = n;
//     this.age = a;
//     ob.friends.push({name: this.na
//   function addFriend(n,a){
//     this.name = n;
//     this.age = a;
//     ob.friends.push({name: this.name, age: this.age});
//   }
//   addFriend('Anna',28);
//   addFriend('Vasya',31);
//   addFriend('Oleg',20);
//   addFriend('Sasha',19);
//   addFriend('Igor',18);
  
//   console.log(ob.friends.filter(elem => elem.age<20));
//   ob.friends.forEach(elem =>{
//     Object.defineProperty(elem,'friends',{
//       value:[],
//       writable: true,
//       enumerable: true,
//       configurable: true
//     });
//   });
  
//   ob.friends.filter(elem =>{
//     elem.age>30 ? ob.friends[0].frie
  
//   ob.friends.filter(elem =>{
//     elem.age>30 ? ob.friends[0].friends.push(elem) : elem;
//     elem.age>20 ? ob.friends[1].friends.push(elem) : elem;
//     elem.age>25 ? ob.friends[2].friends.push(elem) : elem;
//     elem.age>20 ? ob.friends[3].friends.push(elem) : elem;
//     elem.age<30 ? ob.friends[4].friends.push(elem) : elem;
  
  
//   });
  
//   let maxf = ob.friends.reduce((accum,elem) => accum.friends.length>elem.friends.length?accum:elem);
//   console.log(`More friends : ${maxf.name}`);
//   let minf = ob.friends.reduce((accum,el
//   let minf = ob.friends.reduce((accum,elem) => accum.friends.length<elem.friends.length?accum:elem);
//   console.log(`less friends : ${minf.name}`);
//   console.log(ob.friends[4].friends.length);