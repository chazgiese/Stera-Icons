import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuestionMarkCircleIcon as QuestionMarkCircleIconRegular } from './question-mark-circle';
import { QuestionMarkCircleIconBold } from './question-mark-circle-bold';
import { QuestionMarkCircleIconFilled } from './question-mark-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <QuestionMarkCircleIconRegular ref={ref} {...props} />;
  }
}));

QuestionMarkCircleIcon.displayName = 'QuestionMarkCircleIcon';

export { QuestionMarkCircleIcon };
