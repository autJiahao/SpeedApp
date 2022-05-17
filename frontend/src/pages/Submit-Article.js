import React, { Component } from 'react'; 
 import '../App.css'; 
 import axios from 'axios'; 
   class SubmissionForm extends Component { 
 constructor() { 
 super(); 
 this.state = { 
 title: '', 
 authors:'', 
 publication_year:'', 
 doi:'' 
 }; 
 } 
   onChange = e => { 
 this.setState({ [e.target.name]: e.target.value }); 
 }; 
   onSubmit = e => { 
 e.preventDefault(); 
   const data = { 
 title: this.state.title, 
 authors: this.state.authors, 
 publication_year: this.state.publication_year, 
 doi: this.state.doi 
 }; 
   axios 
 .post('http://localhost:8082/api/articles', data) 
 .then(res => { 
 this.setState({ 
 title: '', 
 authors:'', 
 publication_year:'', 
 doi:'' 
 }) 
 this.props.history.push('/'); 
 }) 
 .catch(err => { 
 console.log("Error in CreateArticle!"); 
 }) 
 }; 
   render() { 
 return ( 
 <div className="CreateArticle"> 
 <div className="container"> 
 <div className="row"> 
 <div className="col-md-8 m-auto"> 
 <h1 className="display-4 text-center">Submit Article</h1> 
   <form noValidate onSubmit={this.onSubmit}> 
 <div className='form-group'> 
 <input 
 type='text' 
 placeholder='Title of the article' 
 name='title' 
 className='form-control' 
 value={this.state.title} 
 onChange={this.onChange} 
 /> 
 </div> 
     <div className='form-group'> 
 <input 
 type='text' 
 placeholder='Author' 
 name='authors' 
 className='form-control' 
 value={this.state.authors} 
 onChange={this.onChange} 
 /> 
 </div> 
     <div className='form-group'> 
 <input 
 type='date' 
 placeholder='publication_year' 
 name='publication_year' 
 className='form-control' 
 value={this.state.publication_year} 
 onChange={this.onChange} 
 /> 
 </div> 
 <div className='form-group'> 
 <input 
 type='text' 
 placeholder='DOI' 
 name='doi' 
 className='form-control' 
 value={this.state.doi} 
 onChange={this.onChange} 
 /> 
 </div> 
   <input 
 type="submit" 
 className="btn btn-outline-warning btn-block mt-4" 
 /> 
 </form> 
 </div> 
 </div> 
 </div> 
 </div> 
 ); 
 } 
 } 
   export default SubmissionForm; 