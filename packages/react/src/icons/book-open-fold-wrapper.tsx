import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookOpenFoldIcon as RegularBookOpenFoldIcon } from './book-open-fold';
import { BookOpenFoldIconDuotone as BookOpenFoldIconDuotone } from './book-open-fold-duotone';
import { BookOpenFoldIconBold as BookOpenFoldIconBold } from './book-open-fold-bold';
import { BookOpenFoldIconBoldDuotone as BookOpenFoldIconBoldDuotone } from './book-open-fold-bold-duotone';
import { BookOpenFoldIconFill as BookOpenFoldIconFill } from './book-open-fold-fill';
import { BookOpenFoldIconFillDuotone as BookOpenFoldIconFillDuotone } from './book-open-fold-fill-duotone';

export interface BookOpenFoldIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BookOpenFoldIcon = memo(forwardRef<SVGSVGElement, BookOpenFoldIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookOpenFoldIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BookOpenFoldIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BookOpenFoldIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BookOpenFoldIconFill ref={ref} {...props} />;
  if (duotone) return <BookOpenFoldIconDuotone ref={ref} {...props} />;
  return <RegularBookOpenFoldIcon ref={ref} {...props} />;
}));

BookOpenFoldIcon.displayName = 'BookOpenFoldIcon';

export { BookOpenFoldIcon };
