import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CodeIcon as CodeIconRegular } from './code';
import { CodeIconBold } from './code-bold';
import { CodeIconFilled } from './code-filled';
import { CodeIconFilltone } from './code-filltone';
import { CodeIconLinetone } from './code-linetone';

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
    case 'filltone':
      return <CodeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CodeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CodeIconRegular ref={ref} {...props} />;
  }
}));

CodeIcon.displayName = 'CodeIcon';

export { CodeIcon };
