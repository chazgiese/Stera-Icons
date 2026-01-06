import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSurprisedIcon as RegularEmoteSurprisedIcon } from './emote-surprised';
import { EmoteSurprisedIconDuotone as EmoteSurprisedIconDuotone } from './emote-surprised-duotone';
import { EmoteSurprisedIconBold as EmoteSurprisedIconBold } from './emote-surprised-bold';
import { EmoteSurprisedIconBoldDuotone as EmoteSurprisedIconBoldDuotone } from './emote-surprised-bold-duotone';
import { EmoteSurprisedIconFill as EmoteSurprisedIconFill } from './emote-surprised-fill';
import { EmoteSurprisedIconFillDuotone as EmoteSurprisedIconFillDuotone } from './emote-surprised-fill-duotone';

export interface EmoteSurprisedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EmoteSurprisedIcon = memo(forwardRef<SVGSVGElement, EmoteSurprisedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteSurprisedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EmoteSurprisedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EmoteSurprisedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EmoteSurprisedIconFill ref={ref} {...props} />;
  if (duotone) return <EmoteSurprisedIconDuotone ref={ref} {...props} />;
  return <RegularEmoteSurprisedIcon ref={ref} {...props} />;
}));

EmoteSurprisedIcon.displayName = 'EmoteSurprisedIcon';

export { EmoteSurprisedIcon };
