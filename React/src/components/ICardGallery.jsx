import ICard from "./ICard"
import photo from "../images/photo.jpeg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.webp";

import photo1 from "../images/photo1.avif";



const ICardGallery=()=>{
    const student={
        pic:(photo),
        roll:"588",
        name:"Suraj Pandey",
        branch:"Computer Science",
        college:"ABES Engineering College",
       
    }

    return(
        <div style={{display:'flex',justifyContent:"space-evenly"}}>
            
            
 {/* <ICard pic={photo1} roll="1" name="Suraj Pandey" branch="CSE"college="Abes Engineering College"></ICard>
 
                    <ICard pic={photo2} roll="2" name="Sonu Pandey" branch="AIML"college="Abes Engineering College"></ICard>

                    <ICard  pic={photo3} roll="3" name="Monu Singh" branch="DATA SCIENCE"college="Abes Engineering College"></ICard> */}

                    
<ICard data={student}></ICard>
        </div>
    )
}
export default ICardGallery