import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSadIcon as RegularEmoteSadIcon } from './emote-sad';
import { EmoteSadIconDuotone as EmoteSadIconDuotone } from './emote-sad-duotone';
import { EmoteSadIconBold as EmoteSadIconBold } from './emote-sad-bold';
import { EmoteSadIconBoldDuotone as EmoteSadIconBoldDuotone } from './emote-sad-bold-duotone';
import { EmoteSadIconFill as EmoteSadIconFill } from './emote-sad-fill';
import { EmoteSadIconFillDuotone as EmoteSadIconFillDuotone } from './emote-sad-fill-duotone';

export interface EmoteSadIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EmoteSadIcon = memo(forwardRef<SVGSVGElement, EmoteSadIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteSadIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EmoteSadIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EmoteSadIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EmoteSadIconFill ref={ref} {...props} />;
  if (duotone) return <EmoteSadIconDuotone ref={ref} {...props} />;
  return <RegularEmoteSadIcon ref={ref} {...props} />;
}));

EmoteSadIcon.displayName = 'EmoteSadIcon';

export { EmoteSadIcon };
