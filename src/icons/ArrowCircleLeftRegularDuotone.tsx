import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.47 7.47a.75.75 0 0 1 1.06 1.06l-2.72 2.72H16a.75.75 0 0 1 0 1.5H9.81l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ArrowCircleLeftRegularDuotone.displayName = 'ArrowCircleLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftRegularDuotone, ArrowCircleLeftRegularDuotone as ArrowCircleLeftRegularDuotoneIcon, ArrowCircleLeftRegularDuotone as SiArrowCircleLeftRegularDuotone };
export default ArrowCircleLeftRegularDuotone;
export type { ArrowCircleLeftRegularDuotoneProps };
