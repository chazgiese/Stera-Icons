import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookFillDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contact-book-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04h-4.4q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47L5.28 17H7a1 1 0 1 0 0-2H5.25v-2H7a1 1 0 1 0 0-2H5.25V9H7a1 1 0 1 0 0-2H5.28l.01-.23c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM13.5 8a2.5 2.5 0 0 0-1.67 4.36c-.78.36-1.42.96-1.75 1.76A1 1 0 0 0 11 15.5h5a1 1 0 0 0 .92-1.38c-.33-.8-.97-1.4-1.75-1.76A2.49 2.49 0 0 0 13.5 8" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7 15a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM13.5 8a2.5 2.5 0 0 1 1.67 4.36c.78.36 1.42.96 1.75 1.76A1 1 0 0 1 16 15.5h-5a1 1 0 0 1-.92-1.38c.33-.8.97-1.4 1.75-1.76A2.49 2.49 0 0 1 13.5 8M7 11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM7 7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ContactBookFillDuotone.displayName = 'ContactBookFillDuotone';

// Triple export pattern (lucide-react style)
export { ContactBookFillDuotone, ContactBookFillDuotone as ContactBookFillDuotoneIcon, ContactBookFillDuotone as SiContactBookFillDuotone };
export default ContactBookFillDuotone;
export type { ContactBookFillDuotoneProps };
