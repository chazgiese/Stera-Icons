import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CodeSquareIcon as RegularCodeSquareIcon } from './code-square';
import { CodeSquareIconBold } from './code-square-bold';
import { CodeSquareIconFilled } from './code-square-filled';
import { CodeSquareIconFilltone } from './code-square-filltone';
import { CodeSquareIconLinetone } from './code-square-linetone';

export interface CodeSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const CodeSquareIcon = memo(forwardRef<SVGSVGElement, CodeSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CodeSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CodeSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CodeSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CodeSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCodeSquareIcon ref={ref} {...props} />;
  }
}));

CodeSquareIcon.displayName = 'CodeSquareIcon';

export { CodeSquareIcon };
