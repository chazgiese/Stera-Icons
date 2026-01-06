import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LabelAltIcon as RegularLabelAltIcon } from './label-alt';
import { LabelAltIconDuotone as LabelAltIconDuotone } from './label-alt-duotone';
import { LabelAltIconBold as LabelAltIconBold } from './label-alt-bold';
import { LabelAltIconBoldDuotone as LabelAltIconBoldDuotone } from './label-alt-bold-duotone';
import { LabelAltIconFill as LabelAltIconFill } from './label-alt-fill';
import { LabelAltIconFillDuotone as LabelAltIconFillDuotone } from './label-alt-fill-duotone';

export interface LabelAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LabelAltIcon = memo(forwardRef<SVGSVGElement, LabelAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LabelAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LabelAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LabelAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LabelAltIconFill ref={ref} {...props} />;
  if (duotone) return <LabelAltIconDuotone ref={ref} {...props} />;
  return <RegularLabelAltIcon ref={ref} {...props} />;
}));

LabelAltIcon.displayName = 'LabelAltIcon';

export { LabelAltIcon };
