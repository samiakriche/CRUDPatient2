import React, { Component } from 'react';  

import axios from 'axios';  

import Table from './Table';  

export default class Patientlist extends Component {  

  constructor(props) {  

      super(props);  

      this.state = {business: []};  
      

    }  

    componentDidMount(){  

     // debugger;  
      
       axios.get('https://localhost:5001/api/Patient')  

        .then(response => {  

          this.setState({ business: response.data });  

         // debugger;  

        })  

        .catch(function (error) {  

          console.log(error);  

        })  

    }  

    tabRow(){  

      return this.state.business.map(function(object, i){  

          return <Table obj={object} key={i} />;  

      });  

    }  

    render() {  

      return (  

        <div>  
             

          <table className="table table-striped" style={{ marginTop: 10 }}>  

            <thead>  

              <tr>  

                <th>Name</th>  

                <th>AfterName</th>  

                <th>Phone</th>  

                <th>Address</th> 
                <th>Birth Date</th>
                <th>Active</th> 


                <th colSpan="4">Action</th>  

              </tr>  

            </thead>  

            <tbody>  

             { this.tabRow() }  


            </tbody>  

          </table>  

        </div>  

      );  

    }  

  }