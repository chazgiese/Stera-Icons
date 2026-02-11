import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-left-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12.48 8.02a1.25 1.25 0 0 1 2.02 1v5.97c0 1.04-1.2 1.62-2.02.99l-3.84-3a1.25 1.25 0 0 1 0-1.97z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftBoldDuotone.displayName = 'ChevronFullCircleLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftBoldDuotone, ChevronFullCircleLeftBoldDuotone as ChevronFullCircleLeftBoldDuotoneIcon, ChevronFullCircleLeftBoldDuotone as SiChevronFullCircleLeftBoldDuotone };
export default ChevronFullCircleLeftBoldDuotone;
export type { ChevronFullCircleLeftBoldDuotoneProps };
