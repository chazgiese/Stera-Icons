import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveSquareIcon as RegularWaveSquareIcon } from './wave-square';
import { WaveSquareIconDuotone as WaveSquareIconDuotone } from './wave-square-duotone';
import { WaveSquareIconBold as WaveSquareIconBold } from './wave-square-bold';
import { WaveSquareIconBoldDuotone as WaveSquareIconBoldDuotone } from './wave-square-bold-duotone';
import { WaveSquareIconFill as WaveSquareIconFill } from './wave-square-fill';
import { WaveSquareIconFillDuotone as WaveSquareIconFillDuotone } from './wave-square-fill-duotone';

export interface WaveSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WaveSquareIcon = memo(forwardRef<SVGSVGElement, WaveSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WaveSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WaveSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WaveSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WaveSquareIconFill ref={ref} {...props} />;
  if (duotone) return <WaveSquareIconDuotone ref={ref} {...props} />;
  return <RegularWaveSquareIcon ref={ref} {...props} />;
}));

WaveSquareIcon.displayName = 'WaveSquareIcon';

export { WaveSquareIcon };
