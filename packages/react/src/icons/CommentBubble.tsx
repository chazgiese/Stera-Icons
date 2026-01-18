import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CommentBubbleRegular } from './CommentBubbleRegular';
import { CommentBubbleRegularDuotone } from './CommentBubbleRegularDuotone';
import { CommentBubbleBold } from './CommentBubbleBold';
import { CommentBubbleBoldDuotone } from './CommentBubbleBoldDuotone';
import { CommentBubbleFill } from './CommentBubbleFill';
import { CommentBubbleFillDuotone } from './CommentBubbleFillDuotone';

export interface CommentBubbleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CommentBubble - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CommentBubbleRegular } from 'stera-icons/CommentBubbleRegular';
 */
const CommentBubble = memo(forwardRef<SVGSVGElement, CommentBubbleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CommentBubbleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CommentBubbleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CommentBubbleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CommentBubbleFill ref={ref} {...rest} />;
  if (duotone) return <CommentBubbleRegularDuotone ref={ref} {...rest} />;
  return <CommentBubbleRegular ref={ref} {...rest} />;
}));

CommentBubble.displayName = 'CommentBubble';

// Triple export pattern (lucide-react style)
export { CommentBubble, CommentBubble as CommentBubbleIcon, CommentBubble as SiCommentBubble };
