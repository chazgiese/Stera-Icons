import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoolSIcon as RegularCoolSIcon } from './cool-s';
import { CoolSIconDuotone as CoolSIconDuotone } from './cool-s-duotone';
import { CoolSIconBold as CoolSIconBold } from './cool-s-bold';
import { CoolSIconBoldDuotone as CoolSIconBoldDuotone } from './cool-s-bold-duotone';
import { CoolSIconFill as CoolSIconFill } from './cool-s-fill';
import { CoolSIconFillDuotone as CoolSIconFillDuotone } from './cool-s-fill-duotone';

export interface CoolSIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CoolSIcon = memo(forwardRef<SVGSVGElement, CoolSIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CoolSIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CoolSIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CoolSIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CoolSIconFill ref={ref} {...props} />;
  if (duotone) return <CoolSIconDuotone ref={ref} {...props} />;
  return <RegularCoolSIcon ref={ref} {...props} />;
}));

CoolSIcon.displayName = 'CoolSIcon';

export { CoolSIcon };
