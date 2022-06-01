import React, { Component } from 'react'; 
 import '../App.css'; 
 import axios from 'axios'; 
 import ArticleCard from './ArticleCard'; 
   class SEPractice extends Component { 
 constructor(props) { 
 super(props); 
 this.state = { 
 articles: [] 
 }; 
 } 
   componentDidMount() { 
 axios 
 .get('http://localhost:8082/api/articles') 
 .then(res => { 
 this.setState({ 
 articles: res.data 
 }) 
 }) 
 .catch(err =>{ 
 console.log('Error from ShowArticlesList'); 
 }) 
 }; 
     render() { 
 const articles = this.state.articles; 
 console.log("PrintBook: " + articles); 
 let articleList; 
   if(!articles) { 
 articleList = "there is no book record!"; 
 } else { 
   
 articleList = articles.map((article, k) => 
 <>
 <ArticleCard article={article} key={k} /> 
 <button onClick={this.deleteArticle.bind(this,article._id)}>Delete</button>
 </>
 ); 
 } 
   return ( 
 <div className="ShowBookList"> 
 <div className="container"> 
 <div className="row"> 

 <br/> 
 <h2 className="display-4 text-center">Articles List</h2> 
 </div> 
 </div> 
   <div className="list"> 
 {articleList} 
 </div> 
 </div> 

 ); 
 } 

 deleteArticle(id){
  axios.delete('http://localhost:8082/api/articles/'+id).then(res => { 
    
    ; 
    }) 
    .catch(err => { 
    console.log("Error form ShowBookDetails_deleteClick"); 
    }) 
    }; 
 } 
   export default SEPractice; 