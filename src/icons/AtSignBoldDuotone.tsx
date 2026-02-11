import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignBoldDuotone = memo(
  forwardRef<SVGSVGElement, AtSignBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign-bold-duotone" {...props}>
      <path d="M12 2a10 10 0 0 1 9.95 11 4.9 4.9 0 0 1-1.9 3.64c-1.03.7-2.3.82-3.39.26a1 1 0 0 0 .9-1.78c.4.2.89.2 1.34-.12s.94-1 1.06-2.2q.04-.4.04-.8a8 8 0 1 0-4 6.93 1 1 0 0 1 1 1.73A10 10 0 1 1 12 2" opacity={.4} />
        <path fillRule="evenodd" d="M15.6 7.4a1 1 0 0 1 1 1v4.5c0 1.35.53 1.99.96 2.22a1 1 0 0 1-.94 1.76 3.5 3.5 0 0 1-1.47-1.52A4.58 4.58 0 0 1 7.4 12a4.6 4.6 0 0 1 7.22-3.78 1 1 0 0 1 .98-.82m-3.6 2a2.6 2.6 0 1 0 2.59 2.87l.01-.27-.01-.27A2.6 2.6 0 0 0 12 9.4" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignBoldDuotone.displayName = 'AtSignBoldDuotone';

// Triple export pattern (lucide-react style)
export { AtSignBoldDuotone, AtSignBoldDuotone as AtSignBoldDuotoneIcon, AtSignBoldDuotone as SiAtSignBoldDuotone };
export default AtSignBoldDuotone;
export type { AtSignBoldDuotoneProps };
