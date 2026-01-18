import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SeedlingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SeedlingFillDuotone = memo(
  forwardRef<SVGSVGElement, SeedlingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 7c3.01 0 5.66 1 7.07 2.41a4 4 0 0 1 .62 4.87L7.2 11.79a1 1 0 1 0-1.42 1.42l2.49 2.48a4 4 0 0 1-4.87-.62C2.01 13.66 1 11.01 1 8V7zM22.99 4.02c0 2.55-.33 4.41-.9 5.87a9 9 0 0 1-2.23 3.32 5 5 0 0 1-6.03.8 7 7 0 0 1 1.22-1.65l1.66-1.65a1 1 0 0 0-1.42-1.42l-1.65 1.66a9 9 0 0 0-1.33 1.7 5 5 0 0 1 .48-6.51 9 9 0 0 1 3.32-2.23c1.46-.57 3.32-.9 5.88-.9h1z" />
        <path fill="currentColor" d="M15.3 9.3a1 1 0 1 1 1.4 1.4l-1.65 1.66A7 7 0 0 0 13 17.31V21a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-1.34a3 3 0 0 0-.88-2.12L5.8 13.2a1 1 0 1 1 1.42-1.42l3.93 3.94a9 9 0 0 1 2.5-4.78z" />
    </IconBase>
  ))
);

SeedlingFillDuotone.displayName = 'SeedlingFillDuotone';

export { SeedlingFillDuotone };
export type { SeedlingFillDuotoneProps };
