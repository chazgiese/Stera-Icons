import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlashIcon as RegularFlashIcon } from './flash';
import { FlashIconDuotone as FlashIconDuotone } from './flash-duotone';
import { FlashIconBold as FlashIconBold } from './flash-bold';
import { FlashIconBoldDuotone as FlashIconBoldDuotone } from './flash-bold-duotone';
import { FlashIconFill as FlashIconFill } from './flash-fill';
import { FlashIconFillDuotone as FlashIconFillDuotone } from './flash-fill-duotone';

export interface FlashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlashIcon = memo(forwardRef<SVGSVGElement, FlashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlashIconFill ref={ref} {...props} />;
  if (duotone) return <FlashIconDuotone ref={ref} {...props} />;
  return <RegularFlashIcon ref={ref} {...props} />;
}));

FlashIcon.displayName = 'FlashIcon';

export { FlashIcon };
