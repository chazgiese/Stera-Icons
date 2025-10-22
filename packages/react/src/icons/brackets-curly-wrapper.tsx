import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BracketsCurlyIcon as RegularBracketsCurlyIcon } from './brackets-curly';
import { BracketsCurlyIconBold } from './brackets-curly-bold';
import { BracketsCurlyIconFilled } from './brackets-curly-filled';
import { BracketsCurlyIconFilltone } from './brackets-curly-filltone';
import { BracketsCurlyIconLinetone } from './brackets-curly-linetone';

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
    case 'filltone':
      return <BracketsCurlyIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BracketsCurlyIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBracketsCurlyIcon ref={ref} {...props} />;
  }
}));

BracketsCurlyIcon.displayName = 'BracketsCurlyIcon';

export { BracketsCurlyIcon };
