import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellFillDuotone = memo(
  forwardRef<SVGSVGElement, BellFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37a2.75 2.75 0 0 1-2.29 4.28H5.74c-2.2 0-3.5-2.45-2.29-4.28l.92-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05" />
        <path fill="currentColor" d="M16.44 18.25a4.5 4.5 0 0 1-8.88 0z" opacity={.4} />
    </IconBase>
  ))
);

BellFillDuotone.displayName = 'BellFillDuotone';

// Triple export pattern (lucide-react style)
export { BellFillDuotone, BellFillDuotone as BellFillDuotoneIcon, BellFillDuotone as SiBellFillDuotone };
export default BellFillDuotone;
export type { BellFillDuotoneProps };
