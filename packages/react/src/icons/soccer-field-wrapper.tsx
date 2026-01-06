import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SoccerFieldIcon as RegularSoccerFieldIcon } from './soccer-field';
import { SoccerFieldIconDuotone as SoccerFieldIconDuotone } from './soccer-field-duotone';
import { SoccerFieldIconBold as SoccerFieldIconBold } from './soccer-field-bold';
import { SoccerFieldIconBoldDuotone as SoccerFieldIconBoldDuotone } from './soccer-field-bold-duotone';
import { SoccerFieldIconFill as SoccerFieldIconFill } from './soccer-field-fill';
import { SoccerFieldIconFillDuotone as SoccerFieldIconFillDuotone } from './soccer-field-fill-duotone';

export interface SoccerFieldIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SoccerFieldIcon = memo(forwardRef<SVGSVGElement, SoccerFieldIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SoccerFieldIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SoccerFieldIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SoccerFieldIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SoccerFieldIconFill ref={ref} {...props} />;
  if (duotone) return <SoccerFieldIconDuotone ref={ref} {...props} />;
  return <RegularSoccerFieldIcon ref={ref} {...props} />;
}));

SoccerFieldIcon.displayName = 'SoccerFieldIcon';

export { SoccerFieldIcon };
