import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CommentBubbleIcon as CommentBubbleIconRegular } from './comment-bubble';
import { CommentBubbleIconBold } from './comment-bubble-bold';
import { CommentBubbleIconFilled } from './comment-bubble-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CommentBubbleIconRegular ref={ref} {...props} />;
  }
}));

CommentBubbleIcon.displayName = 'CommentBubbleIcon';

export { CommentBubbleIcon };
