import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-duotone" {...props}>
      <path fill="currentColor" d="M17.25 6.75v1.06L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" opacity={.4} />
        <path fill="currentColor" d="M18 5.25c.41 0 .75.34.75.75v10a.75.75 0 0 1-1.5 0V6.75H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArrowUpRightRegularDuotone.displayName = 'ArrowUpRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightRegularDuotone, ArrowUpRightRegularDuotone as ArrowUpRightRegularDuotoneIcon, ArrowUpRightRegularDuotone as SiArrowUpRightRegularDuotone };
export default ArrowUpRightRegularDuotone;
export type { ArrowUpRightRegularDuotoneProps };
