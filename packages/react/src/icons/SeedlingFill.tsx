import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SeedlingFillProps = Omit<IconBaseProps, 'children'>;

const SeedlingFill = memo(
  forwardRef<SVGSVGElement, SeedlingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22.99 4.02c0 2.55-.33 4.41-.9 5.87a9 9 0 0 1-2.23 3.32 5 5 0 0 1-6.03.8 7 7 0 0 0-.83 3.3V21a1 1 0 1 1-2 0v-1.34a3 3 0 0 0-.88-2.12l-1.84-1.85a4 4 0 0 1-4.87-.62C2.01 13.66 1 11.01 1 8V7h1c3.01 0 5.66 1 7.07 2.41a4 4 0 0 1 .62 4.87l1.45 1.45a9 9 0 0 1 1.17-3.09 5 5 0 0 1 .48-6.5 9 9 0 0 1 3.32-2.23c1.46-.57 3.32-.9 5.88-.9h1z" />
    </IconBase>
  ))
);

SeedlingFill.displayName = 'SeedlingFill';

export { SeedlingFill };
export type { SeedlingFillProps };
