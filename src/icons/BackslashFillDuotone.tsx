import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashFillDuotone = memo(
  forwardRef<SVGSVGElement, BackslashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-fill-duotone" {...props}>
      <path fill="currentColor" d="M20.13 19.01A1.5 1.5 0 0 1 17.87 21l-7-8L13.13 11z" opacity={.4} />
        <path fill="currentColor" d="M4.01 2.87a1.5 1.5 0 0 1 2.12.14l7 8L10.87 13l-7-8a1.5 1.5 0 0 1 .14-2.12" />
    </IconBase>
  ))
);

BackslashFillDuotone.displayName = 'BackslashFillDuotone';

// Triple export pattern (lucide-react style)
export { BackslashFillDuotone, BackslashFillDuotone as BackslashFillDuotoneIcon, BackslashFillDuotone as SiBackslashFillDuotone };
export default BackslashFillDuotone;
export type { BackslashFillDuotoneProps };
