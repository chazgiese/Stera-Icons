import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BookOpenIcon as RegularBookOpenIcon } from './book-open';
import { BookOpenIconBold } from './book-open-bold';
import { BookOpenIconFilled } from './book-open-filled';
import { BookOpenIconFilltone } from './book-open-filltone';
import { BookOpenIconLinetone } from './book-open-linetone';

export interface BookOpenIconProps extends IconProps {
  variant?: IconVariant;
}

const BookOpenIcon = memo(forwardRef<SVGSVGElement, BookOpenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BookOpenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BookOpenIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BookOpenIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BookOpenIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBookOpenIcon ref={ref} {...props} />;
  }
}));

BookOpenIcon.displayName = 'BookOpenIcon';

export { BookOpenIcon };
