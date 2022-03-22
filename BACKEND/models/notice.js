const mongoose =require ("mongoose");
const Schema = mongoose.Schema;

const noticeSchema= new Schema(
    {
      NoticeTopic:{
          type : String,
          
      },
      Role:{
          type : String,
          required: true
          
      },
      NoticeType:{
        type : String,
        
    }, 
    AuthorName:{
        type : String,
       
    },
    AuthorId:{
        type : String,
      
    },
    Module:{
        type : String,
        
    },
    ModuleId:{
        type : String,
       
    },
    Content:{
        type : String,
        
    }
    }
)
const notice = mongoose.model("NoticeBoard",noticeSchema);

module.exports=notice;