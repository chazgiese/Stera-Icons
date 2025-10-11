import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ContactBookIcon as ContactBookIconRegular } from './contact-book';
import { ContactBookIconBold } from './contact-book-bold';
import { ContactBookIconFilled } from './contact-book-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ContactBookIconProps extends IconProps {
  variant?: IconVariant;
}

const ContactBookIcon = memo(forwardRef<SVGSVGElement, ContactBookIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ContactBookIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ContactBookIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ContactBookIconRegular ref={ref} {...props} />;
  }
}));

ContactBookIcon.displayName = 'ContactBookIcon';

export { ContactBookIcon };
