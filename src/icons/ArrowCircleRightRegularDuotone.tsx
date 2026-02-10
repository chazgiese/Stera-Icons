import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.47 7.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06l2.72-2.72H8a.75.75 0 0 1 0-1.5h6.19l-2.72-2.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowCircleRightRegularDuotone.displayName = 'ArrowCircleRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightRegularDuotone, ArrowCircleRightRegularDuotone as ArrowCircleRightRegularDuotoneIcon, ArrowCircleRightRegularDuotone as SiArrowCircleRightRegularDuotone };
export default ArrowCircleRightRegularDuotone;
export type { ArrowCircleRightRegularDuotoneProps };
