import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-left-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.72 7.54a1.25 1.25 0 0 1 2.03.98v6.96a1.25 1.25 0 0 1-2.03.98l-4.35-3.48a1.25 1.25 0 0 1 0-1.96z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftBoldDuotone.displayName = 'ChevronFullCircleLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftBoldDuotone, ChevronFullCircleLeftBoldDuotone as ChevronFullCircleLeftBoldDuotoneIcon, ChevronFullCircleLeftBoldDuotone as SiChevronFullCircleLeftBoldDuotone };
export type { ChevronFullCircleLeftBoldDuotoneProps };
