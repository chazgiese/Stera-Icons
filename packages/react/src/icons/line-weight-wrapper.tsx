import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineWeightIcon as RegularLineWeightIcon } from './line-weight';
import { LineWeightIconDuotone as LineWeightIconDuotone } from './line-weight-duotone';
import { LineWeightIconBold as LineWeightIconBold } from './line-weight-bold';
import { LineWeightIconBoldDuotone as LineWeightIconBoldDuotone } from './line-weight-bold-duotone';
import { LineWeightIconFill as LineWeightIconFill } from './line-weight-fill';
import { LineWeightIconFillDuotone as LineWeightIconFillDuotone } from './line-weight-fill-duotone';

export interface LineWeightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LineWeightIcon = memo(forwardRef<SVGSVGElement, LineWeightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineWeightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LineWeightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LineWeightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LineWeightIconFill ref={ref} {...props} />;
  if (duotone) return <LineWeightIconDuotone ref={ref} {...props} />;
  return <RegularLineWeightIcon ref={ref} {...props} />;
}));

LineWeightIcon.displayName = 'LineWeightIcon';

export { LineWeightIcon };
