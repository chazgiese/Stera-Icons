import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ThumbsDownIcon as ThumbsDownIconRegular } from './thumbs-down';
import { ThumbsDownIconBold } from './thumbs-down-bold';
import { ThumbsDownIconFilled } from './thumbs-down-filled';
import { ThumbsDownIconFilltone } from './thumbs-down-filltone';
import { ThumbsDownIconLinetone } from './thumbs-down-linetone';

export interface ThumbsDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ThumbsDownIcon = memo(forwardRef<SVGSVGElement, ThumbsDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ThumbsDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ThumbsDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ThumbsDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ThumbsDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ThumbsDownIconRegular ref={ref} {...props} />;
  }
}));

ThumbsDownIcon.displayName = 'ThumbsDownIcon';

export { ThumbsDownIcon };
