import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CodeIcon as CodeIconRegular } from './code';
import { CodeIconBold } from './code-bold';
import { CodeIconFilled } from './code-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CodeIconProps extends IconProps {
  variant?: IconVariant;
}

const CodeIcon = memo(forwardRef<SVGSVGElement, CodeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CodeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CodeIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CodeIconRegular ref={ref} {...props} />;
  }
}));

CodeIcon.displayName = 'CodeIcon';

export { CodeIcon };
