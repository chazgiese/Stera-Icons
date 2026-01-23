import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M17 7v1.41L6.7 18.71a1 1 0 0 1-1.4-1.42L15.58 7z" opacity={.4} />
        <path fill="currentColor" d="M8 5a1 1 0 0 0 0 2h9v9a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z" />
    </IconBase>
  ))
);

ArrowUpRightBoldDuotone.displayName = 'ArrowUpRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightBoldDuotone, ArrowUpRightBoldDuotone as ArrowUpRightBoldDuotoneIcon, ArrowUpRightBoldDuotone as SiArrowUpRightBoldDuotone };
export default ArrowUpRightBoldDuotone;
export type { ArrowUpRightBoldDuotoneProps };
