import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EmoteSmileIcon as RegularEmoteSmileIcon } from './emote-smile';
import { EmoteSmileIconBold } from './emote-smile-bold';
import { EmoteSmileIconFilled } from './emote-smile-filled';
import { EmoteSmileIconFilltone } from './emote-smile-filltone';
import { EmoteSmileIconLinetone } from './emote-smile-linetone';

export interface EmoteSmileIconProps extends IconProps {
  variant?: IconVariant;
}

const EmoteSmileIcon = memo(forwardRef<SVGSVGElement, EmoteSmileIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EmoteSmileIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EmoteSmileIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EmoteSmileIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EmoteSmileIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularEmoteSmileIcon ref={ref} {...props} />;
  }
}));

EmoteSmileIcon.displayName = 'EmoteSmileIcon';

export { EmoteSmileIcon };
