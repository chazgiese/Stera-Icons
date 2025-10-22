import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ReplyIcon as ReplyIconRegular } from './reply';
import { ReplyIconBold } from './reply-bold';
import { ReplyIconFilled } from './reply-filled';
import { ReplyIconFilltone } from './reply-filltone';
import { ReplyIconLinetone } from './reply-linetone';

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
    case 'filltone':
      return <ReplyIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ReplyIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ReplyIconRegular ref={ref} {...props} />;
  }
}));

ReplyIcon.displayName = 'ReplyIcon';

export { ReplyIcon };
