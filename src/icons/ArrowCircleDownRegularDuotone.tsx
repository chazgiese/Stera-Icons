import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7.25c.41 0 .75.34.75.75v6.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCircleDownRegularDuotone.displayName = 'ArrowCircleDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRegularDuotone, ArrowCircleDownRegularDuotone as ArrowCircleDownRegularDuotoneIcon, ArrowCircleDownRegularDuotone as SiArrowCircleDownRegularDuotone };
export default ArrowCircleDownRegularDuotone;
export type { ArrowCircleDownRegularDuotoneProps };
