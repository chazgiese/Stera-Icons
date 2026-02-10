import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookRegularProps = Omit<IconBaseProps, 'children'>;

const ContactBookRegular = memo(
  forwardRef<SVGSVGElement, ContactBookRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="contact-book" {...props}>
      <path fill="currentColor" d="M13.5 8a2.5 2.5 0 0 1 1.67 4.36c.78.36 1.42.96 1.75 1.76A1 1 0 0 1 16 15.5h-5a1 1 0 0 1-.92-1.38c.33-.8.97-1.4 1.75-1.76A2.49 2.49 0 0 1 13.5 8" />
        <path fill="currentColor" fillRule="evenodd" d="M15.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04h-4.4q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47l-.02-.48H4a.75.75 0 0 1 0-1.5h1.25v-2.5H4a.75.75 0 0 1 0-1.5h1.25v-2.5H4a.75.75 0 1 1 0-1.5h1.27l.02-.48c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-4.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91l-.02.36H8a.75.75 0 0 1 0 1.5H6.75v2.5H8a.75.75 0 0 1 0 1.5H6.75v2.5H8a.75.75 0 0 1 0 1.5H6.77q0 .2.02.36c.04.45.1.71.2.91q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V8.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookRegular.displayName = 'ContactBookRegular';

// Triple export pattern (lucide-react style)
export { ContactBookRegular, ContactBookRegular as ContactBookRegularIcon, ContactBookRegular as SiContactBookRegular };
export default ContactBookRegular;
export type { ContactBookRegularProps };
