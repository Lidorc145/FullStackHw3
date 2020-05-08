import React from 'react';
import Articles from "./Articles";
import './App.css';


function App() {
    return (
        <div className="App" >
            <header>
                <NavBar />
            </header>

            <article className="mainColumn">
                <h1>This is my blog</h1>
                <Articles />


            </article>

            <aside className="sideColumn">
                <Latest />
                <hr className="divider" />
                <Popular />
            </aside>

            <footer>
                Lidor Cohen
            </footer>
        </div>
);
}

function NavBar(){
    return(
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li className="navBorder">|</li>
                <li><a href="#AboutMe">About Me</a></li>
                <li className="navBorder">|</li>
                <li><a href="#ContactMe">Contact Me</a></li>
                <li className="rightLi"><a href="#Login">Login</a></li>
            </ul>
        </nav>
    );
}

function Popular() {
    return(
        <div>
            <h1>Popular</h1>
            <p>Blog post #3 <a href="#post">go to page</a></p>
            <p>Blog post #1 <a href="#post">go to page</a></p>
            <p>Blog post #2 <a href="#post">go to page</a></p>
        </div>
    );
}


function Latest() {
    return(
        <div>
            <h1>Latest</h1>
            <p>Blog post #1 <a href="#post">go to page</a></p>
            <p>Blog post #2 <a href="#post">go to page</a></p>
            <p>Blog post #3 <a href="#post">go to page</a></p>
        </div>
    );
}
export default App;
