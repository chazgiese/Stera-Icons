import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ContactBookRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contact-book-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.08-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-8.8 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h7.85V4.75zm9.35 14.5q.84.01 1.36-.04c.45-.04.71-.1.91-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91q.05-.61.04-1.7h-3.5zm0-5.33h3.5v-3.84h-3.5zm0-5.34h3.5q.01-1.08-.04-1.69a2 2 0 0 0-.2-.91 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21q-.52-.04-1.36-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.5 8a2.5 2.5 0 0 1 .86 4.84 3.9 3.9 0 0 1 2.84 2.4.75.75 0 0 1-.7 1.01h-6a.75.75 0 0 1-.7-1.01 3.9 3.9 0 0 1 2.83-2.4A2.5 2.5 0 0 1 9.5 8" />
    </IconBase>
  ))
);

ContactBookRegularDuotone.displayName = 'ContactBookRegularDuotone';

// Triple export pattern (lucide-react style)
export { ContactBookRegularDuotone, ContactBookRegularDuotone as ContactBookRegularDuotoneIcon, ContactBookRegularDuotone as SiContactBookRegularDuotone };
export default ContactBookRegularDuotone;
export type { ContactBookRegularDuotoneProps };
