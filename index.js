
const express= require('express');
const mongoose= require('mongoose');
require('dotenv').config();

const app= express();
app.use(express.json());

const Student= require('./Student');
const Course =require('./Course');

mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log('MongoDB connected'))
  .catch(err=>console.log(err));


 app.get('/',(req, res)=>{
    res.send('This is College Admin API');});

 app.post('/students',async(req, res) =>{
  try{
    const student= new Student(req.body);
    await student.save();
    res.status(201).json(student);} 
   catch(e){res.status(400).json({error: e.message});}});

  app.get('/students',async(req, res) =>{
  const students= await Student.find().populate('courses');
  res.send(students);
  });

  app.put('/students/:id',async(req, res) =>{
  try{
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, 
    { new: true });
    res.status(201).json(student);} 
    catch(e){ res.status(400).json({error: e.message});}});

  app.delete('/students/:id',async(req, res) =>{
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message:'Student deleted successfully'});
  });


  app.post('/courses',async(req, res) =>{
  try{
    const course= new Course(req.body);
    await course.save();
    res.send(course);}

  catch(e)
  {res.status(400).json({error: e.message});}});

  app.patch('/students/:id/enroll',async(req, res) =>{
  const student= await Student.findById(req.params.id);
  student.courses.push(req.body.courseId);
  await student.save();
  res.send(student);});

 
  app.listen(process.env.PORT,()=> {
  console.log('Server Running Port',process.env.PORT);});
