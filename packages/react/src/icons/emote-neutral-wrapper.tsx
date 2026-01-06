import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteNeutralIcon as RegularEmoteNeutralIcon } from './emote-neutral';
import { EmoteNeutralIconDuotone as EmoteNeutralIconDuotone } from './emote-neutral-duotone';
import { EmoteNeutralIconBold as EmoteNeutralIconBold } from './emote-neutral-bold';
import { EmoteNeutralIconBoldDuotone as EmoteNeutralIconBoldDuotone } from './emote-neutral-bold-duotone';
import { EmoteNeutralIconFill as EmoteNeutralIconFill } from './emote-neutral-fill';
import { EmoteNeutralIconFillDuotone as EmoteNeutralIconFillDuotone } from './emote-neutral-fill-duotone';

export interface EmoteNeutralIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EmoteNeutralIcon = memo(forwardRef<SVGSVGElement, EmoteNeutralIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteNeutralIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EmoteNeutralIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EmoteNeutralIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EmoteNeutralIconFill ref={ref} {...props} />;
  if (duotone) return <EmoteNeutralIconDuotone ref={ref} {...props} />;
  return <RegularEmoteNeutralIcon ref={ref} {...props} />;
}));

EmoteNeutralIcon.displayName = 'EmoteNeutralIcon';

export { EmoteNeutralIcon };
