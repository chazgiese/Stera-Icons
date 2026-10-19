import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullRightCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M9.75 9.01c0-.83.96-1.3 1.61-.79l3.85 3c.51.4.51 1.17 0 1.57l-3.85 2.99c-.65.5-1.61.04-1.61-.8z" />
    </IconBase>
  ))
);

ChevronFullRightCircleRegularDuotone.displayName = 'ChevronFullRightCircleRegularDuotone';

// Triple export pattern
export { ChevronFullRightCircleRegularDuotone, ChevronFullRightCircleRegularDuotone as ChevronFullRightCircleRegularDuotoneIcon, ChevronFullRightCircleRegularDuotone as SiChevronFullRightCircleRegularDuotone };
export default ChevronFullRightCircleRegularDuotone;
export type { ChevronFullRightCircleRegularDuotoneProps };
