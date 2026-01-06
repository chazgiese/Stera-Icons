import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookOpenIcon as RegularBookOpenIcon } from './book-open';
import { BookOpenIconDuotone as BookOpenIconDuotone } from './book-open-duotone';
import { BookOpenIconBold as BookOpenIconBold } from './book-open-bold';
import { BookOpenIconBoldDuotone as BookOpenIconBoldDuotone } from './book-open-bold-duotone';
import { BookOpenIconFill as BookOpenIconFill } from './book-open-fill';
import { BookOpenIconFillDuotone as BookOpenIconFillDuotone } from './book-open-fill-duotone';

export interface BookOpenIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BookOpenIcon = memo(forwardRef<SVGSVGElement, BookOpenIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookOpenIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BookOpenIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BookOpenIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BookOpenIconFill ref={ref} {...props} />;
  if (duotone) return <BookOpenIconDuotone ref={ref} {...props} />;
  return <RegularBookOpenIcon ref={ref} {...props} />;
}));

BookOpenIcon.displayName = 'BookOpenIcon';

export { BookOpenIcon };
