import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m12.73 1.41A8 8 0 1 0 6.34 17.66 8 8 0 0 0 17.66 6.34" clipRule="evenodd" opacity={.4} />
        <path d="M14.12 8.46a1 1 0 1 1 1.42 1.42l-3.95 3.95h3.24a1 1 0 0 1 0 2H9.17a1 1 0 0 1-1-1V9.17a1 1 0 1 1 2 0v3.24z" />
    </IconBase>
  ))
);

ArrowCircleDownLeftBoldDuotone.displayName = 'ArrowCircleDownLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftBoldDuotone, ArrowCircleDownLeftBoldDuotone as ArrowCircleDownLeftBoldDuotoneIcon, ArrowCircleDownLeftBoldDuotone as SiArrowCircleDownLeftBoldDuotone };
export default ArrowCircleDownLeftBoldDuotone;
export type { ArrowCircleDownLeftBoldDuotoneProps };
