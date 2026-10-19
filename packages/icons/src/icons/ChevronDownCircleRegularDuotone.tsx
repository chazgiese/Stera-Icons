import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M15.47 9.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4 4q-.22.21-.53.22-.31 0-.53-.22l-4-4c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 13.44z" />
    </IconBase>
  ))
);

ChevronDownCircleRegularDuotone.displayName = 'ChevronDownCircleRegularDuotone';

// Triple export pattern
export { ChevronDownCircleRegularDuotone, ChevronDownCircleRegularDuotone as ChevronDownCircleRegularDuotoneIcon, ChevronDownCircleRegularDuotone as SiChevronDownCircleRegularDuotone };
export default ChevronDownCircleRegularDuotone;
export type { ChevronDownCircleRegularDuotoneProps };
