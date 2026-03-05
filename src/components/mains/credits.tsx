import styled from "styled-components";

const StyledMain = styled.main`
    min-height: 100vh;
    width: 100%;
    min-width: 0;
    background: pink;
    padding: 24px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;


    overflow-wrap: anywhere;
    word-break: break-word;
    color: white;

    @media (max-width: 600px) {
        padding: 16px;
    }
`;
export default function Credits(){
    return (
        <StyledMain>
            <main>
                <p> Profile Picture  © 2025 by <a href ="https://www.linkedin.com/in/pranatisunil/">Pranati</a>
                    is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit
                    <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> Creative Commons</a></p>
            </main>
        </StyledMain>

    );
}