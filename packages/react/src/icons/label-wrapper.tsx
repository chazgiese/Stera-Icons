import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LabelIcon as RegularLabelIcon } from './label';
import { LabelIconDuotone as LabelIconDuotone } from './label-duotone';
import { LabelIconBold as LabelIconBold } from './label-bold';
import { LabelIconBoldDuotone as LabelIconBoldDuotone } from './label-bold-duotone';
import { LabelIconFill as LabelIconFill } from './label-fill';
import { LabelIconFillDuotone as LabelIconFillDuotone } from './label-fill-duotone';

export interface LabelIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LabelIcon = memo(forwardRef<SVGSVGElement, LabelIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LabelIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LabelIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LabelIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LabelIconFill ref={ref} {...props} />;
  if (duotone) return <LabelIconDuotone ref={ref} {...props} />;
  return <RegularLabelIcon ref={ref} {...props} />;
}));

LabelIcon.displayName = 'LabelIcon';

export { LabelIcon };
