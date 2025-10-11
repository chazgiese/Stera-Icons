import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CogIcon as CogIconRegular } from './cog';
import { CogIconBold } from './cog-bold';
import { CogIconFilled } from './cog-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CogIconProps extends IconProps {
  variant?: IconVariant;
}

const CogIcon = memo(forwardRef<SVGSVGElement, CogIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CogIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CogIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CogIconRegular ref={ref} {...props} />;
  }
}));

CogIcon.displayName = 'CogIcon';

export { CogIcon };
