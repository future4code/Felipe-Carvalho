import LoginPage from "../pages/LoginPage/LoginPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostPage  from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
 
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { useState } from "react"

export const Router = () => {
    const [ feeds, setFeeds] = useState([])


    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/registro"}>
                    <RegisterPage />
                </Route>
            
                <Route exact path={"/"}>
                    <FeedPage feeds={feeds} setFeeds={setFeeds} />
                </Route>
            
                <Route exact path={"/postpage/:postId"}>
                    <PostPage feeds={feeds} setFeeds={setFeeds}/>
                </Route>
            
                <Route >
                    <ErrorPage />
                </Route>
            
            </Switch>       
        </BrowserRouter>
    )
}