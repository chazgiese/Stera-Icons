import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteGrinIcon as RegularEmoteGrinIcon } from './emote-grin';
import { EmoteGrinIconDuotone as EmoteGrinIconDuotone } from './emote-grin-duotone';
import { EmoteGrinIconBold as EmoteGrinIconBold } from './emote-grin-bold';
import { EmoteGrinIconBoldDuotone as EmoteGrinIconBoldDuotone } from './emote-grin-bold-duotone';
import { EmoteGrinIconFill as EmoteGrinIconFill } from './emote-grin-fill';
import { EmoteGrinIconFillDuotone as EmoteGrinIconFillDuotone } from './emote-grin-fill-duotone';

export interface EmoteGrinIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EmoteGrinIcon = memo(forwardRef<SVGSVGElement, EmoteGrinIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteGrinIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EmoteGrinIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EmoteGrinIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EmoteGrinIconFill ref={ref} {...props} />;
  if (duotone) return <EmoteGrinIconDuotone ref={ref} {...props} />;
  return <RegularEmoteGrinIcon ref={ref} {...props} />;
}));

EmoteGrinIcon.displayName = 'EmoteGrinIcon';

export { EmoteGrinIcon };
