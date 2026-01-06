import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookClosedIcon as RegularBookClosedIcon } from './book-closed';
import { BookClosedIconDuotone as BookClosedIconDuotone } from './book-closed-duotone';
import { BookClosedIconBold as BookClosedIconBold } from './book-closed-bold';
import { BookClosedIconBoldDuotone as BookClosedIconBoldDuotone } from './book-closed-bold-duotone';
import { BookClosedIconFill as BookClosedIconFill } from './book-closed-fill';
import { BookClosedIconFillDuotone as BookClosedIconFillDuotone } from './book-closed-fill-duotone';

export interface BookClosedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BookClosedIcon = memo(forwardRef<SVGSVGElement, BookClosedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookClosedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BookClosedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BookClosedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BookClosedIconFill ref={ref} {...props} />;
  if (duotone) return <BookClosedIconDuotone ref={ref} {...props} />;
  return <RegularBookClosedIcon ref={ref} {...props} />;
}));

BookClosedIcon.displayName = 'BookClosedIcon';

export { BookClosedIcon };
