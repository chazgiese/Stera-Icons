import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.22 2.5a3.3 3.3 0 0 1 3.28 3.28v2.2c0 1.2.78 2.24 1.93 2.58a1.5 1.5 0 0 1 0 2.88 2.7 2.7 0 0 0-1.93 2.58v2.2a3.3 3.3 0 0 1-3.28 3.28H16a1.5 1.5 0 0 1 0-3h1.22c.15 0 .28-.13.28-.28v-2.2c0-1.55.62-2.98 1.66-4.02a5.7 5.7 0 0 1-1.66-4.02v-2.2a.3.3 0 0 0-.28-.28H16a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M8 2.5a1.5 1.5 0 1 1 0 3H6.78a.3.3 0 0 0-.28.28v2.2c0 1.55-.62 2.98-1.66 4.02a5.7 5.7 0 0 1 1.66 4.02v2.2c0 .15.13.28.28.28H8a1.5 1.5 0 0 1 0 3H6.78a3.3 3.3 0 0 1-3.28-3.28v-2.2c0-1.2-.78-2.24-1.93-2.58a1.5 1.5 0 0 1 0-2.88A2.7 2.7 0 0 0 3.5 7.98v-2.2A3.3 3.3 0 0 1 6.78 2.5z" />
    </IconBase>
  ))
);

BracketsCurlyFillDuotone.displayName = 'BracketsCurlyFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyFillDuotone, BracketsCurlyFillDuotone as BracketsCurlyFillDuotoneIcon, BracketsCurlyFillDuotone as SiBracketsCurlyFillDuotone };
export default BracketsCurlyFillDuotone;
export type { BracketsCurlyFillDuotoneProps };
