import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerOffIcon as RegularSpeakerOffIcon } from './speaker-off';
import { SpeakerOffIconDuotone as SpeakerOffIconDuotone } from './speaker-off-duotone';
import { SpeakerOffIconBold as SpeakerOffIconBold } from './speaker-off-bold';
import { SpeakerOffIconBoldDuotone as SpeakerOffIconBoldDuotone } from './speaker-off-bold-duotone';
import { SpeakerOffIconFill as SpeakerOffIconFill } from './speaker-off-fill';
import { SpeakerOffIconFillDuotone as SpeakerOffIconFillDuotone } from './speaker-off-fill-duotone';

export interface SpeakerOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SpeakerOffIcon = memo(forwardRef<SVGSVGElement, SpeakerOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SpeakerOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SpeakerOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SpeakerOffIconFill ref={ref} {...props} />;
  if (duotone) return <SpeakerOffIconDuotone ref={ref} {...props} />;
  return <RegularSpeakerOffIcon ref={ref} {...props} />;
}));

SpeakerOffIcon.displayName = 'SpeakerOffIcon';

export { SpeakerOffIcon };
