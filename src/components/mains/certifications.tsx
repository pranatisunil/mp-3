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


    @media (max-width: 600px) {
        padding: 16px;
    }
`;
export default function Certifications(){
    return (
        <StyledMain>
        <main>
            <h3 id="main-title">Documents</h3>
            <div id="main">
                <div>
                    <img id="resume" src="../../../public/paper-15-48.png" alt="resume"/>
                </div>
            </div>
        </main>
            </StyledMain>
    );
}