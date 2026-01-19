import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.97 6.97c.3-.3.77-.3 1.06 0l4.5 4.5c.3.3.3.77 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 12 9.97 8.03a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ChevronCircleRightRegularDuotone.displayName = 'ChevronCircleRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightRegularDuotone, ChevronCircleRightRegularDuotone as ChevronCircleRightRegularDuotoneIcon, ChevronCircleRightRegularDuotone as SiChevronCircleRightRegularDuotone };
export type { ChevronCircleRightRegularDuotoneProps };
