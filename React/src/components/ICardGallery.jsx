import ICard from "./ICard"
import photo from "../images/photo.jpeg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.webp";
import photo4 from "../images/photo4.avif";
import photo5 from "../images/photo5.avif";


import photo1 from "../images/photo1.avif";



const ICardGallery=()=>{
    const student=[
        {
        pic:photo,
        roll:"588",
        name:"sonu Pandey",
        branch:"Computer Science",
        college:"ABES Engineering College",
       
    },
    {
        pic:(photo2),
        roll:"589",
        name:"Jack",
        branch:"Computer Science",
        college:"ABES Engineering College",
       
    },


    {
        pic:(photo3),
        roll:"590",
        name:"Sonu",
        branch:"Computer Science",
        college:"ABES Engineering College",
       
    },


    {
        pic:(photo4),
        roll:"591",
        name:"Suraj ",
        branch:"Computer Science",
        college:"ABES Engineering College",
       
    },


    {
        pic:(photo5),
        roll:"592",
        name:"Jack",
        branch:"Computer Science",
        college:"ABES Engineering College",
       
    }
]

    return(
        <div style={{display:'flex',justifyContent:"space-evenly"}}>
            
            
 {/* <ICard pic={photo1} roll="1" name="Suraj Pandey" branch="CSE"college="Abes Engineering College"></ICard>
 
                    <ICard pic={photo2} roll="2" name="Sonu Pandey" branch="AIML"college="Abes Engineering College"></ICard>

                    <ICard  pic={photo3} roll="3" name="Monu Singh" branch="DATA SCIENCE"college="Abes Engineering College"></ICard> */}

                    

{
    student.map((ele)=>{
        return (
<ICard data={ele}>

</ICard>

    )})
}

        </div>
    )
}
export default ICardGallery