import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteFrownIcon as RegularEmoteFrownIcon } from './emote-frown';
import { EmoteFrownIconDuotone as EmoteFrownIconDuotone } from './emote-frown-duotone';
import { EmoteFrownIconBold as EmoteFrownIconBold } from './emote-frown-bold';
import { EmoteFrownIconBoldDuotone as EmoteFrownIconBoldDuotone } from './emote-frown-bold-duotone';
import { EmoteFrownIconFill as EmoteFrownIconFill } from './emote-frown-fill';
import { EmoteFrownIconFillDuotone as EmoteFrownIconFillDuotone } from './emote-frown-fill-duotone';

export interface EmoteFrownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EmoteFrownIcon = memo(forwardRef<SVGSVGElement, EmoteFrownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteFrownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EmoteFrownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EmoteFrownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EmoteFrownIconFill ref={ref} {...props} />;
  if (duotone) return <EmoteFrownIconDuotone ref={ref} {...props} />;
  return <RegularEmoteFrownIcon ref={ref} {...props} />;
}));

EmoteFrownIcon.displayName = 'EmoteFrownIcon';

export { EmoteFrownIcon };
