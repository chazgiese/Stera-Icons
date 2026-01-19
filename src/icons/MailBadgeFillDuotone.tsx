import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailBadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, MailBadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-fill-duotone" {...props}>
      <path fill="currentColor" d="M1 6.99q0 .48.39.8l7.49 6a5 5 0 0 0 6.24 0l5.39-4.32A4.6 4.6 0 0 0 23 9.03V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4z" opacity={.4} />
        <path fill="currentColor" d="M16.97 3q-.46.91-.47 2a4.5 4.5 0 0 0 4.01 4.47l-5.39 4.31a5 5 0 0 1-6.24 0L1.38 7.8c-.24-.2-.38-.5-.38-.8C1 4.79 2.78 3 4.99 3z" />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeFillDuotone.displayName = 'MailBadgeFillDuotone';

// Triple export pattern (lucide-react style)
export { MailBadgeFillDuotone, MailBadgeFillDuotone as MailBadgeFillDuotoneIcon, MailBadgeFillDuotone as SiMailBadgeFillDuotone };
export default MailBadgeFillDuotone;
export type { MailBadgeFillDuotoneProps };
