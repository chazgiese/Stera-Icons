import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessMediumIcon as RegularBrightnessMediumIcon } from './brightness-medium';
import { BrightnessMediumIconDuotone as BrightnessMediumIconDuotone } from './brightness-medium-duotone';
import { BrightnessMediumIconBold as BrightnessMediumIconBold } from './brightness-medium-bold';
import { BrightnessMediumIconBoldDuotone as BrightnessMediumIconBoldDuotone } from './brightness-medium-bold-duotone';
import { BrightnessMediumIconFill as BrightnessMediumIconFill } from './brightness-medium-fill';
import { BrightnessMediumIconFillDuotone as BrightnessMediumIconFillDuotone } from './brightness-medium-fill-duotone';

export interface BrightnessMediumIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrightnessMediumIcon = memo(forwardRef<SVGSVGElement, BrightnessMediumIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessMediumIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrightnessMediumIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrightnessMediumIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrightnessMediumIconFill ref={ref} {...props} />;
  if (duotone) return <BrightnessMediumIconDuotone ref={ref} {...props} />;
  return <RegularBrightnessMediumIcon ref={ref} {...props} />;
}));

BrightnessMediumIcon.displayName = 'BrightnessMediumIcon';

export { BrightnessMediumIcon };
