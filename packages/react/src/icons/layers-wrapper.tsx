import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayersIcon as RegularLayersIcon } from './layers';
import { LayersIconDuotone as LayersIconDuotone } from './layers-duotone';
import { LayersIconBold as LayersIconBold } from './layers-bold';
import { LayersIconBoldDuotone as LayersIconBoldDuotone } from './layers-bold-duotone';
import { LayersIconFill as LayersIconFill } from './layers-fill';
import { LayersIconFillDuotone as LayersIconFillDuotone } from './layers-fill-duotone';

export interface LayersIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayersIcon = memo(forwardRef<SVGSVGElement, LayersIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayersIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayersIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayersIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayersIconFill ref={ref} {...props} />;
  if (duotone) return <LayersIconDuotone ref={ref} {...props} />;
  return <RegularLayersIcon ref={ref} {...props} />;
}));

LayersIcon.displayName = 'LayersIcon';

export { LayersIcon };
