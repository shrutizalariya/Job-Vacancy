const express = require('express');
mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Job = require('./Job');
const cors = require('cors');

const ConnectionString = 'mongodb+srv://23010101311:ShrutiZ29@cluster0.ziljz.mongodb.net/JobDemo';
mongoose.connect(ConnectionString).then(()=>{

    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //get all available companys
    app.get('/jobs',async(req,res)=>{
        const ans = await Job.find();
        res.send(ans);
    });

    //get a particular company
    app.get('/jobs/:Id',async(req,res)=>{
        const ans = await Job.findOne({Id:req.params.Id});
        res.send(ans);
    })

    //add a new available company
    app.post('/jobs',async(req,res)=>{
        const job = new Job({...req.body});
        const ans = await job.save();
        res.send(ans);
    });

    //delete a company
    app.delete('jobs/:_id',async(req,res)=>{
        const ans = await Job.deleteOne({_id:req.params._id});
        res.send(ans);
    })

    //update a company details
    app.patch('jobs/:Id',async(req,res)=>{
        const job = await Job.findOne({Id:req.params.Id},req.body);

        const ans = await job.save();
        res.send(ans);
    })

    app.listen(5000,()=>{
        console.log('server started @ 5000');
    })
});

