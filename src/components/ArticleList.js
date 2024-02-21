import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
 const article =  posts.map(eachPost => (
        <Article
        title = {eachPost.title}
        date = {eachPost.date}
        preview ={eachPost.preview}
        key = {eachPost.id}
        />
    ))
    return (
      <main>
       {article}
      </main>
    );
  }
  export default ArticleList;