import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BracketsCurlySquareIcon as RegularBracketsCurlySquareIcon } from './brackets-curly-square';
import { BracketsCurlySquareIconBold } from './brackets-curly-square-bold';
import { BracketsCurlySquareIconFilled } from './brackets-curly-square-filled';
import { BracketsCurlySquareIconFilltone } from './brackets-curly-square-filltone';
import { BracketsCurlySquareIconLinetone } from './brackets-curly-square-linetone';

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
    case 'filltone':
      return <BracketsCurlySquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BracketsCurlySquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBracketsCurlySquareIcon ref={ref} {...props} />;
  }
}));

BracketsCurlySquareIcon.displayName = 'BracketsCurlySquareIcon';

export { BracketsCurlySquareIcon };
