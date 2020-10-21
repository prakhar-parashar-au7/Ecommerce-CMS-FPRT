import * as React from 'react';
import './styles/signUpForm.css'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import PhotoUploader from './photoUploader'
import {Image} from 'cloudinary-react'
import Button from '@material-ui/core/Button'
import axios from 'axios'




class SignUpForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            photoId : "",
            Name : "",
            Email : "",
            Type : "",
            Password : ""

        }
    }

    savePhotoInfo = (assetId) => {
       this.setState({photoId : assetId})
   } 

     handleNameChange = (event) => {
         this.setState({Name : event.target.value})
     }

     handleEmailChange = (event) => {
        this.setState({Email : event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({Password : event.target.value})
    }
    
    handleTypeChange = (event) => {
        this.setState({Type : event.target.value})
    }
    
    handleBioChange = (event) => {
        this.setState({Bio : event.target.value})
    }


    handleClick = () => {
        axios({
            method : 'post',
            url : '/signUpUser',
            data : {
              Name : this.state.Name,
              Email : this.state.Email,
              Password : this.state.Password,
              photoId : this.state.photoId,
              Type : this.state.Type,
              Bio : this.state.Bio
            }
          }).then((response) => {
           
          })
        }
    
    
    


    render() {


        return (
            <div id="form">
                <div style={{margin : "10px"}}>
                <br></br>
                <h3 style={{marginLeft : "200px"}}>Sign Up</h3>
                <TextField label="Name" variant="outlined" onChange={this.handleNameChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField id="Email" label="Email" variant="outlined" onChange={this.handleEmailChange} />
                <hr></hr>
                <br></br><br></br>
                <TextField id="Password" label="Password" variant="outlined" onChange={this.handlePasswordChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <InputLabel id="demo-customized-select-label" style={{ display: "inline" }}>Type</InputLabel>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={this.state.type}
                    onChange={this.handleTypeChange}

                >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Vendor">Vendor</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                </Select>
                <hr></hr>
                <br></br><br></br>
                <div style= {{display : "grid", gridTemplateColumns : "auto auto"}}>

                {(this.state.photoId == "")
                 ? 
                 <PhotoUploader photoInfo = {this.savePhotoInfo}/>
                 :

                 <Image publicId={this.state.photoId} cloudName="prakhar-parashar" width="150" height="150"/> } 
                
                <TextField id="Bio" label="Bio" variant="outlined" onChange={this.handleBioChange} multiline
          rows={3}/>
                </div>
                <div style={{marginLeft : "200px", marginTop : "60px"}}>
                < Button color="primary" variant="contained" onClick={this.handleClick}>Submit</Button>
                </div>
              

            </div>
            </div>

        )
    }
}

 

export default SignUpForm