import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down" {...props}>
      <path fill="currentColor" d="M15.97 9.97a.75.75 0 0 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06L12 13.94z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownRegular.displayName = 'ChevronCircleDownRegular';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownRegular, ChevronCircleDownRegular as ChevronCircleDownRegularIcon, ChevronCircleDownRegular as SiChevronCircleDownRegular };
export default ChevronCircleDownRegular;
export type { ChevronCircleDownRegularProps };
