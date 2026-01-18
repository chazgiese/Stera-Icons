import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersVFillDuotone = memo(
  forwardRef<SVGSVGElement, SlidersVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 22a1 1 0 1 1-2 0v-3.13a4 4 0 0 0 2 0zM18 22a1 1 0 1 1-2 0v-9.13a4 4 0 0 0 2 0zM7 1a1 1 0 0 1 1 1v9.13a4 4 0 0 0-2 0V2a1 1 0 0 1 1-1M17 1a1 1 0 0 1 1 1v3.13a4 4 0 0 0-2 0V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M11 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0M21 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
    </IconBase>
  ))
);

SlidersVFillDuotone.displayName = 'SlidersVFillDuotone';

export { SlidersVFillDuotone };
export type { SlidersVFillDuotoneProps };
