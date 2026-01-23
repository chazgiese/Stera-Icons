import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-bold-duotone" {...props}>
      <path fill="currentColor" d="M18 2a3 3 0 0 1 3 3v2.84c0 1.46.93 2.75 2.32 3.21a1 1 0 0 1 0 1.9A3.4 3.4 0 0 0 21 16.16V19a3 3 0 0 1-3 3h-1a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1v-2.84c0-1.64.75-3.16 1.97-4.16A5.4 5.4 0 0 1 19 7.84V5a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2.84C5 9.48 4.25 11 3.03 12A5.4 5.4 0 0 1 5 16.16V19a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2.84c0-1.46-.93-2.75-2.32-3.21a1 1 0 0 1 0-1.9A3.4 3.4 0 0 0 3 7.84V5a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

BracketsCurlyBoldDuotone.displayName = 'BracketsCurlyBoldDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyBoldDuotone, BracketsCurlyBoldDuotone as BracketsCurlyBoldDuotoneIcon, BracketsCurlyBoldDuotone as SiBracketsCurlyBoldDuotone };
export default BracketsCurlyBoldDuotone;
export type { BracketsCurlyBoldDuotoneProps };
