import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m12.73 1.41A8 8 0 1 0 6.34 17.66 8 8 0 0 0 17.66 6.34" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.83 8.17a1 1 0 0 1 0 2h-3.24l3.95 3.95a1 1 0 0 1-1.42 1.42l-3.95-3.95v3.24a1 1 0 0 1-2 0V9.17a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowCircleUpLeftBoldDuotone.displayName = 'ArrowCircleUpLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftBoldDuotone, ArrowCircleUpLeftBoldDuotone as ArrowCircleUpLeftBoldDuotoneIcon, ArrowCircleUpLeftBoldDuotone as SiArrowCircleUpLeftBoldDuotone };
export default ArrowCircleUpLeftBoldDuotone;
export type { ArrowCircleUpLeftBoldDuotoneProps };
