import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CommentBubbleRegular } from './CommentBubbleRegular.js';
import { CommentBubbleRegularDuotone } from './CommentBubbleRegularDuotone.js';
import { CommentBubbleBold } from './CommentBubbleBold.js';
import { CommentBubbleBoldDuotone } from './CommentBubbleBoldDuotone.js';
import { CommentBubbleFill } from './CommentBubbleFill.js';
import { CommentBubbleFillDuotone } from './CommentBubbleFillDuotone.js';

export interface CommentBubbleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CommentBubble - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CommentBubbleRegular } from 'stera-icons/icons/CommentBubbleRegular';
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
export default CommentBubble;
