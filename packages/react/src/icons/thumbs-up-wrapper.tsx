import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ThumbsUpIcon as ThumbsUpIconRegular } from './thumbs-up';
import { ThumbsUpIconBold } from './thumbs-up-bold';
import { ThumbsUpIconFilled } from './thumbs-up-filled';
import { ThumbsUpIconFilltone } from './thumbs-up-filltone';
import { ThumbsUpIconLinetone } from './thumbs-up-linetone';

export interface ThumbsUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ThumbsUpIcon = memo(forwardRef<SVGSVGElement, ThumbsUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ThumbsUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ThumbsUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ThumbsUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ThumbsUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ThumbsUpIconRegular ref={ref} {...props} />;
  }
}));

ThumbsUpIcon.displayName = 'ThumbsUpIcon';

export { ThumbsUpIcon };
