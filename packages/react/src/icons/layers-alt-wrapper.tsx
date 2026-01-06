import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayersAltIcon as RegularLayersAltIcon } from './layers-alt';
import { LayersAltIconDuotone as LayersAltIconDuotone } from './layers-alt-duotone';
import { LayersAltIconBold as LayersAltIconBold } from './layers-alt-bold';
import { LayersAltIconBoldDuotone as LayersAltIconBoldDuotone } from './layers-alt-bold-duotone';
import { LayersAltIconFill as LayersAltIconFill } from './layers-alt-fill';
import { LayersAltIconFillDuotone as LayersAltIconFillDuotone } from './layers-alt-fill-duotone';

export interface LayersAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayersAltIcon = memo(forwardRef<SVGSVGElement, LayersAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayersAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayersAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayersAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayersAltIconFill ref={ref} {...props} />;
  if (duotone) return <LayersAltIconDuotone ref={ref} {...props} />;
  return <RegularLayersAltIcon ref={ref} {...props} />;
}));

LayersAltIcon.displayName = 'LayersAltIcon';

export { LayersAltIcon };
