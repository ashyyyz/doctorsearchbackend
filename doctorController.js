const doctor = require('./doctorModel');
const catchAsync = fn => {
    return(req, res, next) => {
      fn(req, res, next).catch(err => next(err))
    }
}

exports.getAlldoctors = catchAsync(async (req,res,next) =>{
    console.log(req.query);
    // if(req.params.id){
    //     const doctors = await doctor.find(req.params.id);
    // }
    const doctors = await doctor.find(req.query);
    if(!doctors)
       res.status(404).json({
    status:"unsuccessful"})
    res.status(200).json({
        status:"Success",
        doctors
        
    })
})
