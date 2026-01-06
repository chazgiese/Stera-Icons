import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FigmaIcon as RegularFigmaIcon } from './figma';
import { FigmaIconDuotone as FigmaIconDuotone } from './figma-duotone';
import { FigmaIconBold as FigmaIconBold } from './figma-bold';
import { FigmaIconBoldDuotone as FigmaIconBoldDuotone } from './figma-bold-duotone';
import { FigmaIconFill as FigmaIconFill } from './figma-fill';
import { FigmaIconFillDuotone as FigmaIconFillDuotone } from './figma-fill-duotone';

export interface FigmaIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FigmaIcon = memo(forwardRef<SVGSVGElement, FigmaIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FigmaIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FigmaIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FigmaIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FigmaIconFill ref={ref} {...props} />;
  if (duotone) return <FigmaIconDuotone ref={ref} {...props} />;
  return <RegularFigmaIcon ref={ref} {...props} />;
}));

FigmaIcon.displayName = 'FigmaIcon';

export { FigmaIcon };
