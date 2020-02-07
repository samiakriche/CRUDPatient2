import React from 'react';   

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

import axios from 'axios'  

import '../Patient/AddPatient.css'  

class Edit extends React.Component {  

    constructor(props) {  

        super(props)  

    this.onChangeName = this.onChangeName.bind(this);  

    this.onChangeAfterName = this.onChangeAfterName.bind(this);  
   




    this.onChangePhone = this.onChangePhone.bind(this); 
    this.onChangeAddress = this.onChangeAddress.bind(this); 
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this); 
    this.onChangeisActive = this.onChangeisActive.bind(this);  

   
    

    this.onSubmit = this.onSubmit.bind(this);  

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

  componentDidMount() {  

      axios.get('https://localhost:5001/api/Patient/'+this.props.match.params.id)  

          .then(response => {  

            this.setState({   

            Name: response.data.name,   
            AfterName:response.data.afterName,  
            Phone:response.data.phone,  
            Address:response.data.address,
            BirthDate:response.data.birthDate,
            isActive:response.data.isActive  });  

          })  

          .catch(function (error) {  

              console.log(error);  

          })  

    }  

  onChangeName(e) {  

    this.setState({  

        Name: e.target.value  

    });  

  }  

  onChangeAfterName(e) {  

    this.setState({  

       AfterName: e.target.value  

    });    

  }  

  onChangePhone(e) {  

    this.setState({  

        Phone: e.target.value  

    });  

}  

    onChangeAddress(e) {  

        this.setState({  

            Address: e.target.value  

        });  

  }  ;
  onChangeBirthDate(e){  

    this.setState({  

        BirthDate: e.target.value  

    });  

}  
onChangeisActive(e){  

    this.setState({  

        isActive: e.target.value  

    });  

}  

  onSubmit(e) {  

    //debugger;  

    e.preventDefault();  

    const obj = {  

    Id: this.props.match.params.id,  

      Name: this.state.Name,  

      AfterName: this.state.AfterName,  

      Phone: this.state.Phone,  

      Address: this.state.Address,
      BirthDate: this.state.BirthDate,
      isActive: this.state.isActive

    };  

   /* axios.put('https://localhost:5001/api/patient/', obj)  

        .then(res => console.log(res.data));  

      ///  debugger;  

        this.props.history.push('/Patientlist')  */
        fetch('https://localhost:5001/api/Patient', {  
 method: 'PUT', 
  headers: {
   'Content-Type': 'application/json',
  },
body:JSON.stringify({Id:this.props.match.params.id,Name:this.state.Name,AfterName:this.state.AfterName,  
Phone:this.state.Phone, Address:this.state.Address,BirthDate:this.state.BirthDate,
isActive:this.state.isActive})
})
.then((responseJson) => {  
     console.log(this.state.Name)
     console.log(this.props.match.params.id)
    this.props.history.push("/Patientlist");  

})  


  }  

    render() {  

        return (  

            <Container className="App">  

             <h4 className="PageHeading">Update Student Informations</h4>  

                <Form className="form" onSubmit={this.onSubmit}>  

                    <Col>  

                        <FormGroup row>  

                            <Label for="name" sm={2}>Name</Label>  

                            <Col sm={10}>  

                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName}  

                                placeholder="Enter Name" />  

                            </Col>  

                        </FormGroup>  

                        <FormGroup row>  

<         Label for="name" sm={2}>After Name</Label>  

          <Col sm={10}>  

           <Input type="text" name="AfterName" onChange={this.onChangeAfterName} value={this.state.AfterName} placeholder="Enter After Name" />  

          </Col>  

</FormGroup> 

<FormGroup row>  

<Label for="address" sm={2}>Phone</Label>  

<Col sm={10}>  

  <Input type="text" name="Phone" onChange={this.onChangePhone} value={this.state.Phone} placeholder="Enter Phone" />  

</Col>  

</FormGroup> 

                         <FormGroup row>  

                            <Label for="Password" sm={2}>Address</Label>  

                            <Col sm={10}>  

                                <Input type="text" name="Address"value={this.state.Address} onChange={this.onChangeAddress} placeholder="Enter Address" />  

                            </Col>  

                        </FormGroup>   

                        <FormGroup row>  
        <Label for="Password" sm={2}>BirthDate</Label>  

        <Col sm={10}>  

       <Input type="text" name="BirthDate" onChange={this.onChangeBirthDate} value={this.state.BirthDate} placeholder="Enter Birthday" />         

         </Col>  

      </FormGroup>

                    </Col>  

                    <Col>  

                        <FormGroup row>  

                            <Col sm={5}>  

                            </Col>  

                            <Col sm={1}>  

                          <Button type="submit" color="success">Submit</Button>{' '}  

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

export default Edit;