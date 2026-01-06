import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlashlightIcon as RegularFlashlightIcon } from './flashlight';
import { FlashlightIconDuotone as FlashlightIconDuotone } from './flashlight-duotone';
import { FlashlightIconBold as FlashlightIconBold } from './flashlight-bold';
import { FlashlightIconBoldDuotone as FlashlightIconBoldDuotone } from './flashlight-bold-duotone';
import { FlashlightIconFill as FlashlightIconFill } from './flashlight-fill';
import { FlashlightIconFillDuotone as FlashlightIconFillDuotone } from './flashlight-fill-duotone';

export interface FlashlightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlashlightIcon = memo(forwardRef<SVGSVGElement, FlashlightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlashlightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlashlightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlashlightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlashlightIconFill ref={ref} {...props} />;
  if (duotone) return <FlashlightIconDuotone ref={ref} {...props} />;
  return <RegularFlashlightIcon ref={ref} {...props} />;
}));

FlashlightIcon.displayName = 'FlashlightIcon';

export { FlashlightIcon };
