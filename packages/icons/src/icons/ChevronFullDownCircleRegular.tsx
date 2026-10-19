import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownCircleRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownCircleRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullDownCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.99 9.75c.83 0 1.3.96.79 1.61l-3 3.85c-.4.51-1.17.51-1.57 0l-2.99-3.85c-.5-.65-.04-1.61.8-1.61z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownCircleRegular.displayName = 'ChevronFullDownCircleRegular';

// Triple export pattern
export { ChevronFullDownCircleRegular, ChevronFullDownCircleRegular as ChevronFullDownCircleRegularIcon, ChevronFullDownCircleRegular as SiChevronFullDownCircleRegular };
export default ChevronFullDownCircleRegular;
export type { ChevronFullDownCircleRegularProps };
