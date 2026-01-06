import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerLowIcon as RegularSpeakerLowIcon } from './speaker-low';
import { SpeakerLowIconDuotone as SpeakerLowIconDuotone } from './speaker-low-duotone';
import { SpeakerLowIconBold as SpeakerLowIconBold } from './speaker-low-bold';
import { SpeakerLowIconBoldDuotone as SpeakerLowIconBoldDuotone } from './speaker-low-bold-duotone';
import { SpeakerLowIconFill as SpeakerLowIconFill } from './speaker-low-fill';
import { SpeakerLowIconFillDuotone as SpeakerLowIconFillDuotone } from './speaker-low-fill-duotone';

export interface SpeakerLowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SpeakerLowIcon = memo(forwardRef<SVGSVGElement, SpeakerLowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerLowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SpeakerLowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SpeakerLowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SpeakerLowIconFill ref={ref} {...props} />;
  if (duotone) return <SpeakerLowIconDuotone ref={ref} {...props} />;
  return <RegularSpeakerLowIcon ref={ref} {...props} />;
}));

SpeakerLowIcon.displayName = 'SpeakerLowIcon';

export { SpeakerLowIcon };
