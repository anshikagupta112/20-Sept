const Student=require('../models/Student')

async function addStudent(req,res){
    try{
        console.log(req.body);
        let student=new Student(req.body)
        await student.save()
        res.end("Data add successfully")
    }
    catch(err){
        console.log(err);
    }
}
module.exports={
    addStudent
}