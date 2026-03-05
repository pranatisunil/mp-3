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
                    <table>
                        <tbody>
                        <tr>

                            <th>Languages</th>
                            <th>Level</th>
                            <th>Years spent learning</th>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>English</td>
                            <td>n/a</td>
                            <td>Native</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Hindi</td>
                            <td>n/a</td>
                            <td>Native</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>French</td>
                            <td>Level 2</td>
                            <td>2 years</td>
                        </tr>
                        </tbody>

                    </table>

                    <table>
                        <tbody>
                        <tr>

                            <th>Interests</th>
                            <th>Age learnt</th>
                            <th>Place/Projects </th>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td> Surfing</td>
                            <td>18 years old</td>
                            <td> Hawaii</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td> Skydiving</td>
                            <td>12 years old</td>
                            <td> New Zealand</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td> Baking</td>
                            <td>n/a</td>
                            <td> Home: Mysore</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </main>
            </StyledMain>
    );
}