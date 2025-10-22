import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CommentBubbleIcon as CommentBubbleIconRegular } from './comment-bubble';
import { CommentBubbleIconBold } from './comment-bubble-bold';
import { CommentBubbleIconFilled } from './comment-bubble-filled';
import { CommentBubbleIconFilltone } from './comment-bubble-filltone';
import { CommentBubbleIconLinetone } from './comment-bubble-linetone';

export interface CommentBubbleIconProps extends IconProps {
  variant?: IconVariant;
}

const CommentBubbleIcon = memo(forwardRef<SVGSVGElement, CommentBubbleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CommentBubbleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CommentBubbleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CommentBubbleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CommentBubbleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CommentBubbleIconRegular ref={ref} {...props} />;
  }
}));

CommentBubbleIcon.displayName = 'CommentBubbleIcon';

export { CommentBubbleIcon };
