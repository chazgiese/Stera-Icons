import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ContactBookIcon as RegularContactBookIcon } from './contact-book';
import { ContactBookIconBold } from './contact-book-bold';
import { ContactBookIconFilled } from './contact-book-filled';
import { ContactBookIconFilltone } from './contact-book-filltone';
import { ContactBookIconLinetone } from './contact-book-linetone';

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
    case 'filltone':
      return <ContactBookIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ContactBookIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularContactBookIcon ref={ref} {...props} />;
  }
}));

ContactBookIcon.displayName = 'ContactBookIcon';

export { ContactBookIcon };
