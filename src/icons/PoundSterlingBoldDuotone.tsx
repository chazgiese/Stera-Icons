import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingBoldDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-bold-duotone" {...props}>
      <path d="M7.5 13H5a1 1 0 1 1 0-2h2.5zM14 11a1 1 0 1 1 0 2H9.5v-2z" opacity={0.4} />
        <path fill="currentColor" d="M11.98 1.9c2.42-.35 5.18.75 6.88 3.59a1 1 0 0 1-1.72 1.02c-1.3-2.16-3.29-2.86-4.87-2.62S9.5 5.26 9.5 7v10c0 1.26-.63 2.26-1.33 3H19a1 1 0 0 1 0 2H5a1 1 0 0 1-.4-1.92h.03l.44-.23c.3-.16.68-.4 1.06-.7.81-.64 1.37-1.38 1.37-2.15V7a5.06 5.06 0 0 1 4.48-5.1" />
    </IconBase>
  ))
);

PoundSterlingBoldDuotone.displayName = 'PoundSterlingBoldDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingBoldDuotone, PoundSterlingBoldDuotone as PoundSterlingBoldDuotoneIcon, PoundSterlingBoldDuotone as SiPoundSterlingBoldDuotone };
export default PoundSterlingBoldDuotone;
export type { PoundSterlingBoldDuotoneProps };
