import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CodeSquareIcon as RegularCodeSquareIcon } from './code-square';
import { CodeSquareIconDuotone as CodeSquareIconDuotone } from './code-square-duotone';
import { CodeSquareIconBold as CodeSquareIconBold } from './code-square-bold';
import { CodeSquareIconBoldDuotone as CodeSquareIconBoldDuotone } from './code-square-bold-duotone';
import { CodeSquareIconFill as CodeSquareIconFill } from './code-square-fill';
import { CodeSquareIconFillDuotone as CodeSquareIconFillDuotone } from './code-square-fill-duotone';

export interface CodeSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CodeSquareIcon = memo(forwardRef<SVGSVGElement, CodeSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CodeSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CodeSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CodeSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CodeSquareIconFill ref={ref} {...props} />;
  if (duotone) return <CodeSquareIconDuotone ref={ref} {...props} />;
  return <RegularCodeSquareIcon ref={ref} {...props} />;
}));

CodeSquareIcon.displayName = 'CodeSquareIcon';

export { CodeSquareIcon };
