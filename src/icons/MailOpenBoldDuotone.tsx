import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, MailOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-open-bold-duotone" {...props}>
      <path fill="currentColor" d="M21.98 9.82 22 10v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8l.02-.17a1 1 0 0 0 .38.63l1.6 1.2V18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6.4l1.58-1.13a1 1 0 0 0 .4-.65" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.51 2.8a4.3 4.3 0 0 1 4.98 0l5.84 4.17c.85.6 1.43 1.48 1.65 2.47a1 1 0 0 1-.4 1.03l-6.69 4.77c-.69.5-1.52.76-2.37.76h-1.38c-.88 0-1.74-.28-2.45-.81L2.4 10.46a1 1 0 0 1-.38-1.02c.22-.99.8-1.87 1.65-2.47zm3.82 1.62a2.3 2.3 0 0 0-2.66 0L4.83 8.6q-.4.3-.64.71l5.7 4.29q.56.4 1.25.41h1.38q.67-.01 1.21-.38l6.07-4.33q-.23-.4-.63-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenBoldDuotone.displayName = 'MailOpenBoldDuotone';

// Triple export pattern (lucide-react style)
export { MailOpenBoldDuotone, MailOpenBoldDuotone as MailOpenBoldDuotoneIcon, MailOpenBoldDuotone as SiMailOpenBoldDuotone };
export type { MailOpenBoldDuotoneProps };
