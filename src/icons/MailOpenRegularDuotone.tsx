import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, MailOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-open-duotone" {...props}>
      <path stroke="currentColor" strokeWidth="1.5" d="m3 9.5.07.05m17.86 0L21 9.5" />
        <path fill="currentColor" d="M2.25 9.5q0 .36.3.6l1.2.93V18c0 1.24 1 2.25 2.25 2.25h12c1.24 0 2.25-1 2.25-2.25v-7.02l1.2-.87q.3-.24.3-.61V18A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.66 2.78a3.95 3.95 0 0 1 4.68 0l5.8 4.26a4 4 0 0 1 1.6 2.3.8.8 0 0 1-.3.77l-6.7 4.91c-.65.48-1.42.73-2.22.73h-1.37c-.83 0-1.64-.27-2.3-.78l-6.3-4.88a.8.8 0 0 1-.28-.75c.2-1 .86-1.76 1.6-2.3zM13.45 4a2.45 2.45 0 0 0-2.9 0l-5.8 4.26q-.6.43-.87.98l5.9 4.55q.6.46 1.37.47h1.37q.73 0 1.33-.44l6.26-4.59q-.27-.54-.86-.97z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenRegularDuotone.displayName = 'MailOpenRegularDuotone';

// Triple export pattern (lucide-react style)
export { MailOpenRegularDuotone, MailOpenRegularDuotone as MailOpenRegularDuotoneIcon, MailOpenRegularDuotone as SiMailOpenRegularDuotone };
export default MailOpenRegularDuotone;
export type { MailOpenRegularDuotoneProps };
