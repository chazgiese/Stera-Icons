import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m14.14 1.06A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.54 7.71a.75.75 0 0 1 0 1.5h-5.26l5.79 5.8A.75.75 0 1 1 15 16.06l-5.79-5.8v5.27a.75.75 0 0 1-1.5 0V8.46a.75.75 0 0 1 .75-.75z" />
    </IconBase>
  ))
);

ArrowCircleUpLeftRegularDuotone.displayName = 'ArrowCircleUpLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftRegularDuotone, ArrowCircleUpLeftRegularDuotone as ArrowCircleUpLeftRegularDuotoneIcon, ArrowCircleUpLeftRegularDuotone as SiArrowCircleUpLeftRegularDuotone };
export default ArrowCircleUpLeftRegularDuotone;
export type { ArrowCircleUpLeftRegularDuotoneProps };
