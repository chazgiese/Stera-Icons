import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contact-book-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-4.4q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57L5.03 17H4a1 1 0 1 1 0-2h1v-2H4a1 1 0 1 1 0-2h1V9H4a1 1 0 1 1 0-2h1.03l.01-.25a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q9.57 3 10.8 3zm-4.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82V7H8a1 1 0 0 1 0 2H7v2h1a1 1 0 1 1 0 2H7v2h1a1 1 0 1 1 0 2h-.97v.09c.04.44.1.66.19.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 5 16.06 5 15.2 5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.5 8a2.5 2.5 0 0 1 1.67 4.36c.78.36 1.42.96 1.75 1.76A1 1 0 0 1 16 15.5h-5a1 1 0 0 1-.92-1.38c.33-.8.97-1.4 1.75-1.76A2.49 2.49 0 0 1 13.5 8" />
    </IconBase>
  ))
);

ContactBookBoldDuotone.displayName = 'ContactBookBoldDuotone';

// Triple export pattern (lucide-react style)
export { ContactBookBoldDuotone, ContactBookBoldDuotone as ContactBookBoldDuotoneIcon, ContactBookBoldDuotone as SiContactBookBoldDuotone };
export default ContactBookBoldDuotone;
export type { ContactBookBoldDuotoneProps };
