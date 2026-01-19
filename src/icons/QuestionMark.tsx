import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuestionMarkRegular } from './QuestionMarkRegular';
import { QuestionMarkRegularDuotone } from './QuestionMarkRegularDuotone';
import { QuestionMarkBold } from './QuestionMarkBold';
import { QuestionMarkBoldDuotone } from './QuestionMarkBoldDuotone';
import { QuestionMarkFill } from './QuestionMarkFill';
import { QuestionMarkFillDuotone } from './QuestionMarkFillDuotone';

export interface QuestionMarkProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * QuestionMark - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { QuestionMarkRegular } from 'stera-icons/icons/QuestionMarkRegular';
 */
const QuestionMark = memo(forwardRef<SVGSVGElement, QuestionMarkProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuestionMarkBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <QuestionMarkBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <QuestionMarkFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <QuestionMarkFill ref={ref} {...rest} />;
  if (duotone) return <QuestionMarkRegularDuotone ref={ref} {...rest} />;
  return <QuestionMarkRegular ref={ref} {...rest} />;
}));

QuestionMark.displayName = 'QuestionMark';

// Triple export pattern (lucide-react style)
export { QuestionMark, QuestionMark as QuestionMarkIcon, QuestionMark as SiQuestionMark };
export default QuestionMark;
