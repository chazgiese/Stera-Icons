import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerMediumIcon as SpeakerMediumIconRegular } from './speaker-medium';
import { SpeakerMediumIconBold } from './speaker-medium-bold';
import { SpeakerMediumIconFilled } from './speaker-medium-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SpeakerMediumIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerMediumIcon = memo(forwardRef<SVGSVGElement, SpeakerMediumIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerMediumIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerMediumIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpeakerMediumIconRegular ref={ref} {...props} />;
  }
}));

SpeakerMediumIcon.displayName = 'SpeakerMediumIcon';

export { SpeakerMediumIcon };
