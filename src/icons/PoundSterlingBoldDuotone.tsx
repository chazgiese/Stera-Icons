import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingBoldDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-bold-duotone" {...props}>
      <path fill="currentColor" d="M14 11.5a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M9.5 16.76c0 1.14-.57 2.06-1.23 2.74H19a1 1 0 0 1 0 2H5a1 1 0 0 1-.37-1.93h.02l.44-.21c.3-.16.69-.38 1.07-.66.82-.6 1.34-1.28 1.34-1.94V13.5h2zM11.99 2.56a7 7 0 0 1 6.85 3.36A1 1 0 0 1 17.16 7a5 5 0 0 0-4.9-2.46C10.63 4.77 9.5 5.85 9.5 7.4v4.11h-2V7.4c0-2.78 2.12-4.5 4.49-4.84" />
    </IconBase>
  ))
);

PoundSterlingBoldDuotone.displayName = 'PoundSterlingBoldDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingBoldDuotone, PoundSterlingBoldDuotone as PoundSterlingBoldDuotoneIcon, PoundSterlingBoldDuotone as SiPoundSterlingBoldDuotone };
export default PoundSterlingBoldDuotone;
export type { PoundSterlingBoldDuotoneProps };
