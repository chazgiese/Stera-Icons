import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M6.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
        <path fill="currentColor" d="M19.3 3.3a1 1 0 1 1 1.4 1.4l-16 16a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

PercentFillDuotone.displayName = 'PercentFillDuotone';

export { PercentFillDuotone };
export type { PercentFillDuotoneProps };
