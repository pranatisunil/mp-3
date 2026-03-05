import { useState } from "react";
import styled from "styled-components";

const StyledMain = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const Page = styled.div`
  max-width: 900px;
  margin: 0 auto;         
  padding: 0 16px;     
  display: flex;
  justify-content: center; 
`;

const Calculator = styled.div`
  width: 100%;
  max-width: 650px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #f06292;
  box-sizing: border-box;

  label {
    display: block;
    margin: 10px 0 6px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 14px;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-sizing: border-box;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 14px 0;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  button {
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    color: white;
  }

  #addBtn { background: #28a745; }
  #subBtn { background: #ffc107; color: #222; }
  #multiBtn { background: #007bff; }
  #divBtn { background: #6f42c1; }
  #powBtn { background: #dc3545; }
  #clearBtn { background: #343a40; }
`;

const Output = styled.div<{ $negative: boolean }>`
    margin-top: 12px;
    padding: 14px;
    background: #f9f9f9;
    border-radius: 6px;
    border: 1px solid #eee;
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    color: ${(props) => (props.$negative ? "red" : "black")};
`;

export default function Projects() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState("");

    const n1 = Number(input1);
    const n2 = Number(input2);

    const valid = (v:Number) => Number.isFinite(v);

    function doAdd() {
        setOutput(valid(n1) && valid(n2) ? String(n1 + n2) : "Enter valid numbers");
    }
    function doSub() {
        setOutput(valid(n1) && valid(n2) ? String(n1 - n2) : "Enter valid numbers");
    }
    function doMulti() {
        setOutput(valid(n1) && valid(n2) ? String(n1 * n2) : "Enter valid numbers");
    }
    function doDiv() {
        if (!valid(n1) || !valid(n2)) return setOutput("Enter valid numbers");
        if (n2 === 0) return setOutput("Cannot divide by 0");
        setOutput(String(n1 / n2));
    }
    function doPow() {
        setOutput(valid(n1) && valid(n2) ? String(n1 ** n2) : "Enter valid numbers");
    }
    function Clear() {
        setInput1("");
        setInput2("");
        setOutput("");
    }

    const outputNum = Number(output);
    const isNegative = output !== "" && Number.isFinite(outputNum) && outputNum < 0;

    return (
        <StyledMain>
            <Page>
                <Calculator>
                    <label htmlFor="first">first number:</label>
                    <input
                        id="first"
                        value={input1}
                        placeholder="Enter a number"
                        onChange={(e) => setInput1(e.target.value)}
                    />

                    <label htmlFor="second">second number:</label>
                    <input
                        id="second"
                        value={input2}
                        placeholder="Enter a number"
                        onChange={(e) => setInput2(e.target.value)}
                    />

                    <Buttons className="buttons">
                        <button id="addBtn" onClick={doAdd}>Add</button>
                        <button id="subBtn" onClick={doSub}>Subtract</button>
                        <button id="multiBtn" onClick={doMulti}>Multiply</button>
                        <button id="divBtn" onClick={doDiv}>Divide</button>
                        <button id="powBtn" onClick={doPow}>Power</button>
                        <button id="clearBtn" onClick={Clear}>Clear</button>
                    </Buttons>

                    <Output $negative={isNegative}>
                        {output === "" ? "Result will appear here" : output}
                    </Output>
                </Calculator>
            </Page>
        </StyledMain>
    );
}