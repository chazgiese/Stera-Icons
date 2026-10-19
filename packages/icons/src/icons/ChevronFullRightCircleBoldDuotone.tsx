import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullRightCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 9.01c0-1.04 1.2-1.62 2.02-.99l3.84 3c.64.5.64 1.47 0 1.97l-3.84 2.99c-.82.63-2.02.05-2.02-1z" />
    </IconBase>
  ))
);

ChevronFullRightCircleBoldDuotone.displayName = 'ChevronFullRightCircleBoldDuotone';

// Triple export pattern
export { ChevronFullRightCircleBoldDuotone, ChevronFullRightCircleBoldDuotone as ChevronFullRightCircleBoldDuotoneIcon, ChevronFullRightCircleBoldDuotone as SiChevronFullRightCircleBoldDuotone };
export default ChevronFullRightCircleBoldDuotone;
export type { ChevronFullRightCircleBoldDuotoneProps };
