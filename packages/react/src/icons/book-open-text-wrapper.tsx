import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BookOpenTextIcon as RegularBookOpenTextIcon } from './book-open-text';
import { BookOpenTextIconBold } from './book-open-text-bold';
import { BookOpenTextIconFilled } from './book-open-text-filled';
import { BookOpenTextIconFilltone } from './book-open-text-filltone';
import { BookOpenTextIconLinetone } from './book-open-text-linetone';

export interface BookOpenTextIconProps extends IconProps {
  variant?: IconVariant;
}

const BookOpenTextIcon = memo(forwardRef<SVGSVGElement, BookOpenTextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BookOpenTextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BookOpenTextIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BookOpenTextIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BookOpenTextIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBookOpenTextIcon ref={ref} {...props} />;
  }
}));

BookOpenTextIcon.displayName = 'BookOpenTextIcon';

export { BookOpenTextIcon };
