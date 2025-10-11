import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomAiIcon as AtomAiIconRegular } from './atom-ai';
import { AtomAiIconBold } from './atom-ai-bold';
import { AtomAiIconFilled } from './atom-ai-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AtomAiIconProps extends IconProps {
  variant?: IconVariant;
}

const AtomAiIcon = memo(forwardRef<SVGSVGElement, AtomAiIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AtomAiIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AtomAiIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AtomAiIconRegular ref={ref} {...props} />;
  }
}));

AtomAiIcon.displayName = 'AtomAiIcon';

export { AtomAiIcon };
