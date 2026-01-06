import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookOpenTextIcon as RegularBookOpenTextIcon } from './book-open-text';
import { BookOpenTextIconDuotone as BookOpenTextIconDuotone } from './book-open-text-duotone';
import { BookOpenTextIconBold as BookOpenTextIconBold } from './book-open-text-bold';
import { BookOpenTextIconBoldDuotone as BookOpenTextIconBoldDuotone } from './book-open-text-bold-duotone';
import { BookOpenTextIconFill as BookOpenTextIconFill } from './book-open-text-fill';
import { BookOpenTextIconFillDuotone as BookOpenTextIconFillDuotone } from './book-open-text-fill-duotone';

export interface BookOpenTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BookOpenTextIcon = memo(forwardRef<SVGSVGElement, BookOpenTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookOpenTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BookOpenTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BookOpenTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BookOpenTextIconFill ref={ref} {...props} />;
  if (duotone) return <BookOpenTextIconDuotone ref={ref} {...props} />;
  return <RegularBookOpenTextIcon ref={ref} {...props} />;
}));

BookOpenTextIcon.displayName = 'BookOpenTextIcon';

export { BookOpenTextIcon };
