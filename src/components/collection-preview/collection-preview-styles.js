import styled from "styled-components";

import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
