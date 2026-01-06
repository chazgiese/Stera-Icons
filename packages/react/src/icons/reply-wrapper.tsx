import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReplyIcon as RegularReplyIcon } from './reply';
import { ReplyIconDuotone as ReplyIconDuotone } from './reply-duotone';
import { ReplyIconBold as ReplyIconBold } from './reply-bold';
import { ReplyIconBoldDuotone as ReplyIconBoldDuotone } from './reply-bold-duotone';
import { ReplyIconFill as ReplyIconFill } from './reply-fill';
import { ReplyIconFillDuotone as ReplyIconFillDuotone } from './reply-fill-duotone';

export interface ReplyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ReplyIcon = memo(forwardRef<SVGSVGElement, ReplyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ReplyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ReplyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ReplyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ReplyIconFill ref={ref} {...props} />;
  if (duotone) return <ReplyIconDuotone ref={ref} {...props} />;
  return <RegularReplyIcon ref={ref} {...props} />;
}));

ReplyIcon.displayName = 'ReplyIcon';

export { ReplyIcon };
