import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerHighIcon as SpeakerHighIconRegular } from './speaker-high';
import { SpeakerHighIconBold } from './speaker-high-bold';
import { SpeakerHighIconFilled } from './speaker-high-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SpeakerHighIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerHighIcon = memo(forwardRef<SVGSVGElement, SpeakerHighIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerHighIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerHighIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpeakerHighIconRegular ref={ref} {...props} />;
  }
}));

SpeakerHighIcon.displayName = 'SpeakerHighIcon';

export { SpeakerHighIcon };
