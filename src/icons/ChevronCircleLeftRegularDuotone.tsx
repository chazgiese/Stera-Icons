import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-left-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12.97 7.47a.75.75 0 0 1 1.06 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ChevronCircleLeftRegularDuotone.displayName = 'ChevronCircleLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftRegularDuotone, ChevronCircleLeftRegularDuotone as ChevronCircleLeftRegularDuotoneIcon, ChevronCircleLeftRegularDuotone as SiChevronCircleLeftRegularDuotone };
export default ChevronCircleLeftRegularDuotone;
export type { ChevronCircleLeftRegularDuotoneProps };
