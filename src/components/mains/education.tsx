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
export default function Education(){
    return(
        <StyledMain>
            <h3 id="main-title">Educational Background</h3>
            <div>
                <h5><strong>B.A in Computer Science and Economics</strong>| <em><u>Boston University MA.</u></em></h5>
                <em>May 2028</em>
            </div>
            <div>
                <h5><strong>Minor in Innovation and Entrepreneurship</strong>| <em><u>Boston University MA.</u></em></h5>
                <em>May 2028</em>
            </div>
            <div>
                <h5><strong>High School Diploma in Physics, Chemistry, Computer Science, Math</strong>| <em><u>NPS MYS.</u></em></h5>
                <em>June 2024</em>
            </div>

            </StyledMain>
    );
}
