import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteFrownIcon as EmoteFrownIconRegular } from './emote-frown';
import { EmoteFrownIconBold } from './emote-frown-bold';
import { EmoteFrownIconFilled } from './emote-frown-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface EmoteFrownIconProps extends IconProps {
  variant?: IconVariant;
}

const EmoteFrownIcon = memo(forwardRef<SVGSVGElement, EmoteFrownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EmoteFrownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EmoteFrownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <EmoteFrownIconRegular ref={ref} {...props} />;
  }
}));

EmoteFrownIcon.displayName = 'EmoteFrownIcon';

export { EmoteFrownIcon };
