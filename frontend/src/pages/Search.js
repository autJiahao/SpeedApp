import React, { Component } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

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

    return (
        <div>
        <input ref={(input) => {this.search = input}}/>
        
        <button onClick={()=>this.Search_Article(this.search.value)}>Search</button>
        {articleList}
        </div>
      
    );
  }

Search_Article(Searchinput) {
    let postdate = {
        "title": Searchinput
    }
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