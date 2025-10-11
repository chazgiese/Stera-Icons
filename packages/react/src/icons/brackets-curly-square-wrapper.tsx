import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlySquareIcon as BracketsCurlySquareIconRegular } from './brackets-curly-square';
import { BracketsCurlySquareIconBold } from './brackets-curly-square-bold';
import { BracketsCurlySquareIconFilled } from './brackets-curly-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BracketsCurlySquareIconProps extends IconProps {
  variant?: IconVariant;
}

const BracketsCurlySquareIcon = memo(forwardRef<SVGSVGElement, BracketsCurlySquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BracketsCurlySquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BracketsCurlySquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BracketsCurlySquareIconRegular ref={ref} {...props} />;
  }
}));

BracketsCurlySquareIcon.displayName = 'BracketsCurlySquareIcon';

export { BracketsCurlySquareIcon };
