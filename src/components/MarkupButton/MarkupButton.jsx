import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { Button } from './MarkupButton.styled';

export const MarkupButton = ({ title, width, onClick, variant }) => {
  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <Button style={{ width: width }} onClick={onClick} variant={variant}>
        {title}
      </Button>
    </StyleSheetManager>
  );
};
