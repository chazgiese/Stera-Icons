import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteNeutralIcon as EmoteNeutralIconRegular } from './emote-neutral';
import { EmoteNeutralIconBold } from './emote-neutral-bold';
import { EmoteNeutralIconFilled } from './emote-neutral-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <EmoteNeutralIconRegular ref={ref} {...props} />;
  }
}));

EmoteNeutralIcon.displayName = 'EmoteNeutralIcon';

export { EmoteNeutralIcon };
