import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ReplyRegular } from './ReplyRegular.js';
import { ReplyRegularDuotone } from './ReplyRegularDuotone.js';
import { ReplyBold } from './ReplyBold.js';
import { ReplyBoldDuotone } from './ReplyBoldDuotone.js';
import { ReplyFill } from './ReplyFill.js';
import { ReplyFillDuotone } from './ReplyFillDuotone.js';

export interface ReplyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Reply - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ReplyRegular } from 'stera-icons/icons/ReplyRegular';
 */
const Reply = memo(forwardRef<SVGSVGElement, ReplyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ReplyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ReplyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ReplyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ReplyFill ref={ref} {...rest} />;
  if (duotone) return <ReplyRegularDuotone ref={ref} {...rest} />;
  return <ReplyRegular ref={ref} {...rest} />;
}));

Reply.displayName = 'Reply';

// Triple export pattern (lucide-react style)
export { Reply, Reply as ReplyIcon, Reply as SiReply };
export default Reply;
