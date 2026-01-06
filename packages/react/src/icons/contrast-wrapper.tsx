import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ContrastIcon as RegularContrastIcon } from './contrast';
import { ContrastIconDuotone as ContrastIconDuotone } from './contrast-duotone';
import { ContrastIconBold as ContrastIconBold } from './contrast-bold';
import { ContrastIconBoldDuotone as ContrastIconBoldDuotone } from './contrast-bold-duotone';
import { ContrastIconFill as ContrastIconFill } from './contrast-fill';
import { ContrastIconFillDuotone as ContrastIconFillDuotone } from './contrast-fill-duotone';

export interface ContrastIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ContrastIcon = memo(forwardRef<SVGSVGElement, ContrastIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ContrastIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ContrastIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ContrastIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ContrastIconFill ref={ref} {...props} />;
  if (duotone) return <ContrastIconDuotone ref={ref} {...props} />;
  return <RegularContrastIcon ref={ref} {...props} />;
}));

ContrastIcon.displayName = 'ContrastIcon';

export { ContrastIcon };
