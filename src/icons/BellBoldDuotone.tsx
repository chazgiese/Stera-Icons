import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellBoldDuotone = memo(
  forwardRef<SVGSVGElement, BellBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-bold-duotone" {...props}>
      <path fill="currentColor" d="M16.9 19a5 5 0 0 1-9.8 0h2.07a3 3 0 0 0 5.66 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a9 9 0 0 1 9 9v2.45a1 1 0 0 0 .14.51l.9 1.5A3 3 0 0 1 19.47 19H4.53a3 3 0 0 1-2.57-4.54l.9-1.5a1 1 0 0 0 .14-.51V10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7v2.45a3 3 0 0 1-.43 1.54l-.9 1.5A1 1 0 0 0 4.54 17h14.94a1 1 0 0 0 .86-1.51l-.9-1.5a3 3 0 0 1-.43-1.54V10a7 7 0 0 0-7-7" clipRule="evenodd" />
    </IconBase>
  ))
);

BellBoldDuotone.displayName = 'BellBoldDuotone';

// Triple export pattern (lucide-react style)
export { BellBoldDuotone, BellBoldDuotone as BellBoldDuotoneIcon, BellBoldDuotone as SiBellBoldDuotone };
export default BellBoldDuotone;
export type { BellBoldDuotoneProps };
