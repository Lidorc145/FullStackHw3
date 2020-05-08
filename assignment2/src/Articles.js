import React from 'react';
import renderHTML from 'react-render-html';
import './App.css';
import emptyImage from './emptyImage.png';

var articlesData = [
    {
        postID: "post#1",
        postTitle: "Blog post #1",
        postImage: emptyImage,
        postPreviewText: `My <b>first blog post</b> is all about my <font color="red"> blog post</font> and how to write a new post in my blog, you can find it <a href="#">here</a>.`,
        postPublishedTime: "2 days ago",
        postAuther: "Lidor"
    },
    {
        postID: "post#2",
        postTitle: "Blog post #2",
        postImage: emptyImage,
        postPreviewText: "My <b>second blog post</b> is all about my blog post. <br>\n" +
            "\t\t\t\ttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text .",
        postPublishedTime: "a week ago",
        postAuther: "Lidor"
    },
    {
        postID: "post#3",
        postTitle: "Blog post #3",
        postImage: emptyImage,
        postPreviewText: "My <b>third blog post</b> is all about my blog post. <br>\n" +
            "\t\t\t\ttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text .",
        postPublishedTime: "2 months ago",
        postAuther: "Avi"
    }
];


class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            postID: props.postID,
            postTitle: props.postTitle,
            postImage: props.postImage,
            postPreviewText: props.postPreviewText,
            postPublishedTime: props.postPublishedTime,
            postAuther: props.postAuther

        };
    }


    render() {
        let articlesObjects = articlesData.map((item,key) => (
            <section className="postSection" id={item.postID} key={key}><img src={item.postImage} alt="" id="postImage#2" className="postImage" />
                <div className="postContent">
                    <p className="postTitle">{item.postTitle}</p><br/>

                    {renderHTML(item.postPreviewText)}
                </div>
                <p className="postFooter">Published {item.postPublishedTime} by {item.postAuther}</p>
            </section>
        ));

        return articlesObjects;
    }
}

//
export default Articles;