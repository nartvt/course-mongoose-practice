const mongoose = require('mongoose');
const fs = require('fs');
const load_data = fs.readFileSync("data.json");
const data = JSON.parse(load_data);

mongoose.connect('mongodb+srv://admin:admin@cluster0-djo82.mongodb.net/test?retryWrites=true&w=majority',
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




const createCourse = (course) => {
  const newCourse = new Course(course);
  newCourse.save()
    .then(course => console.log(course))
    .catch(err=>console.log(err))
}
  
const course_1 = {
  name: "Fullstack JS",
  author: "Cybersoft",
  tags: ["NodeJS", "ReactJS", "MongoDB"],
  isPublished: true,
  price: 10
}
// createCourse(course_1);
// data.forEach((c) => {
//   createCourse(c);
// })

//ES6
// Course
//   // .find({ price: { $gt: 15, $lte: 20 } })
//   // .find({ price: { $nin: [15,20] } })
//   // .find({price:10,author: 'Mosh'})
//   // .find({name: /^node/i})
//   // .and({ price: 10, author: 'Mosh' })
//     // .find({name: /^JS*/})
//   // .or({ price: 10 }, { author:'Mosh'})
//   .find({ tags: 'backend' , isPublished: true})
//   .sort({name: 'asc'})
//   .select('name author tags')
//   // .select({name:1,author:1, price:1})
//   // .limit(3)
//   .then(course => console.log(course))
//   .catch(console.log)

Course

  .find()
  .and({ isPublished:true})
  .or([{ tags: 'frontend' }, { tags: 'backend' }])
  .select('name author tags')
  .sort({ price: 'desc' })
  // .select({name:1,author:1, price:1})
  // .limit(3)
  .then(course => console.log(course))
  .catch(console.log)
// 
//ES5
// Course.find({ price: 12 }, (err, res)=> {
//   if (err) return console.log(err)
//   console.log(res)
// })

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
// printfCourse()