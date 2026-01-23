import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceBoldDuotone = memo(
  forwardRef<SVGSVGElement, PeaceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 3q.5 0 1 .06v8.53l6.03 6.03q-.64.79-1.41 1.41L13 14.41v6.53a9 9 0 0 1-2 0v-6.53l-4.62 4.62q-.79-.64-1.41-1.41L11 11.59V3.06A9 9 0 0 1 12 3" />
    </IconBase>
  ))
);

PeaceBoldDuotone.displayName = 'PeaceBoldDuotone';

// Triple export pattern (lucide-react style)
export { PeaceBoldDuotone, PeaceBoldDuotone as PeaceBoldDuotoneIcon, PeaceBoldDuotone as SiPeaceBoldDuotone };
export default PeaceBoldDuotone;
export type { PeaceBoldDuotoneProps };
