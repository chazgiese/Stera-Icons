import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BracketsCurlyCircleIcon as BracketsCurlyCircleIconRegular } from './brackets-curly-circle';
import { BracketsCurlyCircleIconBold } from './brackets-curly-circle-bold';
import { BracketsCurlyCircleIconFilled } from './brackets-curly-circle-filled';
import { BracketsCurlyCircleIconFilltone } from './brackets-curly-circle-filltone';
import { BracketsCurlyCircleIconLinetone } from './brackets-curly-circle-linetone';

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
    case 'filltone':
      return <BracketsCurlyCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BracketsCurlyCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BracketsCurlyCircleIconRegular ref={ref} {...props} />;
  }
}));

BracketsCurlyCircleIcon.displayName = 'BracketsCurlyCircleIcon';

export { BracketsCurlyCircleIcon };
