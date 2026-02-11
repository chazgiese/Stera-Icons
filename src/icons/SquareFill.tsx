import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareFillProps = Omit<IconBaseProps, 'children'>;

const SquareFill = memo(
  forwardRef<SVGSVGElement, SquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-fill" {...props}>
      <path d="M13.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" />
    </IconBase>
  ))
);

SquareFill.displayName = 'SquareFill';

// Triple export pattern (lucide-react style)
export { SquareFill, SquareFill as SquareFillIcon, SquareFill as SiSquareFill };
export default SquareFill;
export type { SquareFillProps };
