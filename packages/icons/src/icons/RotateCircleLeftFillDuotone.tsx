import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-.88 4.63c-.34-.34-.9-.34-1.24 0L7.45 8.81c-.38.38-.38 1 0 1.38l2.43 2.43c.34.34.9.34 1.24 0s.34-.9 0-1.24l-1-1h2.13c1.59 0 2.87 1.28 2.87 2.87s-1.28 2.88-2.87 2.88c-.97 0-1.83-.48-2.35-1.22-.28-.4-.83-.49-1.22-.21-.4.28-.49.82-.2 1.22.83 1.18 2.2 1.95 3.77 1.96 2.55 0 4.62-2.08 4.62-4.63s-2.07-4.62-4.62-4.62H10.1l1-1.01c.35-.34.35-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 6.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1 1h2.13c2.55 0 4.62 2.08 4.62 4.63s-2.07 4.62-4.62 4.62c-1.56 0-2.94-.77-3.78-1.95-.28-.4-.18-.94.21-1.22.4-.28.94-.19 1.22.2.52.75 1.38 1.22 2.35 1.22 1.59 0 2.87-1.28 2.87-2.87s-1.28-2.88-2.87-2.88H10.1l1 1.01c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-2.43-2.43c-.38-.38-.38-1 0-1.38z" />
    </IconBase>
  ))
);

RotateCircleLeftFillDuotone.displayName = 'RotateCircleLeftFillDuotone';

// Triple export pattern
export { RotateCircleLeftFillDuotone, RotateCircleLeftFillDuotone as RotateCircleLeftFillDuotoneIcon, RotateCircleLeftFillDuotone as SiRotateCircleLeftFillDuotone };
export default RotateCircleLeftFillDuotone;
export type { RotateCircleLeftFillDuotoneProps };
