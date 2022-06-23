import styled, {css} from "styled-components";

export const TextSize = {
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small",
    EXTRA_SMALL: "extra_small",
};

const TextSizeValue = {
    [TextSize.BIG]: {
        fontSize: "24px",
        fontSizeResponsive: "22px",
        lineHeight: "100%"
    },
    [TextSize.MEDIUM]: {
        fontSize: "16px",
        lineHeight: "100%"
    },
    [TextSize.SMALL]: {
        fontSize: "14px",
        lineHeight: "120%"
    },
    [TextSize.EXTRA_SMALL]: {
        fontSize: "12px",
        lineHeight: "120%"
    }
};

export const Text = styled.p`
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom || 0};
  padding: 0;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  ${(props) => {
    const values = TextSizeValue[props.size || TextSize.SMALL];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
      
      @media(min-width: 768px) and (max-width: 1240px) {
        font-size: ${values.fontSizeResponsive};
      }
    `;
  }};
`;

export const GreyTextRegular = styled(Text)`
  color: var(--color-dark-grey);
`;

export const TextAccent = styled(Text)`
  color: var(--color-orange);
  text-transform: uppercase;
`;

export const TextBoldHeading = styled(Text)`
  color: var(--color-dark-blue);
`;

export const TextWithIcon = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 8px;
  align-items: end;
`;