import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.25q.31 0 .53.22l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V17a.75.75 0 0 1-1.5 0V8.81l-3.72 3.72a.75.75 0 0 1-1.06-1.06l5-5a.8.8 0 0 1 .53-.22" />
    </IconBase>
  ))
);

ArrowCircleUpRegularDuotone.displayName = 'ArrowCircleUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRegularDuotone, ArrowCircleUpRegularDuotone as ArrowCircleUpRegularDuotoneIcon, ArrowCircleUpRegularDuotone as SiArrowCircleUpRegularDuotone };
export default ArrowCircleUpRegularDuotone;
export type { ArrowCircleUpRegularDuotoneProps };
