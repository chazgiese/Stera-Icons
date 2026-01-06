import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WandIcon as RegularWandIcon } from './wand';
import { WandIconDuotone as WandIconDuotone } from './wand-duotone';
import { WandIconBold as WandIconBold } from './wand-bold';
import { WandIconBoldDuotone as WandIconBoldDuotone } from './wand-bold-duotone';
import { WandIconFill as WandIconFill } from './wand-fill';
import { WandIconFillDuotone as WandIconFillDuotone } from './wand-fill-duotone';

export interface WandIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WandIcon = memo(forwardRef<SVGSVGElement, WandIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WandIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WandIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WandIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WandIconFill ref={ref} {...props} />;
  if (duotone) return <WandIconDuotone ref={ref} {...props} />;
  return <RegularWandIcon ref={ref} {...props} />;
}));

WandIcon.displayName = 'WandIcon';

export { WandIcon };
