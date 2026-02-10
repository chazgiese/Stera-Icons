import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M13.5 4a6.5 6.5 0 1 1 0 13H6.41l-1-1 1-1h7.09a4.5 4.5 0 1 0 0-9H9a1 1 0 0 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M7.3 11.3a1 1 0 1 1 1.4 1.4L5.42 16l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4-.06-.07a1 1 0 0 1 .06-1.34z" />
    </IconBase>
  ))
);

ArrowULeftBoldDuotone.displayName = 'ArrowULeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftBoldDuotone, ArrowULeftBoldDuotone as ArrowULeftBoldDuotoneIcon, ArrowULeftBoldDuotone as SiArrowULeftBoldDuotone };
export default ArrowULeftBoldDuotone;
export type { ArrowULeftBoldDuotoneProps };
