import LoginPage from "../pages/LoginPage/LoginPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostPage  from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
 
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Header } from "../components/Header"

export const Router = () => {
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
                    <FeedPage />
                </Route>
            
                <Route exact path={"/postpage"}>
                    <PostPage />
                </Route>
            
                <Route >
                    <ErrorPage />
                </Route>
            
            </Switch>       
        </BrowserRouter>
    )
}