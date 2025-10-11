import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteGrinIcon as EmoteGrinIconRegular } from './emote-grin';
import { EmoteGrinIconBold } from './emote-grin-bold';
import { EmoteGrinIconFilled } from './emote-grin-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface EmoteGrinIconProps extends IconProps {
  variant?: IconVariant;
}

const EmoteGrinIcon = memo(forwardRef<SVGSVGElement, EmoteGrinIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EmoteGrinIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EmoteGrinIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <EmoteGrinIconRegular ref={ref} {...props} />;
  }
}));

EmoteGrinIcon.displayName = 'EmoteGrinIcon';

export { EmoteGrinIcon };
