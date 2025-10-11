import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookClosedIcon as BookClosedIconRegular } from './book-closed';
import { BookClosedIconBold } from './book-closed-bold';
import { BookClosedIconFilled } from './book-closed-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BookClosedIconRegular ref={ref} {...props} />;
  }
}));

BookClosedIcon.displayName = 'BookClosedIcon';

export { BookClosedIcon };
