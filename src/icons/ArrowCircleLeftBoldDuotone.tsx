import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.3 7.3a1 1 0 0 1 1.4 1.4L10.42 11H16a1 1 0 0 1 0 2h-5.59l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ArrowCircleLeftBoldDuotone.displayName = 'ArrowCircleLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftBoldDuotone, ArrowCircleLeftBoldDuotone as ArrowCircleLeftBoldDuotoneIcon, ArrowCircleLeftBoldDuotone as SiArrowCircleLeftBoldDuotone };
export default ArrowCircleLeftBoldDuotone;
export type { ArrowCircleLeftBoldDuotoneProps };
