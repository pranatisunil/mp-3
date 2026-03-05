import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    flex: 0 0 260px;  
    background-color: hotpink;

    @media screen and (max-width: 1000px) {
        flex: 1;
    }
`;

const StyledList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    list-style: none;
    
    @media screen and (max-width: 1000px){
        flex-direction: row;
        
    }
`;

const StyledListItem=styled.li`
    width: 80%;
    margin: 8% auto;
    padding: 1% 3%;
    border: beige 5px solid;
    text-align: center;
    
    @media screen and (max-width: 1000px){
        width: 15%;
        margin: 1%;
        padding: 1%;
    }
    
`;

const StyledLink=styled(Link)`
    font:normal small-caps bold calc(2px + 2vw) "Times New Roman", Helvetica, "Helvetica Neue", sans-serif;
    color: floralwhite;
    text-decoration: none;
    width: 80%;
    margin: 8% auto;
    padding: 1% 3%;
    
    @media screen and (max-width: 1000px){
        font-size: calc(2px + 1vw);
    }
`;



export default function Nav(){
    return(
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledLink to="/">Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/education/education.html">Education</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/employment/employment.html">Employment</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/achievements/achievements.html">Achievements</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/references/references.html">References</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/documents/projects.html">Projects</StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}