import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-left-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.87 7.74a1 1 0 0 1 1.63.78v6.96a1 1 0 0 1-1.63.78l-4.34-3.48a1 1 0 0 1 0-1.56z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftRegularDuotone.displayName = 'ChevronFullCircleLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftRegularDuotone, ChevronFullCircleLeftRegularDuotone as ChevronFullCircleLeftRegularDuotoneIcon, ChevronFullCircleLeftRegularDuotone as SiChevronFullCircleLeftRegularDuotone };
export type { ChevronFullCircleLeftRegularDuotoneProps };
