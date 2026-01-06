import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerHighIcon as RegularSpeakerHighIcon } from './speaker-high';
import { SpeakerHighIconDuotone as SpeakerHighIconDuotone } from './speaker-high-duotone';
import { SpeakerHighIconBold as SpeakerHighIconBold } from './speaker-high-bold';
import { SpeakerHighIconBoldDuotone as SpeakerHighIconBoldDuotone } from './speaker-high-bold-duotone';
import { SpeakerHighIconFill as SpeakerHighIconFill } from './speaker-high-fill';
import { SpeakerHighIconFillDuotone as SpeakerHighIconFillDuotone } from './speaker-high-fill-duotone';

export interface SpeakerHighIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SpeakerHighIcon = memo(forwardRef<SVGSVGElement, SpeakerHighIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerHighIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SpeakerHighIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SpeakerHighIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SpeakerHighIconFill ref={ref} {...props} />;
  if (duotone) return <SpeakerHighIconDuotone ref={ref} {...props} />;
  return <RegularSpeakerHighIcon ref={ref} {...props} />;
}));

SpeakerHighIcon.displayName = 'SpeakerHighIcon';

export { SpeakerHighIcon };
