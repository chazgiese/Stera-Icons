import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PoundSterlingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingFillDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-fill-duotone" {...props}>
      <path d="M7 13.5H5a1.5 1.5 0 0 1 0-3h2zM14 10.5a1.5 1.5 0 0 1 0 3h-4v-3z" opacity={0.4} />
        <path fill="currentColor" d="M11.9 1.41c2.63-.39 5.59.82 7.39 3.82a1.5 1.5 0 0 1-2.58 1.54c-1.2-2-2.99-2.6-4.36-2.39S10 5.55 10 7v10c0 .98-.34 1.81-.8 2.5H19a1.5 1.5 0 1 1 0 3H5a1.5 1.5 0 0 1-.6-2.88h.02l.08-.04a7 7 0 0 0 1.32-.82Q7 17.8 7 17V7c0-3.15 2.28-5.2 4.9-5.59" />
    </IconBase>
  ))
);

PoundSterlingFillDuotone.displayName = 'PoundSterlingFillDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingFillDuotone, PoundSterlingFillDuotone as PoundSterlingFillDuotoneIcon, PoundSterlingFillDuotone as SiPoundSterlingFillDuotone };
export type { PoundSterlingFillDuotoneProps };
