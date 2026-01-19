import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookOpenRegular } from './BookOpenRegular';
import { BookOpenRegularDuotone } from './BookOpenRegularDuotone';
import { BookOpenBold } from './BookOpenBold';
import { BookOpenBoldDuotone } from './BookOpenBoldDuotone';
import { BookOpenFill } from './BookOpenFill';
import { BookOpenFillDuotone } from './BookOpenFillDuotone';

export interface BookOpenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BookOpen - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BookOpenRegular } from 'stera-icons/icons/BookOpenRegular';
 */
const BookOpen = memo(forwardRef<SVGSVGElement, BookOpenProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookOpenBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BookOpenBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BookOpenFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BookOpenFill ref={ref} {...rest} />;
  if (duotone) return <BookOpenRegularDuotone ref={ref} {...rest} />;
  return <BookOpenRegular ref={ref} {...rest} />;
}));

BookOpen.displayName = 'BookOpen';

// Triple export pattern (lucide-react style)
export { BookOpen, BookOpen as BookOpenIcon, BookOpen as SiBookOpen };
