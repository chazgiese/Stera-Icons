import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GlobeIcon as RegularGlobeIcon } from './globe';
import { GlobeIconDuotone as GlobeIconDuotone } from './globe-duotone';
import { GlobeIconBold as GlobeIconBold } from './globe-bold';
import { GlobeIconBoldDuotone as GlobeIconBoldDuotone } from './globe-bold-duotone';
import { GlobeIconFill as GlobeIconFill } from './globe-fill';
import { GlobeIconFillDuotone as GlobeIconFillDuotone } from './globe-fill-duotone';

export interface GlobeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GlobeIcon = memo(forwardRef<SVGSVGElement, GlobeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GlobeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GlobeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GlobeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GlobeIconFill ref={ref} {...props} />;
  if (duotone) return <GlobeIconDuotone ref={ref} {...props} />;
  return <RegularGlobeIcon ref={ref} {...props} />;
}));

GlobeIcon.displayName = 'GlobeIcon';

export { GlobeIcon };
