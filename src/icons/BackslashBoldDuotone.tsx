import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashBoldDuotone = memo(
  forwardRef<SVGSVGElement, BackslashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-bold-duotone" {...props}>
      <path d="M19.75 19.34a1 1 0 0 1-1.5 1.32l-7-8 1.5-1.32z" opacity={.4} />
        <path d="M4.34 3.25a1 1 0 0 1 1.41.1l7 8-1.5 1.3-7-8a1 1 0 0 1 .1-1.4" />
    </IconBase>
  ))
);

BackslashBoldDuotone.displayName = 'BackslashBoldDuotone';

// Triple export pattern (lucide-react style)
export { BackslashBoldDuotone, BackslashBoldDuotone as BackslashBoldDuotoneIcon, BackslashBoldDuotone as SiBackslashBoldDuotone };
export default BackslashBoldDuotone;
export type { BackslashBoldDuotoneProps };
