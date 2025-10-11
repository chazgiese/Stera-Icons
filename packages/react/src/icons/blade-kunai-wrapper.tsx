import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BladeKunaiIcon as BladeKunaiIconRegular } from './blade-kunai';
import { BladeKunaiIconBold } from './blade-kunai-bold';
import { BladeKunaiIconFilled } from './blade-kunai-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BladeKunaiIconProps extends IconProps {
  variant?: IconVariant;
}

const BladeKunaiIcon = memo(forwardRef<SVGSVGElement, BladeKunaiIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BladeKunaiIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BladeKunaiIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BladeKunaiIconRegular ref={ref} {...props} />;
  }
}));

BladeKunaiIcon.displayName = 'BladeKunaiIcon';

export { BladeKunaiIcon };
