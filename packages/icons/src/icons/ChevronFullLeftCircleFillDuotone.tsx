import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m2.38 7.26c0-.93-1.08-1.46-1.82-.89l-3.84 3c-.58.44-.58 1.32 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" opacity={.4} />
        <path d="M12.56 8.12c.74-.57 1.81-.04 1.82.9v5.97c0 .93-1.08 1.46-1.82.89l-3.84-3c-.58-.44-.58-1.32 0-1.77z" />
    </IconBase>
  ))
);

ChevronFullLeftCircleFillDuotone.displayName = 'ChevronFullLeftCircleFillDuotone';

// Triple export pattern
export { ChevronFullLeftCircleFillDuotone, ChevronFullLeftCircleFillDuotone as ChevronFullLeftCircleFillDuotoneIcon, ChevronFullLeftCircleFillDuotone as SiChevronFullLeftCircleFillDuotone };
export default ChevronFullLeftCircleFillDuotone;
export type { ChevronFullLeftCircleFillDuotoneProps };
