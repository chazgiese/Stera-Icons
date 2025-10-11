import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThumbsUpIcon as ThumbsUpIconRegular } from './thumbs-up';
import { ThumbsUpIconBold } from './thumbs-up-bold';
import { ThumbsUpIconFilled } from './thumbs-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ThumbsUpIconRegular ref={ref} {...props} />;
  }
}));

ThumbsUpIcon.displayName = 'ThumbsUpIcon';

export { ThumbsUpIcon };
