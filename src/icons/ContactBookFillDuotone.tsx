import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookFillDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contact-book-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 15.25 1 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 2.99 8.4 3zM17 19h.2c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82q.04-.52.04-1.42h-4zM9.5 7.5a3 3 0 0 0-1.8 5.4 4 4 0 0 0-2.14 2.25 1 1 0 0 0 .94 1.35h6a1 1 0 0 0 .94-1.35c-.38-1-1.16-1.8-2.14-2.26A3 3 0 0 0 9.5 7.5m7.5 6.17h4v-3.34h-4zm0-5.34h4q.01-.89-.04-1.42c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5H17z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.5 7.5a3 3 0 0 1 1.8 5.4 4 4 0 0 1 2.14 2.25 1 1 0 0 1-.94 1.35h-6a1 1 0 0 1-.94-1.35c.38-1 1.16-1.8 2.14-2.26A3 3 0 0 1 9.5 7.5" />
    </IconBase>
  ))
);

ContactBookFillDuotone.displayName = 'ContactBookFillDuotone';

// Triple export pattern (lucide-react style)
export { ContactBookFillDuotone, ContactBookFillDuotone as ContactBookFillDuotoneIcon, ContactBookFillDuotone as SiContactBookFillDuotone };
export default ContactBookFillDuotone;
export type { ContactBookFillDuotoneProps };
