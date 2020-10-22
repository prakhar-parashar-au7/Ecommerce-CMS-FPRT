import  React  from 'react';
import {Image} from 'cloudinary-react'
const userCard = (props) => {
return(
    <div style={{boxShadow:"3px 3px 4px 2px rgba(0,0,0,0.2)", textAlign : "center", width:"130px"}}>
      <Image publicId={props.user.photoId} cloudName="prakhar-parashar" width="80" height="80"/>
       <h6>{props.user.Name}</h6>
       <h10>{props.user.Email}</h10>
       <p>{props.user.Bio}</p>
    </div>
)
}


export default userCard