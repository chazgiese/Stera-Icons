import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CupIcon as CupIconRegular } from './cup';
import { CupIconBold } from './cup-bold';
import { CupIconFilled } from './cup-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CupIconProps extends IconProps {
  variant?: IconVariant;
}

const CupIcon = memo(forwardRef<SVGSVGElement, CupIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CupIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CupIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CupIconRegular ref={ref} {...props} />;
  }
}));

CupIcon.displayName = 'CupIcon';

export { CupIcon };
