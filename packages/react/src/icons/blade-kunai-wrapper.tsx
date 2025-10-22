import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BladeKunaiIcon as BladeKunaiIconRegular } from './blade-kunai';
import { BladeKunaiIconBold } from './blade-kunai-bold';
import { BladeKunaiIconFilled } from './blade-kunai-filled';
import { BladeKunaiIconFilltone } from './blade-kunai-filltone';
import { BladeKunaiIconLinetone } from './blade-kunai-linetone';

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
    case 'filltone':
      return <BladeKunaiIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BladeKunaiIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BladeKunaiIconRegular ref={ref} {...props} />;
  }
}));

BladeKunaiIcon.displayName = 'BladeKunaiIcon';

export { BladeKunaiIcon };
