import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSmileIcon as EmoteSmileIconRegular } from './emote-smile';
import { EmoteSmileIconBold } from './emote-smile-bold';
import { EmoteSmileIconFilled } from './emote-smile-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <EmoteSmileIconRegular ref={ref} {...props} />;
  }
}));

EmoteSmileIcon.displayName = 'EmoteSmileIcon';

export { EmoteSmileIcon };
