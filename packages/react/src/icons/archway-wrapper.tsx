import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArchwayIcon as RegularArchwayIcon } from './archway';
import { ArchwayIconBold } from './archway-bold';
import { ArchwayIconFilled } from './archway-filled';
import { ArchwayIconFilltone } from './archway-filltone';
import { ArchwayIconLinetone } from './archway-linetone';

export interface ArchwayIconProps extends IconProps {
  variant?: IconVariant;
}

const ArchwayIcon = memo(forwardRef<SVGSVGElement, ArchwayIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArchwayIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArchwayIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArchwayIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArchwayIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArchwayIcon ref={ref} {...props} />;
  }
}));

ArchwayIcon.displayName = 'ArchwayIcon';

export { ArchwayIcon };
