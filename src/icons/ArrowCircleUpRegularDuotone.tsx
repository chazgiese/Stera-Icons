import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7.25q.31 0 .53.22l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72v6.2a.75.75 0 0 1-1.5 0V9.8l-2.72 2.72a.75.75 0 0 1-1.06-1.06l4-4a.8.8 0 0 1 .53-.22" />
    </IconBase>
  ))
);

ArrowCircleUpRegularDuotone.displayName = 'ArrowCircleUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRegularDuotone, ArrowCircleUpRegularDuotone as ArrowCircleUpRegularDuotoneIcon, ArrowCircleUpRegularDuotone as SiArrowCircleUpRegularDuotone };
export default ArrowCircleUpRegularDuotone;
export type { ArrowCircleUpRegularDuotoneProps };
