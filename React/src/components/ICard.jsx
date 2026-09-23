
import photo from "../images/photo.jpeg";


const ICard=({data})=>{
    return(
        <div style={{border:"10px solid red",height:"500px",width:"400px"}}>
            {/* <img src={props.pic} height={200} width={300} alt="" />
            {/* <img src={photo}  style={{width:"300px", height:"200px", margin:"10px" ,rounded:"10px"}}alt="" /> */}
            {/* <h2>Roll:{props.roll}</h2>
            <h2>Name: {props.name}</h2>
            <h2>Branch:{props.branch}</h2>
            <h2>College:{props.college}</h2> */} */


            <img src={data.pic} height={200} width={150} alt="" />

            {/* <img src={photo}  style={{width:"300px", height:"200px", margin:"10px" ,rounded:"10px"}}alt="" /> */}
            <h2>Roll:{data.roll}</h2>
            <h2>Name: {data.name}</h2>
            <h2>Branch:{data.branch}</h2>
            <h2>College:{data.college}</h2>
            

        </div>
    )
}

export default ICard;