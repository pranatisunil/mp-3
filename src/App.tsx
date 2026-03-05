import Header from "./components/header.tsx";
import Nav from "./components/nav.tsx";
import Footer from "./components/footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Education from "./components/mains/education.tsx";
import Home from "./components/mains/home.tsx";
import Employment from "./components/mains/employment.tsx";
import Certifications from "./components/mains/certifications.tsx";
import References from "./components/mains/references.tsx";
import Projects from "./components/mains/projects.tsx";
import Credits from "./components/mains/credits";
import styled from "styled-components";


const StyledWrapper=styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #9E4244;
    text-align: center;
`;

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

function Root(){
    return(
        <StyledWrapper>
            <Header/>
            <StyledContainer>
                <Nav/>
                <Routes>
                    <Route
                        path={`/`}
                        element={<Home/>}
                    />
                    <Route
                        path={`/education/education.html`}
                        element={<Education/>}
                    />
                    <Route
                        path={`/employment/employment.html`}
                        element={<Employment/>}
                    />
                    <Route
                        path={`/achievements/achievements.html`}
                        element={<Certifications/>}
                    />
                    <Route
                        path={`/references/references.html`}
                        element={<References/>}
                    />
                    <Route
                        path={`/documents/projects.html`}
                        element={<Projects/>}
                    />
                    <Route
                    path={`/credits`}
                    element={<Credits/>}
                    />

                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledWrapper>
    );
}

const router=createBrowserRouter(
    [{path:"*",Component:Root}]
)


export default function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
