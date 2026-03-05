
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

export default function References(){
    return(
        <StyledMain>
        <main>
            <h3 id="main-title">References</h3>
            <div>
                <h5>Professional</h5>
                <table border="|">
                    <tbody>
                    <tr>

                        <th>Professors</th>
                        <th>Email</th>
                        <th>Class taken</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>Prof. Taymaaz Davoodi</td>
                        <td> n/a</td>
                        <td>CS103 and CS391</td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>Prof. Nathan Mull</td>
                        <td>n/a</td>
                        <td>CS132</td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>Dr. Lim</td>
                        <td>n/a</td>
                        <td>MA213 Lab</td>
                    </tr>
                    </tbody>

                </table>
            </div>
            <div>
                <h5>Personal</h5>
                <table border="|">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>Sunil Kumar</td>
                        <td>cherrypick@gamil.com</td>
                        <td>Cherry Pick</td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>Janak Sunil</td>
                        <td> janak@bear.ai</td>
                        <td>Bear Ai</td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>Meghana Sunil</td>
                        <td> School@gmail.com</td>
                        <td>School</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
        </StyledMain>
    );
}