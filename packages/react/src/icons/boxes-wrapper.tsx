import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoxesIcon as RegularBoxesIcon } from './boxes';
import { BoxesIconDuotone as BoxesIconDuotone } from './boxes-duotone';
import { BoxesIconBold as BoxesIconBold } from './boxes-bold';
import { BoxesIconBoldDuotone as BoxesIconBoldDuotone } from './boxes-bold-duotone';
import { BoxesIconFill as BoxesIconFill } from './boxes-fill';
import { BoxesIconFillDuotone as BoxesIconFillDuotone } from './boxes-fill-duotone';

export interface BoxesIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BoxesIcon = memo(forwardRef<SVGSVGElement, BoxesIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoxesIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BoxesIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BoxesIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BoxesIconFill ref={ref} {...props} />;
  if (duotone) return <BoxesIconDuotone ref={ref} {...props} />;
  return <RegularBoxesIcon ref={ref} {...props} />;
}));

BoxesIcon.displayName = 'BoxesIcon';

export { BoxesIcon };
