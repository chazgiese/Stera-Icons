import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ContactBookIcon as RegularContactBookIcon } from './contact-book';
import { ContactBookIconDuotone as ContactBookIconDuotone } from './contact-book-duotone';
import { ContactBookIconBold as ContactBookIconBold } from './contact-book-bold';
import { ContactBookIconBoldDuotone as ContactBookIconBoldDuotone } from './contact-book-bold-duotone';
import { ContactBookIconFill as ContactBookIconFill } from './contact-book-fill';
import { ContactBookIconFillDuotone as ContactBookIconFillDuotone } from './contact-book-fill-duotone';

export interface ContactBookIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ContactBookIcon = memo(forwardRef<SVGSVGElement, ContactBookIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ContactBookIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ContactBookIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ContactBookIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ContactBookIconFill ref={ref} {...props} />;
  if (duotone) return <ContactBookIconDuotone ref={ref} {...props} />;
  return <RegularContactBookIcon ref={ref} {...props} />;
}));

ContactBookIcon.displayName = 'ContactBookIcon';

export { ContactBookIcon };
