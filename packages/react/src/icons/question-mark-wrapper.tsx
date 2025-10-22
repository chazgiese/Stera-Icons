import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { QuestionMarkIcon as RegularQuestionMarkIcon } from './question-mark';
import { QuestionMarkIconBold } from './question-mark-bold';
import { QuestionMarkIconFilled } from './question-mark-filled';
import { QuestionMarkIconFilltone } from './question-mark-filltone';
import { QuestionMarkIconLinetone } from './question-mark-linetone';

export interface QuestionMarkIconProps extends IconProps {
  variant?: IconVariant;
}

const QuestionMarkIcon = memo(forwardRef<SVGSVGElement, QuestionMarkIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <QuestionMarkIconFilled ref={ref} {...props} />;
    case 'bold':
      return <QuestionMarkIconBold ref={ref} {...props} />;
    case 'filltone':
      return <QuestionMarkIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <QuestionMarkIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularQuestionMarkIcon ref={ref} {...props} />;
  }
}));

QuestionMarkIcon.displayName = 'QuestionMarkIcon';

export { QuestionMarkIcon };
