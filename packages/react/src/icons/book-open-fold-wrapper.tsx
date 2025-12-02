import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BookOpenFoldIcon as RegularBookOpenFoldIcon } from './book-open-fold';
import { BookOpenFoldIconBold } from './book-open-fold-bold';
import { BookOpenFoldIconFilled } from './book-open-fold-filled';
import { BookOpenFoldIconFilltone } from './book-open-fold-filltone';
import { BookOpenFoldIconLinetone } from './book-open-fold-linetone';

export interface BookOpenFoldIconProps extends IconProps {
  variant?: IconVariant;
}

const BookOpenFoldIcon = memo(forwardRef<SVGSVGElement, BookOpenFoldIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BookOpenFoldIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BookOpenFoldIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BookOpenFoldIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BookOpenFoldIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBookOpenFoldIcon ref={ref} {...props} />;
  }
}));

BookOpenFoldIcon.displayName = 'BookOpenFoldIcon';

export { BookOpenFoldIcon };
