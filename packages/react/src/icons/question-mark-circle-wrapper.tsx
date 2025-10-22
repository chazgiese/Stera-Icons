import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { QuestionMarkCircleIcon as RegularQuestionMarkCircleIcon } from './question-mark-circle';
import { QuestionMarkCircleIconBold } from './question-mark-circle-bold';
import { QuestionMarkCircleIconFilled } from './question-mark-circle-filled';
import { QuestionMarkCircleIconFilltone } from './question-mark-circle-filltone';
import { QuestionMarkCircleIconLinetone } from './question-mark-circle-linetone';

export interface QuestionMarkCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const QuestionMarkCircleIcon = memo(forwardRef<SVGSVGElement, QuestionMarkCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <QuestionMarkCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <QuestionMarkCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <QuestionMarkCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <QuestionMarkCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularQuestionMarkCircleIcon ref={ref} {...props} />;
  }
}));

QuestionMarkCircleIcon.displayName = 'QuestionMarkCircleIcon';

export { QuestionMarkCircleIcon };
