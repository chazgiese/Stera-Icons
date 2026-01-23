import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingBoldProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingBold = memo(
  forwardRef<SVGSVGElement, PoundSterlingBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-bold" {...props}>
      <path fill="currentColor" d="M11.98 1.9c2.41-.35 5.18.75 6.88 3.59a1 1 0 1 1-1.72 1.02c-1.3-2.16-3.29-2.86-4.87-2.63C10.7 4.12 9.5 5.26 9.5 7v4H14a1 1 0 1 1 0 2H9.5v4c0 1.25-.63 2.26-1.33 3H19a1 1 0 0 1 0 2H5a1 1 0 0 1-.4-1.92h.03l.44-.23c.3-.16.68-.4 1.06-.7.81-.64 1.37-1.38 1.37-2.15v-4H5a1 1 0 0 1 0-2h2.5V7a5.06 5.06 0 0 1 4.48-5.1" />
    </IconBase>
  ))
);

PoundSterlingBold.displayName = 'PoundSterlingBold';

// Triple export pattern (lucide-react style)
export { PoundSterlingBold, PoundSterlingBold as PoundSterlingBoldIcon, PoundSterlingBold as SiPoundSterlingBold };
export default PoundSterlingBold;
export type { PoundSterlingBoldProps };
