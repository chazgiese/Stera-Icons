import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveTriangleIcon as RegularWaveTriangleIcon } from './wave-triangle';
import { WaveTriangleIconDuotone as WaveTriangleIconDuotone } from './wave-triangle-duotone';
import { WaveTriangleIconBold as WaveTriangleIconBold } from './wave-triangle-bold';
import { WaveTriangleIconBoldDuotone as WaveTriangleIconBoldDuotone } from './wave-triangle-bold-duotone';
import { WaveTriangleIconFill as WaveTriangleIconFill } from './wave-triangle-fill';
import { WaveTriangleIconFillDuotone as WaveTriangleIconFillDuotone } from './wave-triangle-fill-duotone';

export interface WaveTriangleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WaveTriangleIcon = memo(forwardRef<SVGSVGElement, WaveTriangleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WaveTriangleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WaveTriangleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WaveTriangleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WaveTriangleIconFill ref={ref} {...props} />;
  if (duotone) return <WaveTriangleIconDuotone ref={ref} {...props} />;
  return <RegularWaveTriangleIcon ref={ref} {...props} />;
}));

WaveTriangleIcon.displayName = 'WaveTriangleIcon';

export { WaveTriangleIcon };
