import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CodeCircleIcon as CodeCircleIconRegular } from './code-circle';
import { CodeCircleIconBold } from './code-circle-bold';
import { CodeCircleIconFilled } from './code-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CodeCircleIconRegular ref={ref} {...props} />;
  }
}));

CodeCircleIcon.displayName = 'CodeCircleIcon';

export { CodeCircleIcon };
