import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSadIcon as EmoteSadIconRegular } from './emote-sad';
import { EmoteSadIconBold } from './emote-sad-bold';
import { EmoteSadIconFilled } from './emote-sad-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface EmoteSadIconProps extends IconProps {
  variant?: IconVariant;
}

const EmoteSadIcon = memo(forwardRef<SVGSVGElement, EmoteSadIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EmoteSadIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EmoteSadIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <EmoteSadIconRegular ref={ref} {...props} />;
  }
}));

EmoteSadIcon.displayName = 'EmoteSadIcon';

export { EmoteSadIcon };
