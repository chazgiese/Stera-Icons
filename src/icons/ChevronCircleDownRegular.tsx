import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down" {...props}>
      <path fill="currentColor" d="M15.47 9.97a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06L12 13.44z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownRegular.displayName = 'ChevronCircleDownRegular';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownRegular, ChevronCircleDownRegular as ChevronCircleDownRegularIcon, ChevronCircleDownRegular as SiChevronCircleDownRegular };
export default ChevronCircleDownRegular;
export type { ChevronCircleDownRegularProps };
