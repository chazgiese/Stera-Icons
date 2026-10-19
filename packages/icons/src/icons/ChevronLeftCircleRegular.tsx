import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftCircleRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftCircleRegular = memo(
  forwardRef<SVGSVGElement, ChevronLeftCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.97 7.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L10.56 12l3.47 3.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4q-.21-.22-.22-.53 0-.31.22-.53z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronLeftCircleRegular.displayName = 'ChevronLeftCircleRegular';

// Triple export pattern
export { ChevronLeftCircleRegular, ChevronLeftCircleRegular as ChevronLeftCircleRegularIcon, ChevronLeftCircleRegular as SiChevronLeftCircleRegular };
export default ChevronLeftCircleRegular;
export type { ChevronLeftCircleRegularProps };
