import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerIcon as SpeakerIconRegular } from './speaker';
import { SpeakerIconBold } from './speaker-bold';
import { SpeakerIconFilled } from './speaker-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SpeakerIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerIcon = memo(forwardRef<SVGSVGElement, SpeakerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpeakerIconRegular ref={ref} {...props} />;
  }
}));

SpeakerIcon.displayName = 'SpeakerIcon';

export { SpeakerIcon };
