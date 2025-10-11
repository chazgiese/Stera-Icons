import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlyIcon as BracketsCurlyIconRegular } from './brackets-curly';
import { BracketsCurlyIconBold } from './brackets-curly-bold';
import { BracketsCurlyIconFilled } from './brackets-curly-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BracketsCurlyIconProps extends IconProps {
  variant?: IconVariant;
}

const BracketsCurlyIcon = memo(forwardRef<SVGSVGElement, BracketsCurlyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BracketsCurlyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BracketsCurlyIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BracketsCurlyIconRegular ref={ref} {...props} />;
  }
}));

BracketsCurlyIcon.displayName = 'BracketsCurlyIcon';

export { BracketsCurlyIcon };
