import React, { Component } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

//search inherits Component
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
//Determine if the article exists, and if so, render the articlelist.
  render() {
    const articles = this.state.articles;
    console.log("PrintBook: " + articles);
    let articleList;

    if(!articles) {
        articleList = "there is no articles record!";
    } else {
        articleList = articles.map((article, k) =>
        <ArticleCard article={article} key={k} />
      );
    }
//Show results, show results with SEARCH button, easy for users to search again
    return (
      
        <div>
        <input ref={(input) => {this.search = input}}/>
        
        <button onClick={()=>this.Search_Article(this.search.value)}>Search</button>
        {articleList}
        </div>
    );}
//Search for the specified article, the article name is equal to Searchinput
Search_Article(Searchinput) {
    let postdate = {
        "title": Searchinput
    }
    //Transferring data to search_article
    axios
      .post('http://localhost:8082/api/articles/search_article',postdate)
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticlesList');
      })
  };
}

export default Search;