import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ContactBookRegular } from './ContactBookRegular';
import { ContactBookRegularDuotone } from './ContactBookRegularDuotone';
import { ContactBookBold } from './ContactBookBold';
import { ContactBookBoldDuotone } from './ContactBookBoldDuotone';
import { ContactBookFill } from './ContactBookFill';
import { ContactBookFillDuotone } from './ContactBookFillDuotone';

export interface ContactBookProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ContactBook with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ContactBookRegular } from 'stera-icons/ContactBookRegular';
 */
const ContactBook = memo(forwardRef<SVGSVGElement, ContactBookProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ContactBookBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ContactBookBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ContactBookFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ContactBookFill ref={ref} {...rest} />;
  if (duotone) return <ContactBookRegularDuotone ref={ref} {...rest} />;
  return <ContactBookRegular ref={ref} {...rest} />;
}));

ContactBook.displayName = 'ContactBook';

export { ContactBook };
