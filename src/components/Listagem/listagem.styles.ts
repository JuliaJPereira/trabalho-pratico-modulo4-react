import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: inline-block;
`;

export const ProductItem = styled.div`
  width: 250px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ProductPDP = styled(ProductItem)`
  width: 50%;
  height: 100%;
  display: inline-block
`;

export const DivProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;