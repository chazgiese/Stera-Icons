import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BookClosedIcon as RegularBookClosedIcon } from './book-closed';
import { BookClosedIconBold } from './book-closed-bold';
import { BookClosedIconFilled } from './book-closed-filled';
import { BookClosedIconFilltone } from './book-closed-filltone';
import { BookClosedIconLinetone } from './book-closed-linetone';

export interface BookClosedIconProps extends IconProps {
  variant?: IconVariant;
}

const BookClosedIcon = memo(forwardRef<SVGSVGElement, BookClosedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BookClosedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BookClosedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BookClosedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BookClosedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBookClosedIcon ref={ref} {...props} />;
  }
}));

BookClosedIcon.displayName = 'BookClosedIcon';

export { BookClosedIcon };
