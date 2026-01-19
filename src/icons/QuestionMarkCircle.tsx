import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuestionMarkCircleRegular } from './QuestionMarkCircleRegular';
import { QuestionMarkCircleRegularDuotone } from './QuestionMarkCircleRegularDuotone';
import { QuestionMarkCircleBold } from './QuestionMarkCircleBold';
import { QuestionMarkCircleBoldDuotone } from './QuestionMarkCircleBoldDuotone';
import { QuestionMarkCircleFill } from './QuestionMarkCircleFill';
import { QuestionMarkCircleFillDuotone } from './QuestionMarkCircleFillDuotone';

export interface QuestionMarkCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * QuestionMarkCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { QuestionMarkCircleRegular } from 'stera-icons/icons/QuestionMarkCircleRegular';
 */
const QuestionMarkCircle = memo(forwardRef<SVGSVGElement, QuestionMarkCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuestionMarkCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <QuestionMarkCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <QuestionMarkCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <QuestionMarkCircleFill ref={ref} {...rest} />;
  if (duotone) return <QuestionMarkCircleRegularDuotone ref={ref} {...rest} />;
  return <QuestionMarkCircleRegular ref={ref} {...rest} />;
}));

QuestionMarkCircle.displayName = 'QuestionMarkCircle';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircle, QuestionMarkCircle as QuestionMarkCircleIcon, QuestionMarkCircle as SiQuestionMarkCircle };
export default QuestionMarkCircle;
