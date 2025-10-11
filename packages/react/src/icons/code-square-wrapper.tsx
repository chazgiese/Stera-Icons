import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CodeSquareIcon as CodeSquareIconRegular } from './code-square';
import { CodeSquareIconBold } from './code-square-bold';
import { CodeSquareIconFilled } from './code-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CodeSquareIconRegular ref={ref} {...props} />;
  }
}));

CodeSquareIcon.displayName = 'CodeSquareIcon';

export { CodeSquareIcon };
