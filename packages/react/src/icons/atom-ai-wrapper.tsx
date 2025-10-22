import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AtomAiIcon as RegularAtomAiIcon } from './atom-ai';
import { AtomAiIconBold } from './atom-ai-bold';
import { AtomAiIconFilled } from './atom-ai-filled';
import { AtomAiIconFilltone } from './atom-ai-filltone';
import { AtomAiIconLinetone } from './atom-ai-linetone';

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
    case 'filltone':
      return <AtomAiIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AtomAiIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAtomAiIcon ref={ref} {...props} />;
  }
}));

AtomAiIcon.displayName = 'AtomAiIcon';

export { AtomAiIcon };
