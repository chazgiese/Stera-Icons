import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right" {...props}>
      <path d="M9.97 7.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L13.44 12 9.97 8.53a.75.75 0 0 1 0-1.06" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightRegular.displayName = 'ChevronCircleRightRegular';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightRegular, ChevronCircleRightRegular as ChevronCircleRightRegularIcon, ChevronCircleRightRegular as SiChevronCircleRightRegular };
export default ChevronCircleRightRegular;
export type { ChevronCircleRightRegularProps };
