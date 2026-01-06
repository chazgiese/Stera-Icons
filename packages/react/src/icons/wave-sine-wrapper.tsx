import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveSineIcon as RegularWaveSineIcon } from './wave-sine';
import { WaveSineIconDuotone as WaveSineIconDuotone } from './wave-sine-duotone';
import { WaveSineIconBold as WaveSineIconBold } from './wave-sine-bold';
import { WaveSineIconBoldDuotone as WaveSineIconBoldDuotone } from './wave-sine-bold-duotone';
import { WaveSineIconFill as WaveSineIconFill } from './wave-sine-fill';
import { WaveSineIconFillDuotone as WaveSineIconFillDuotone } from './wave-sine-fill-duotone';

export interface WaveSineIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WaveSineIcon = memo(forwardRef<SVGSVGElement, WaveSineIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WaveSineIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WaveSineIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WaveSineIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WaveSineIconFill ref={ref} {...props} />;
  if (duotone) return <WaveSineIconDuotone ref={ref} {...props} />;
  return <RegularWaveSineIcon ref={ref} {...props} />;
}));

WaveSineIcon.displayName = 'WaveSineIcon';

export { WaveSineIcon };
