import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-down-duotone" {...props}>
      <path fill="currentColor" d="M12 2.25c.41 0 .75.34.75.75v12.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-7 7c-.3.3-.77.3-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06l5.72 5.72V3c0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M20 20.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" opacity={.4} />
    </IconBase>
  ))
);

ArrowLineDownRegularDuotone.displayName = 'ArrowLineDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineDownRegularDuotone, ArrowLineDownRegularDuotone as ArrowLineDownRegularDuotoneIcon, ArrowLineDownRegularDuotone as SiArrowLineDownRegularDuotone };
export default ArrowLineDownRegularDuotone;
export type { ArrowLineDownRegularDuotoneProps };
