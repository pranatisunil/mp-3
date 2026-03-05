import styled from "styled-components";
import profile from "../../assets/profile.jpg";

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

export default function Home(){
    return (
        <StyledMain>
            <title>Home | Resume</title>
            {}
            <h3>Home</h3>
            <div id="this-one">
                <img src={profile} alt="Pranati Sunil" />
                <p>
                    Hi, My name is Pranati Sunil! I'm currently a sophomore majoring in computer science and
                    Economics with a Minor in Innovation and Entrepreneurship.
                    Welcome to my Online Resume!

                </p>
            </div>
            <p id="bottom-p">
                Welcome to my website, here you will find my
                <strong><em><u>Educational</u></em></strong>
                and my
                <strong><em><u>Employment</u></em></strong>
                history; as well as other information that might be
                of interest to you.
            </p>
        </StyledMain>
    );
}