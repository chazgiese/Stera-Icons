import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CodeCircleRegular } from './CodeCircleRegular';
import { CodeCircleRegularDuotone } from './CodeCircleRegularDuotone';
import { CodeCircleBold } from './CodeCircleBold';
import { CodeCircleBoldDuotone } from './CodeCircleBoldDuotone';
import { CodeCircleFill } from './CodeCircleFill';
import { CodeCircleFillDuotone } from './CodeCircleFillDuotone';

export interface CodeCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CodeCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CodeCircleRegular } from 'stera-icons/CodeCircleRegular';
 */
const CodeCircle = memo(forwardRef<SVGSVGElement, CodeCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CodeCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CodeCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CodeCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CodeCircleFill ref={ref} {...rest} />;
  if (duotone) return <CodeCircleRegularDuotone ref={ref} {...rest} />;
  return <CodeCircleRegular ref={ref} {...rest} />;
}));

CodeCircle.displayName = 'CodeCircle';

// Triple export pattern (lucide-react style)
export { CodeCircle, CodeCircle as CodeCircleIcon, CodeCircle as SiCodeCircle };
