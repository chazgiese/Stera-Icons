import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EmoteFrownIcon as RegularEmoteFrownIcon } from './emote-frown';
import { EmoteFrownIconBold } from './emote-frown-bold';
import { EmoteFrownIconFilled } from './emote-frown-filled';
import { EmoteFrownIconFilltone } from './emote-frown-filltone';
import { EmoteFrownIconLinetone } from './emote-frown-linetone';

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
    case 'filltone':
      return <EmoteFrownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EmoteFrownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularEmoteFrownIcon ref={ref} {...props} />;
  }
}));

EmoteFrownIcon.displayName = 'EmoteFrownIcon';

export { EmoteFrownIcon };
