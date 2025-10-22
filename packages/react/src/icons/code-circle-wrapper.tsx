import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CodeCircleIcon as RegularCodeCircleIcon } from './code-circle';
import { CodeCircleIconBold } from './code-circle-bold';
import { CodeCircleIconFilled } from './code-circle-filled';
import { CodeCircleIconFilltone } from './code-circle-filltone';
import { CodeCircleIconLinetone } from './code-circle-linetone';

export interface CodeCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const CodeCircleIcon = memo(forwardRef<SVGSVGElement, CodeCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CodeCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CodeCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CodeCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CodeCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCodeCircleIcon ref={ref} {...props} />;
  }
}));

CodeCircleIcon.displayName = 'CodeCircleIcon';

export { CodeCircleIcon };
