import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerMediumIcon as RegularSpeakerMediumIcon } from './speaker-medium';
import { SpeakerMediumIconDuotone as SpeakerMediumIconDuotone } from './speaker-medium-duotone';
import { SpeakerMediumIconBold as SpeakerMediumIconBold } from './speaker-medium-bold';
import { SpeakerMediumIconBoldDuotone as SpeakerMediumIconBoldDuotone } from './speaker-medium-bold-duotone';
import { SpeakerMediumIconFill as SpeakerMediumIconFill } from './speaker-medium-fill';
import { SpeakerMediumIconFillDuotone as SpeakerMediumIconFillDuotone } from './speaker-medium-fill-duotone';

export interface SpeakerMediumIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SpeakerMediumIcon = memo(forwardRef<SVGSVGElement, SpeakerMediumIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerMediumIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SpeakerMediumIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SpeakerMediumIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SpeakerMediumIconFill ref={ref} {...props} />;
  if (duotone) return <SpeakerMediumIconDuotone ref={ref} {...props} />;
  return <RegularSpeakerMediumIcon ref={ref} {...props} />;
}));

SpeakerMediumIcon.displayName = 'SpeakerMediumIcon';

export { SpeakerMediumIcon };
