import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReplyRegular } from './ReplyRegular';
import { ReplyRegularDuotone } from './ReplyRegularDuotone';
import { ReplyBold } from './ReplyBold';
import { ReplyBoldDuotone } from './ReplyBoldDuotone';
import { ReplyFill } from './ReplyFill';
import { ReplyFillDuotone } from './ReplyFillDuotone';

export interface ReplyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Reply with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ReplyRegular } from 'stera-icons/ReplyRegular';
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

export { Reply };
