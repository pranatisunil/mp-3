import styled from "styled-components";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";

const Page = styled.div`
  min-height: 100vh;
  background: #a24a4a; 
`;

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
    width: 100%;
`;

const Body = styled.div`
  display: flex;
  gap: 24px;
  align-items: stretch;
`;

const Main = styled.main`
  flex: 1;
  min-width: 0;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Page>
            <Container>
                <Header />
                <Body>
                    <Nav />
                    <Main>{children}</Main>
                </Body>
                <Footer />
            </Container>
        </Page>
    );
}