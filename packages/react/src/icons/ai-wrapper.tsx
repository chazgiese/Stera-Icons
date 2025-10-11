import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AiIcon as AiIconRegular } from './ai';
import { AiIconBold } from './ai-bold';
import { AiIconFilled } from './ai-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AiIconProps extends IconProps {
  variant?: IconVariant;
}

const AiIcon = memo(forwardRef<SVGSVGElement, AiIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AiIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AiIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AiIconRegular ref={ref} {...props} />;
  }
}));

AiIcon.displayName = 'AiIcon';

export { AiIcon };
