import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlyCircleIcon as BracketsCurlyCircleIconRegular } from './brackets-curly-circle';
import { BracketsCurlyCircleIconBold } from './brackets-curly-circle-bold';
import { BracketsCurlyCircleIconFilled } from './brackets-curly-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BracketsCurlyCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const BracketsCurlyCircleIcon = memo(forwardRef<SVGSVGElement, BracketsCurlyCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BracketsCurlyCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BracketsCurlyCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BracketsCurlyCircleIconRegular ref={ref} {...props} />;
  }
}));

BracketsCurlyCircleIcon.displayName = 'BracketsCurlyCircleIcon';

export { BracketsCurlyCircleIcon };
