import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M11.21 8.8c.4-.52 1.18-.52 1.58 0l2.99 3.84c.5.65.04 1.61-.8 1.61H9.02c-.83 0-1.3-.96-.79-1.61z" />
    </IconBase>
  ))
);

ChevronFullUpCircleRegularDuotone.displayName = 'ChevronFullUpCircleRegularDuotone';

// Triple export pattern
export { ChevronFullUpCircleRegularDuotone, ChevronFullUpCircleRegularDuotone as ChevronFullUpCircleRegularDuotoneIcon, ChevronFullUpCircleRegularDuotone as SiChevronFullUpCircleRegularDuotone };
export default ChevronFullUpCircleRegularDuotone;
export type { ChevronFullUpCircleRegularDuotoneProps };
