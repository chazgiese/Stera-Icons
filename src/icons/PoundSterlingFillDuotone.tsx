import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingFillDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-fill-duotone" {...props}>
      <path d="M14 11a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path d="M10 16.76A4 4 0 0 1 9.3 19H19a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1-.56-2.9h.01l.41-.19c.28-.14.65-.35 1-.61.8-.6 1.14-1.14 1.14-1.54V14h3zM11.92 2.07a7.5 7.5 0 0 1 7.34 3.58 1.5 1.5 0 0 1-2.52 1.62 4.5 4.5 0 0 0-4.4-2.23C10.87 5.24 10 6.16 10 7.39V11H7V7.4c0-3.09 2.37-4.98 4.92-5.33" />
    </IconBase>
  ))
);

PoundSterlingFillDuotone.displayName = 'PoundSterlingFillDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingFillDuotone, PoundSterlingFillDuotone as PoundSterlingFillDuotoneIcon, PoundSterlingFillDuotone as SiPoundSterlingFillDuotone };
export default PoundSterlingFillDuotone;
export type { PoundSterlingFillDuotoneProps };
