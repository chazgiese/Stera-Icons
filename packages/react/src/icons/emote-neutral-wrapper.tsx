import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EmoteNeutralIcon as RegularEmoteNeutralIcon } from './emote-neutral';
import { EmoteNeutralIconBold } from './emote-neutral-bold';
import { EmoteNeutralIconFilled } from './emote-neutral-filled';
import { EmoteNeutralIconFilltone } from './emote-neutral-filltone';
import { EmoteNeutralIconLinetone } from './emote-neutral-linetone';

export interface EmoteNeutralIconProps extends IconProps {
  variant?: IconVariant;
}

const EmoteNeutralIcon = memo(forwardRef<SVGSVGElement, EmoteNeutralIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EmoteNeutralIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EmoteNeutralIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EmoteNeutralIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EmoteNeutralIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularEmoteNeutralIcon ref={ref} {...props} />;
  }
}));

EmoteNeutralIcon.displayName = 'EmoteNeutralIcon';

export { EmoteNeutralIcon };
