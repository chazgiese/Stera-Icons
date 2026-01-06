import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerIcon as RegularSpeakerIcon } from './speaker';
import { SpeakerIconDuotone as SpeakerIconDuotone } from './speaker-duotone';
import { SpeakerIconBold as SpeakerIconBold } from './speaker-bold';
import { SpeakerIconBoldDuotone as SpeakerIconBoldDuotone } from './speaker-bold-duotone';
import { SpeakerIconFill as SpeakerIconFill } from './speaker-fill';
import { SpeakerIconFillDuotone as SpeakerIconFillDuotone } from './speaker-fill-duotone';

export interface SpeakerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SpeakerIcon = memo(forwardRef<SVGSVGElement, SpeakerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SpeakerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SpeakerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SpeakerIconFill ref={ref} {...props} />;
  if (duotone) return <SpeakerIconDuotone ref={ref} {...props} />;
  return <RegularSpeakerIcon ref={ref} {...props} />;
}));

SpeakerIcon.displayName = 'SpeakerIcon';

export { SpeakerIcon };
