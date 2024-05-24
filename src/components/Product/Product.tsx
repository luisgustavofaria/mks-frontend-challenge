import styled from 'styled-components';

const ContainerMain = styled.div``;

const ContainerProducts = styled.div`
  margin-top: 217px;
  margin: 0 auto;
  width: 938px;
  height: 601px;
  background-color: blue;
`;

const ContainerCard = styled.div`
  width: 218px;
  height: 285px;
  background-color: red;
`;

export default function Products() {
  return (
    <ContainerProducts>
      <ContainerCard></ContainerCard>
    </ContainerProducts>
  );
}
