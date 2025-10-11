import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuestionMarkIcon as QuestionMarkIconRegular } from './question-mark';
import { QuestionMarkIconBold } from './question-mark-bold';
import { QuestionMarkIconFilled } from './question-mark-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <QuestionMarkIconRegular ref={ref} {...props} />;
  }
}));

QuestionMarkIcon.displayName = 'QuestionMarkIcon';

export { QuestionMarkIcon };
