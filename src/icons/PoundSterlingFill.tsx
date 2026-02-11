import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingFillProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingFill = memo(
  forwardRef<SVGSVGElement, PoundSterlingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-fill" {...props}>
      <path d="M11.92 2.07a7.5 7.5 0 0 1 7.34 3.58 1.5 1.5 0 0 1-2.52 1.62 4.5 4.5 0 0 0-4.4-2.23C10.87 5.24 10 6.16 10 7.39V11h4a1.5 1.5 0 0 1 0 3h-4v2.76A4 4 0 0 1 9.3 19H19a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1-.56-2.9h.01l.41-.19c.28-.14.65-.35 1-.61.8-.6 1.14-1.14 1.14-1.54V14H5a1.5 1.5 0 0 1 0-3h2V7.4c0-3.09 2.37-4.98 4.92-5.33" />
    </IconBase>
  ))
);

PoundSterlingFill.displayName = 'PoundSterlingFill';

// Triple export pattern (lucide-react style)
export { PoundSterlingFill, PoundSterlingFill as PoundSterlingFillIcon, PoundSterlingFill as SiPoundSterlingFill };
export default PoundSterlingFill;
export type { PoundSterlingFillProps };
