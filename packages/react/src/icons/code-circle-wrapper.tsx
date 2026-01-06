import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CodeCircleIcon as RegularCodeCircleIcon } from './code-circle';
import { CodeCircleIconDuotone as CodeCircleIconDuotone } from './code-circle-duotone';
import { CodeCircleIconBold as CodeCircleIconBold } from './code-circle-bold';
import { CodeCircleIconBoldDuotone as CodeCircleIconBoldDuotone } from './code-circle-bold-duotone';
import { CodeCircleIconFill as CodeCircleIconFill } from './code-circle-fill';
import { CodeCircleIconFillDuotone as CodeCircleIconFillDuotone } from './code-circle-fill-duotone';

export interface CodeCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CodeCircleIcon = memo(forwardRef<SVGSVGElement, CodeCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CodeCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CodeCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CodeCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CodeCircleIconFill ref={ref} {...props} />;
  if (duotone) return <CodeCircleIconDuotone ref={ref} {...props} />;
  return <RegularCodeCircleIcon ref={ref} {...props} />;
}));

CodeCircleIcon.displayName = 'CodeCircleIcon';

export { CodeCircleIcon };
