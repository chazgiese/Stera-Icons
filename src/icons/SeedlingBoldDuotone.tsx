import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SeedlingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SeedlingBoldDuotone = memo(
  forwardRef<SVGSVGElement, SeedlingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="seedling-bold-duotone" {...props}>
      <path d="M2 7c3.01 0 5.66 1 7.07 2.41a4 4 0 0 1 .62 4.87l-1.52-1.52a2 2 0 0 0-.51-1.93c-.8-.8-2.47-1.58-4.61-1.78.2 2.14.97 3.8 1.78 4.6a2 2 0 0 0 1.93.52l1.52 1.52a4 4 0 0 1-4.87-.62C2.01 13.66 1 11.01 1 8V7zM22.99 4.02c0 2.55-.33 4.41-.9 5.87a9 9 0 0 1-2.23 3.32 5 5 0 0 1-6.03.8 7 7 0 0 1 1.2-1.63 3 3 0 0 0 3.42-.59 7 7 0 0 0 1.78-2.63c.38-.98.66-2.28.73-4.12-1.84.07-3.14.35-4.12.74a7 7 0 0 0-2.63 1.77 3 3 0 0 0-.59 3.41q-.75.77-1.31 1.68a5 5 0 0 1 .48-6.5 9 9 0 0 1 3.32-2.23c1.46-.57 3.32-.9 5.88-.9h1z" opacity={0.4} />
        <path fill="currentColor" d="M15.3 9.3a1 1 0 1 1 1.4 1.4l-1.65 1.66A7 7 0 0 0 13 17.31V21a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-1.34a3 3 0 0 0-.88-2.12L5.8 13.2a1 1 0 1 1 1.42-1.42l3.93 3.94a9 9 0 0 1 2.5-4.78z" />
    </IconBase>
  ))
);

SeedlingBoldDuotone.displayName = 'SeedlingBoldDuotone';

// Triple export pattern (lucide-react style)
export { SeedlingBoldDuotone, SeedlingBoldDuotone as SeedlingBoldDuotoneIcon, SeedlingBoldDuotone as SiSeedlingBoldDuotone };
export type { SeedlingBoldDuotoneProps };
