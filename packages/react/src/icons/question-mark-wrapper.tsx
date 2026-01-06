import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuestionMarkIcon as RegularQuestionMarkIcon } from './question-mark';
import { QuestionMarkIconDuotone as QuestionMarkIconDuotone } from './question-mark-duotone';
import { QuestionMarkIconBold as QuestionMarkIconBold } from './question-mark-bold';
import { QuestionMarkIconBoldDuotone as QuestionMarkIconBoldDuotone } from './question-mark-bold-duotone';
import { QuestionMarkIconFill as QuestionMarkIconFill } from './question-mark-fill';
import { QuestionMarkIconFillDuotone as QuestionMarkIconFillDuotone } from './question-mark-fill-duotone';

export interface QuestionMarkIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const QuestionMarkIcon = memo(forwardRef<SVGSVGElement, QuestionMarkIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuestionMarkIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <QuestionMarkIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <QuestionMarkIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <QuestionMarkIconFill ref={ref} {...props} />;
  if (duotone) return <QuestionMarkIconDuotone ref={ref} {...props} />;
  return <RegularQuestionMarkIcon ref={ref} {...props} />;
}));

QuestionMarkIcon.displayName = 'QuestionMarkIcon';

export { QuestionMarkIcon };
