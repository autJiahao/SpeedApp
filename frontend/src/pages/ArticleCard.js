import React from 'react'; 
 import { Link } from 'react-router-dom'; 
 import '../App.css'; 
   const ArticleCard = (props) => { 
 const article = props.article; 
   return( 
 <div className="card-container"> 
 <div className="desc"> 
 <h2> 
 <Link to={`/show-article/${article._id}`}> 
 { article.title } 
 </Link> 
 </h2> 
 <h3>{article.authors}</h3> 
 </div> 
 </div> 
 ) 
 }; 
   export default ArticleCard; 