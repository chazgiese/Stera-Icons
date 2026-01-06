import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayersSimpleIcon as RegularLayersSimpleIcon } from './layers-simple';
import { LayersSimpleIconDuotone as LayersSimpleIconDuotone } from './layers-simple-duotone';
import { LayersSimpleIconBold as LayersSimpleIconBold } from './layers-simple-bold';
import { LayersSimpleIconBoldDuotone as LayersSimpleIconBoldDuotone } from './layers-simple-bold-duotone';
import { LayersSimpleIconFill as LayersSimpleIconFill } from './layers-simple-fill';
import { LayersSimpleIconFillDuotone as LayersSimpleIconFillDuotone } from './layers-simple-fill-duotone';

export interface LayersSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayersSimpleIcon = memo(forwardRef<SVGSVGElement, LayersSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayersSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayersSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayersSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayersSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <LayersSimpleIconDuotone ref={ref} {...props} />;
  return <RegularLayersSimpleIcon ref={ref} {...props} />;
}));

LayersSimpleIcon.displayName = 'LayersSimpleIcon';

export { LayersSimpleIcon };
