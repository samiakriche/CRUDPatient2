import React, { Component } from 'react';  

import axios from 'axios';  

import { Link } from 'react-router-dom';  

class Table extends Component {  

  constructor(props) {  

    super(props);  

    }  

    DeleteStudent= () =>{  
    axios.delete('https://localhost:5001/api/Patient/'+this.props.obj.id)  
    alert('Patient Deleted')
    }  

  render() {  

    return (  

        <tr>  

          <td>  
            
            {this.props.obj.name}  

          </td>  

          <td>  

            {this.props.obj.afterName}  

          </td>  

          <td>  

            {this.props.obj.phone}  

          </td>  

          <td>  

            {this.props.obj.address}  

          </td> 
          <td>  

            {this.props.obj.birthDate}  

          </td>  
          <td>  

            {this.props.obj.isActive}  

          </td>  

          <td>  

          <Link to={"/edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>  

          </td>  

          <td>  

            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  

          </td>  

        </tr>  

    );  

  }  

}  

export default Table;