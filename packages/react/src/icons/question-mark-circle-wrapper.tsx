import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuestionMarkCircleIcon as RegularQuestionMarkCircleIcon } from './question-mark-circle';
import { QuestionMarkCircleIconDuotone as QuestionMarkCircleIconDuotone } from './question-mark-circle-duotone';
import { QuestionMarkCircleIconBold as QuestionMarkCircleIconBold } from './question-mark-circle-bold';
import { QuestionMarkCircleIconBoldDuotone as QuestionMarkCircleIconBoldDuotone } from './question-mark-circle-bold-duotone';
import { QuestionMarkCircleIconFill as QuestionMarkCircleIconFill } from './question-mark-circle-fill';
import { QuestionMarkCircleIconFillDuotone as QuestionMarkCircleIconFillDuotone } from './question-mark-circle-fill-duotone';

export interface QuestionMarkCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const QuestionMarkCircleIcon = memo(forwardRef<SVGSVGElement, QuestionMarkCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuestionMarkCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <QuestionMarkCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <QuestionMarkCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <QuestionMarkCircleIconFill ref={ref} {...props} />;
  if (duotone) return <QuestionMarkCircleIconDuotone ref={ref} {...props} />;
  return <RegularQuestionMarkCircleIcon ref={ref} {...props} />;
}));

QuestionMarkCircleIcon.displayName = 'QuestionMarkCircleIcon';

export { QuestionMarkCircleIcon };
