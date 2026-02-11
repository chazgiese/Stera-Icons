import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right-duotone" {...props}>
      <path fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m12.73 1.07A8.25 8.25 0 1 0 6.17 17.84 8.25 8.25 0 0 0 17.83 6.17" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.42c.41 0 .75.34.75.75v5.66a.75.75 0 0 1-.75.75H9.17a.75.75 0 0 1 0-1.5h3.85L8.64 9.7A.75.75 0 0 1 9.7 8.64l4.38 4.38V9.17c0-.41.33-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCircleDownRightRegularDuotone.displayName = 'ArrowCircleDownRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightRegularDuotone, ArrowCircleDownRightRegularDuotone as ArrowCircleDownRightRegularDuotoneIcon, ArrowCircleDownRightRegularDuotone as SiArrowCircleDownRightRegularDuotone };
export default ArrowCircleDownRightRegularDuotone;
export type { ArrowCircleDownRightRegularDuotoneProps };
