import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsCurlyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.5 1.5A3.5 3.5 0 0 1 21 5v2.84c0 1.24.8 2.34 1.97 2.74a1.5 1.5 0 0 1 0 2.84A2.9 2.9 0 0 0 21 16.16V19a3.5 3.5 0 0 1-3.5 3.5h-1a1.5 1.5 0 0 1 0-3h1a.5.5 0 0 0 .5-.5v-2.84c0-1.6.65-3.08 1.72-4.16A6 6 0 0 1 18 7.84V5a.5.5 0 0 0-.5-.5h-1a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M7.5 1.5a1.5 1.5 0 1 1 0 3h-1A.5.5 0 0 0 6 5v2.84c0 1.6-.65 3.08-1.72 4.16A6 6 0 0 1 6 16.16V19c0 .28.22.5.5.5h1a1.5 1.5 0 0 1 0 3h-1A3.5 3.5 0 0 1 3 19v-2.84c0-1.24-.8-2.34-1.97-2.74a1.5 1.5 0 0 1 0-2.84A2.9 2.9 0 0 0 3 7.84V5a3.5 3.5 0 0 1 3.5-3.5z" />
    </IconBase>
  ))
);

BracketsCurlyFillDuotone.displayName = 'BracketsCurlyFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyFillDuotone, BracketsCurlyFillDuotone as BracketsCurlyFillDuotoneIcon, BracketsCurlyFillDuotone as SiBracketsCurlyFillDuotone };
export default BracketsCurlyFillDuotone;
export type { BracketsCurlyFillDuotoneProps };
