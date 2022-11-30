import { FormControl, FormGroup, InputLabel,Input, Typography, styled, Button} from "@mui/material"
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

const Container = styled(FormGroup)`
  width : 50%;
  margin : 5% auto 0 auto;
  & > div {
    margin-top : 20px;
  }
`;

const defaultUser = {
  name: '',
  username:'',
  phone:'',
  email:''
}

const AddUser =() => {

  const [user, setUser] = useState(defaultUser);

  const navigate = useNavigate();

  const onValueChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const addUserDetails = async() => {
    await addUser(user);
    swal({
      title: "Added!",
      text: "You added user successfully",
      icon: "success",
      button: "Okay",
    });
    navigate('/all');
  }

  return (
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name = "name"/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name = "username"/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name = "email"/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name = "phone"/>
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
        </FormControl>
      </Container>
  )
}

export default AddUser