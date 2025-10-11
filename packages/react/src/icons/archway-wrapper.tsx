import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArchwayIcon as ArchwayIconRegular } from './archway';
import { ArchwayIconBold } from './archway-bold';
import { ArchwayIconFilled } from './archway-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ArchwayIconRegular ref={ref} {...props} />;
  }
}));

ArchwayIcon.displayName = 'ArchwayIcon';

export { ArchwayIcon };
