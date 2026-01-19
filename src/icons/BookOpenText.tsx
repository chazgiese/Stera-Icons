import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookOpenTextRegular } from './BookOpenTextRegular';
import { BookOpenTextRegularDuotone } from './BookOpenTextRegularDuotone';
import { BookOpenTextBold } from './BookOpenTextBold';
import { BookOpenTextBoldDuotone } from './BookOpenTextBoldDuotone';
import { BookOpenTextFill } from './BookOpenTextFill';
import { BookOpenTextFillDuotone } from './BookOpenTextFillDuotone';

export interface BookOpenTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BookOpenText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BookOpenTextRegular } from 'stera-icons/icons/BookOpenTextRegular';
 */
const BookOpenText = memo(forwardRef<SVGSVGElement, BookOpenTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookOpenTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BookOpenTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BookOpenTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BookOpenTextFill ref={ref} {...rest} />;
  if (duotone) return <BookOpenTextRegularDuotone ref={ref} {...rest} />;
  return <BookOpenTextRegular ref={ref} {...rest} />;
}));

BookOpenText.displayName = 'BookOpenText';

// Triple export pattern (lucide-react style)
export { BookOpenText, BookOpenText as BookOpenTextIcon, BookOpenText as SiBookOpenText };
