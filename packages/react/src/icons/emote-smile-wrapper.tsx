import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSmileIcon as RegularEmoteSmileIcon } from './emote-smile';
import { EmoteSmileIconDuotone as EmoteSmileIconDuotone } from './emote-smile-duotone';
import { EmoteSmileIconBold as EmoteSmileIconBold } from './emote-smile-bold';
import { EmoteSmileIconBoldDuotone as EmoteSmileIconBoldDuotone } from './emote-smile-bold-duotone';
import { EmoteSmileIconFill as EmoteSmileIconFill } from './emote-smile-fill';
import { EmoteSmileIconFillDuotone as EmoteSmileIconFillDuotone } from './emote-smile-fill-duotone';

export interface EmoteSmileIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EmoteSmileIcon = memo(forwardRef<SVGSVGElement, EmoteSmileIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteSmileIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EmoteSmileIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EmoteSmileIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EmoteSmileIconFill ref={ref} {...props} />;
  if (duotone) return <EmoteSmileIconDuotone ref={ref} {...props} />;
  return <RegularEmoteSmileIcon ref={ref} {...props} />;
}));

EmoteSmileIcon.displayName = 'EmoteSmileIcon';

export { EmoteSmileIcon };
