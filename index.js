const mongoose = require('mongoose');
const fs = require('fs');
const load_data = fs.readFileSync("data.json");
const data = JSON.parse(load_data);

mongoose.connect('mongodb://temo:temo@localhost:27017/admin?retryWrites=true&w=majority', // local connection string
// mongoose.connect('mongodb+srv://admin:admin@cluster0-djo82.mongodb.net/test?retryWrites=true&w=majority', // mongo cloud connection string
  { useUnifiedTopology: true,
   useNewUrlParser: true }
).then(() => console.log('connected')
).catch(err => console.log(err))


const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],  //["NodeJS","ReactJS"]
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price:Number
})

const Course = mongoose.model('Course', CourseSchema);




// const createCourse = (course) => {
//   const newCourse = new Course(course);
//   newCourse.save()
//     .then(course => console.log(course))
//     .catch(err=>console.log(err))
// }
  /*
const course_1 = {
  name: "Fullstack JS",
  author: "Cybersoft",
  tags: ["NodeJS", "ReactJS", "MongoDB"],
  isPublished: true,
  price: 10
}
createCourse(course_1);
*/
// data.forEach((c) => {
//   createCourse(c);
// })

//ES6
/*
Course
find all of cource have price great than 15 and lester than or equal 20
  // .find({ price: { $gt: 15, $lte: 20 } })
  // .find({ price: { $nin: [15,20] } }) // find course with price not between 15 and 20
  // .find({price:10,author: 'Mosh'}) // find course with price = 10 and author by 'Mosh'
  // .find({name: /^node/i}) // find course with name begin with node, i is not different between upper and lower case
  // .and({ price: 10, author: 'Mosh' }) // find course with price = 10 and author by 'Mosh'
    // .find({name: /^*JS/})
  // .or([{ price: 10 }, { author:'Mosh'}])  // find course with price = 10 or author by 'Mosh'
  .find({ tags: 'backend' , isPublished: true}) // find course with tags attribute is backend and isPublished == true
  .sort({name: 'asc'}) // sort result asscending
  .select('name author tags') // show 3 attribute: name, author, tags
  // .select({name:1,author:1, price:1}) // show 3 attribute: name, author, tags , 1 is show 
  // .limit(3) // limit result: found result == limit will stop and show 
  .then(course => console.log(course))
    .catch(console.log)
*/
 
    



/*
//ES5
// Course.find({ price: 12 }, (err, res)=> {
//   if (err) return console.log(err)
//   console.log(res)
// })
*/
/*
//ES7
// const findCourse = async () => {
//   try {
    
//     const course = await Course.find({price:12})
//     return course;
//   } catch (err) {
//     console.log(err)
//   }
// }
// findCourse()

// const printfCourse = async () => {
//   const print = await findCourse();
//   console.log(print);
// }
// printfCourse();
*/

//Assignment at Class
/**
 * found all of course backend and published, sort by name, only  show name and author
 */
// Course.find()
//   .and({ tags: 'backend', isPublished: true })
//   .sort({ name: 'asc' })
//   .select('name author -_id')
//   .then(course => console.log(course))
//   .catch(err => console.log(err));

  /**
   // found course backend and frontend, published, sort by
  // price descending, only show name and author
   */
// Course.find({ isPublished: true })
//   // .and({ isPublished: true })
//   .or([{ tags: 'backend' }, { tags: 'frontend' }])
//   .sort({ price: 'desc' })
//   .select('name author tags price isPublished -_id')
//   .then(course => console.log(course))
//   .catch(err => console.log(err))
  
  /**
   * found all course  published, with price  greater than or equals $15 and  exists
"by" in name
   */

// Course.find()
//   .and({ isPublished: true, price: { $gte: 15 }, name: /.*by*./ })
//   .select('name isPublished price')
//   .then(course => console.log(course))
//   .catch(err => console.log(err));
