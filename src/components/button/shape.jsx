// @flow

import type {ThemeProps, ColorsType} from '../../styles';
import styled, {css} from 'styled-components';

type AppearanceType = 'primary' | 'secondary';

export type ShapeProps = {
  appearance: AppearanceType,
  disabled?: boolean,
  theme: ThemeProps
};

type Props = ShapeProps & {
  withIcon: boolean
};

export const getButtonTextColor = (
  appearance: AppearanceType,
  colors: ColorsType
): string => (appearance === 'primary' ? '#FFF' : colors.grayText);

const withTextColor = ({appearance, theme: {colors}}: Props) =>
  css`
    color: ${getButtonTextColor(appearance, colors)};
  `;

const withBgColor = ({appearance, theme: {colors}}: Props) => css`
  background-color: ${appearance === 'primary'
    ? colors.primary
    : 'transparent'};
`;

const withBorderColor = ({appearance, theme: {colors}}: Props) =>
  css`
    border-color: ${appearance === 'primary'
      ? colors.primary
      : colors.grayLight};
  `;

const withDisabledStyle = ({disabled}: Props) =>
  disabled
    ? css`
        cursor: not-allowed;
        opacity: 0.7;
      `
    : css`
        cursor: pointer;
      `;

const withHoverStyles = ({appearance, theme: {colors}}: Props) =>
  appearance === 'primary'
    ? css`
        &:hover {
          background-color: ${colors.primaryDarken};
        }
      `
    : css`
        &:hover {
          border-color: ${colors.gray};
        }
      `;

const withAppearanceStyles = ({disabled}: Props) => css`
  ${withTextColor} 
  ${withBgColor}
  ${withBorderColor}
  ${withDisabledStyle} 
  ${!disabled && withHoverStyles};
`;

const withPaddings = ({withIcon}: Props) =>
  withIcon
    ? css`
        padding: 11px 30px 11px 25px;
      `
    : css`
        padding: 11px 30px;
      `;

const Shape = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  ${withAppearanceStyles};
  ${withPaddings};
  outline: none;
  text-transform: uppercase;
  transition: ${({theme}: Props): string => theme.transitions.base};
  white-space: nowrap;

  &:active {
    transform: scale(0.98);
  }
`;

Shape.defaultProps = {
  appearance: 'primary',
  disabled: false
};

export default Shape;
