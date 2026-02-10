import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m12.73 1.07A8.25 8.25 0 1 0 6.17 17.83 8.25 8.25 0 0 0 17.83 6.17" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.83 8.42a.75.75 0 0 1 0 1.5h-3.85l4.38 4.38a.75.75 0 0 1-1.06 1.06l-4.38-4.38v3.85a.75.75 0 0 1-1.5 0V9.17a.75.75 0 0 1 .75-.75z" />
    </IconBase>
  ))
);

ArrowCircleUpLeftRegularDuotone.displayName = 'ArrowCircleUpLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftRegularDuotone, ArrowCircleUpLeftRegularDuotone as ArrowCircleUpLeftRegularDuotoneIcon, ArrowCircleUpLeftRegularDuotone as SiArrowCircleUpLeftRegularDuotone };
export default ArrowCircleUpLeftRegularDuotone;
export type { ArrowCircleUpLeftRegularDuotoneProps };
