import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CommentBubbleIcon as RegularCommentBubbleIcon } from './comment-bubble';
import { CommentBubbleIconDuotone as CommentBubbleIconDuotone } from './comment-bubble-duotone';
import { CommentBubbleIconBold as CommentBubbleIconBold } from './comment-bubble-bold';
import { CommentBubbleIconBoldDuotone as CommentBubbleIconBoldDuotone } from './comment-bubble-bold-duotone';
import { CommentBubbleIconFill as CommentBubbleIconFill } from './comment-bubble-fill';
import { CommentBubbleIconFillDuotone as CommentBubbleIconFillDuotone } from './comment-bubble-fill-duotone';

export interface CommentBubbleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CommentBubbleIcon = memo(forwardRef<SVGSVGElement, CommentBubbleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CommentBubbleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CommentBubbleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CommentBubbleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CommentBubbleIconFill ref={ref} {...props} />;
  if (duotone) return <CommentBubbleIconDuotone ref={ref} {...props} />;
  return <RegularCommentBubbleIcon ref={ref} {...props} />;
}));

CommentBubbleIcon.displayName = 'CommentBubbleIcon';

export { CommentBubbleIcon };
