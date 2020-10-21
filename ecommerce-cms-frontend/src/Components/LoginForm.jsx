import * as React from 'react';
import './styles/loginForm.css'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import PhotoUploader from './photoUploader'
import {Image} from 'cloudinary-react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {useHistory} from 'react-router-dom'




const LoginForm = () => {

   const history = useHistory()
   

        
        const   [Name, setName]  = React.useState("")
        const  [Password, setPassword] = React.useState("")  
        const [Type, setType]  = React.useState("")
        

   

     const handleNameChange = (event) => {
         setName( event.target.value)
     }


    const handlePasswordChange = (event) => {
        setPassword( event.target.value)
    }

    const handleTypeChange = (event) => {
        setType(event.target.value)
    }

    

   const  handleClick = () => {
        
        axios({
            method : 'post',
            url : '/signInUser',
            data : {
              Name : Name,
              Password : Password,
              Type : Type        
            }
          }).then((response) => {
          if(response.data.status ===  404) {
            alert(response.data.message)
          }

          if(response.data.status === 202) {
                  history.push('/k')
          }
           
          })
        }
    
    
    



        return (
            <div id="loginform">
                <div style={{ marginBottom : "50px"}}>
                <br></br>
                <h3 >Sign In </h3>
                <InputLabel id="demo-customized-select-label" style={{ display: "inline" }}>I am a </InputLabel>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={Type}
                    onChange={handleTypeChange}

                >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Vendor">Vendor</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                </Select>
                <br></br><br></br>
                <TextField label="Name" variant="outlined" onChange={handleNameChange} />
                
                <br></br><br></br>
                <TextField id="Password" label="Password" variant="outlined" onChange={handlePasswordChange} />
               <br></br><br></br>
                
                < Button color="primary" variant="contained" onClick={handleClick}>Submit</Button>
                </div>
              

            </div>

        )
    }


 

export default LoginForm