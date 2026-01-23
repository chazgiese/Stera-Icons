import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashBoldDuotone = memo(
  forwardRef<SVGSVGElement, BackslashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-bold-duotone" {...props}>
      <path fill="currentColor" d="m11.25 12.66 8 9a1 1 0 1 0 1.5-1.32l-8-9z" opacity={.4} />
        <path fill="currentColor" d="M4.75 2.34a1 1 0 1 0-1.5 1.32l8 9 1.5-1.32z" />
    </IconBase>
  ))
);

BackslashBoldDuotone.displayName = 'BackslashBoldDuotone';

// Triple export pattern (lucide-react style)
export { BackslashBoldDuotone, BackslashBoldDuotone as BackslashBoldDuotoneIcon, BackslashBoldDuotone as SiBackslashBoldDuotone };
export default BackslashBoldDuotone;
export type { BackslashBoldDuotoneProps };
