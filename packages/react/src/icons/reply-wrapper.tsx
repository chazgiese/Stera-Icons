import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReplyIcon as ReplyIconRegular } from './reply';
import { ReplyIconBold } from './reply-bold';
import { ReplyIconFilled } from './reply-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ReplyIconProps extends IconProps {
  variant?: IconVariant;
}

const ReplyIcon = memo(forwardRef<SVGSVGElement, ReplyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ReplyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ReplyIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ReplyIconRegular ref={ref} {...props} />;
  }
}));

ReplyIcon.displayName = 'ReplyIcon';

export { ReplyIcon };
