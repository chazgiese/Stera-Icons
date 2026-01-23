import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-up-bold-duotone" {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1" opacity={.4} />
        <path fill="currentColor" d="M4.3 13.3a1 1 0 1 0 1.4 1.4L11 9.42V21a1 1 0 1 0 2 0V9.41l5.3 5.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-.4-.25l-.06-.01a1 1 0 0 0-.47 0l-.06.01a1 1 0 0 0-.27.13l-.15.12z" />
    </IconBase>
  ))
);

ArrowLineUpBoldDuotone.displayName = 'ArrowLineUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineUpBoldDuotone, ArrowLineUpBoldDuotone as ArrowLineUpBoldDuotoneIcon, ArrowLineUpBoldDuotone as SiArrowLineUpBoldDuotone };
export default ArrowLineUpBoldDuotone;
export type { ArrowLineUpBoldDuotoneProps };
