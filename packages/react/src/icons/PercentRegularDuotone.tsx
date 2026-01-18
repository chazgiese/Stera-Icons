import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 14.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M6.5 3.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" />
        <path fill="currentColor" d="M19.47 3.47a.75.75 0 1 1 1.06 1.06l-16 16a.75.75 0 1 1-1.06-1.06z" />
    </IconBase>
  ))
);

PercentRegularDuotone.displayName = 'PercentRegularDuotone';

export { PercentRegularDuotone };
export type { PercentRegularDuotoneProps };
