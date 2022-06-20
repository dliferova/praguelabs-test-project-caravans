import styled from "styled-components";
import Header from "../src/components/layout/header/header";
import CatalogPage from "../src/pages/catalog-page/catalog-page";

const Home = () => {
  return (
      <PageWrapper>
          <Header/>
          <CatalogPage/>
      </PageWrapper>
  )
}

const PageWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  background-color: var(--color-white);
`


export default Home
