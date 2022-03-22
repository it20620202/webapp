const router = require("express").Router();
const notice= require("../models/notice");

router.route("/NewNotice").post((req,res)=>{
   const NoticeTopic= req.body.NoticeTopic;
   const Role= req.body.Role;
   const NoticeType= req.body.NoticeType;
   const AuthorName=req.body.AuthorName;
   const AuthorId=req.body.AuthorId;
   const module=req.body.module;
   const ModuleId=req.body.ModuleId;
   const Content=req.body.Content;

   const newNotice= new notice({
       NoticeTopic,
       NoticeType,
       Role,
       AuthorName,
       AuthorId,
       module,
       ModuleId,
       Content
   })
   newNotice.save().then(()=>{
       res.json("New Notice Creaated") 
   }).catch((error)=>{
       console.log(error);
   })
})


router.route("/").get((req,res)=>{
        notice.find().then((notices)=>{
            res.json(notices)
        }).catch((error)=>{
            console.log(error);
        })
})

router.route("/updateNotice/:noticeId").put(async(req,res)=>{

    let noticeId= req.params.noticeId;
    const{NoticeTopic,NoticeType,Role,AuthorName,AuthorId,module,ModuleId,Content}= req.body; 

    const updateNotice={
        NoticeTopic,
        NoticeType,
        AuthorName,
        Role,
        AuthorId,
        module,
        ModuleId,
        Content

    }
    const update=  await notice.findByIdAndUpdate(noticeId,updateNotice)
    .then(()=>{
        res.status(200).send({status:"notice updated"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status:"Task Not Completed"});
    })
    
    
})


router.route("/deleteNotice/:id").delete(async(req,res)=>{
    let noticeId= req.params.noticeId;

    await notice.findByIdAndDelete(noticeId).then(()=>{
        res.status(200).send({status:"notice Deleted",noticeId:update });

    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status:"Task Not Completed"});
    })
})





module.exports= router;