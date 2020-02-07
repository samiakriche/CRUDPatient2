import React from 'react';  

import axios from 'axios';  

import '../Patient/AddPatient.css'  

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class AddPatient extends React.Component{  

constructor(props){  

super(props)  

this.state = {  
Id:'',
Name:'',  
AfterName:'',  
Phone:'',  
Address:'',
BirthDate:'2000-01-01',
isActive:'true'
}  

}   

Addpatient=()=>{  
fetch('https://localhost:5001/api/Patient/AddPatient/', {  
 method: 'POST', 
  headers: {
   'Content-Type': 'application/json',
  },
body:JSON.stringify({Name:this.state.Name,AfterName:this.state.AfterName,  
Phone:this.state.Phone, Address:this.state.Address,BirthDate:this.state.BirthDate,
isActive:this.state.isActive})
})


                .then((responseJson) => {  

                    this.props.history.push("/Patientlist");  

                })  
}





handleChange= (e)=> {  

this.setState({[e.target.name]:e.target.value});  

}  

render() {  

return (  

   <Container className="App">  

    <h4 className="PageHeading">Enter Patient Informations</h4>  

    <Form className="form">  

      <Col>  

        <FormGroup row>  

          <Label for="name" sm={2}>Name</Label>  

          <Col sm={10}>  

            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  

          </Col>  

        </FormGroup>  
        <FormGroup row>  

<         Label for="name" sm={2}>After Name</Label>  

          <Col sm={10}>  

           <Input type="text" name="AfterName" onChange={this.handleChange} value={this.state.AfterName} placeholder="Enter After Name" />  

          </Col>  

</FormGroup>  

        <FormGroup row>  

          <Label for="address" sm={2}>Phone</Label>  

          <Col sm={10}>  

            <Input type="text" name="Phone" onChange={this.handleChange} value={this.state.Phone} placeholder="Enter Phone" />  

          </Col>  

        </FormGroup>  

        

        <FormGroup row>  

          <Label for="Password" sm={2}>Address</Label>  

          <Col sm={10}>  

            <Input type="text" name="Address" onChange={this.handleChange} value={this.state.Address} placeholder="Enter Address" />  

          </Col>  

        </FormGroup>  
        
        <FormGroup row>  
        <Label for="Password" sm={2}>BirthDate</Label>  

        <Col sm={10}>  

       <Input type="text" name="BirthDate" onChange={this.handleChange} value={this.state.BirthDate} placeholder="Enter Birthday" />         

         </Col>  

      </FormGroup>   

          

        <FormGroup row>  

          <Col sm={5}>  

          </Col>  

          <Col sm={1}>  

          <button type="button" onClick={this.Addpatient} className="btn btn-success">Submit</button>  

          </Col>  

          <Col sm={1}>  

            <Button color="danger">Cancel</Button>{' '}  

          </Col>  

          <Col sm={5}>  

          </Col>  

        </FormGroup>  

      </Col>  

    </Form>  

  </Container>  

);  

}  

}  

export default AddPatient;