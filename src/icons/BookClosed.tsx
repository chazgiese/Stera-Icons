import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookClosedRegular } from './BookClosedRegular';
import { BookClosedRegularDuotone } from './BookClosedRegularDuotone';
import { BookClosedBold } from './BookClosedBold';
import { BookClosedBoldDuotone } from './BookClosedBoldDuotone';
import { BookClosedFill } from './BookClosedFill';
import { BookClosedFillDuotone } from './BookClosedFillDuotone';

export interface BookClosedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BookClosed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BookClosedRegular } from 'stera-icons/icons/BookClosedRegular';
 */
const BookClosed = memo(forwardRef<SVGSVGElement, BookClosedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookClosedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BookClosedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BookClosedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BookClosedFill ref={ref} {...rest} />;
  if (duotone) return <BookClosedRegularDuotone ref={ref} {...rest} />;
  return <BookClosedRegular ref={ref} {...rest} />;
}));

BookClosed.displayName = 'BookClosed';

// Triple export pattern (lucide-react style)
export { BookClosed, BookClosed as BookClosedIcon, BookClosed as SiBookClosed };
