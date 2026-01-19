import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, MailOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-open-fill-duotone" {...props}>
      <path fill="currentColor" d="M22 18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V10l.39.28 6.31 4.88a4 4 0 0 0 2.45.83h1.37a4 4 0 0 0 2.36-.78l6.71-4.92.41-.29z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.51 2.8a4.3 4.3 0 0 1 4.98 0l5.84 4.17c.85.6 1.43 1.48 1.65 2.47a1 1 0 0 1-.4 1.03l-6.69 4.77c-.69.5-1.52.76-2.37.76h-1.38c-.88 0-1.74-.28-2.45-.81L2.4 10.46a1 1 0 0 1-.38-1.02c.22-.99.8-1.87 1.65-2.47z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenFillDuotone.displayName = 'MailOpenFillDuotone';

// Triple export pattern (lucide-react style)
export { MailOpenFillDuotone, MailOpenFillDuotone as MailOpenFillDuotoneIcon, MailOpenFillDuotone as SiMailOpenFillDuotone };
export default MailOpenFillDuotone;
export type { MailOpenFillDuotoneProps };
