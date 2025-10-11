import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookOpenIcon as BookOpenIconRegular } from './book-open';
import { BookOpenIconBold } from './book-open-bold';
import { BookOpenIconFilled } from './book-open-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BookOpenIconRegular ref={ref} {...props} />;
  }
}));

BookOpenIcon.displayName = 'BookOpenIcon';

export { BookOpenIcon };
