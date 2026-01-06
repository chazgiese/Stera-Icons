import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CodeIcon as RegularCodeIcon } from './code';
import { CodeIconDuotone as CodeIconDuotone } from './code-duotone';
import { CodeIconBold as CodeIconBold } from './code-bold';
import { CodeIconBoldDuotone as CodeIconBoldDuotone } from './code-bold-duotone';
import { CodeIconFill as CodeIconFill } from './code-fill';
import { CodeIconFillDuotone as CodeIconFillDuotone } from './code-fill-duotone';

export interface CodeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CodeIcon = memo(forwardRef<SVGSVGElement, CodeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CodeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CodeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CodeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CodeIconFill ref={ref} {...props} />;
  if (duotone) return <CodeIconDuotone ref={ref} {...props} />;
  return <RegularCodeIcon ref={ref} {...props} />;
}));

CodeIcon.displayName = 'CodeIcon';

export { CodeIcon };
