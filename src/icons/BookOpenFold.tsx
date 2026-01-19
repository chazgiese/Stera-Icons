import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookOpenFoldRegular } from './BookOpenFoldRegular';
import { BookOpenFoldRegularDuotone } from './BookOpenFoldRegularDuotone';
import { BookOpenFoldBold } from './BookOpenFoldBold';
import { BookOpenFoldBoldDuotone } from './BookOpenFoldBoldDuotone';
import { BookOpenFoldFill } from './BookOpenFoldFill';
import { BookOpenFoldFillDuotone } from './BookOpenFoldFillDuotone';

export interface BookOpenFoldProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BookOpenFold - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BookOpenFoldRegular } from 'stera-icons/icons/BookOpenFoldRegular';
 */
const BookOpenFold = memo(forwardRef<SVGSVGElement, BookOpenFoldProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookOpenFoldBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BookOpenFoldBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BookOpenFoldFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BookOpenFoldFill ref={ref} {...rest} />;
  if (duotone) return <BookOpenFoldRegularDuotone ref={ref} {...rest} />;
  return <BookOpenFoldRegular ref={ref} {...rest} />;
}));

BookOpenFold.displayName = 'BookOpenFold';

// Triple export pattern (lucide-react style)
export { BookOpenFold, BookOpenFold as BookOpenFoldIcon, BookOpenFold as SiBookOpenFold };
