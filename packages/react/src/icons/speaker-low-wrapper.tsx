import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerLowIcon as SpeakerLowIconRegular } from './speaker-low';
import { SpeakerLowIconBold } from './speaker-low-bold';
import { SpeakerLowIconFilled } from './speaker-low-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SpeakerLowIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerLowIcon = memo(forwardRef<SVGSVGElement, SpeakerLowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerLowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerLowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpeakerLowIconRegular ref={ref} {...props} />;
  }
}));

SpeakerLowIcon.displayName = 'SpeakerLowIcon';

export { SpeakerLowIcon };
