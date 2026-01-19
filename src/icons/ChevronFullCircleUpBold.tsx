import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpBold = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-up-bold" {...props}>
      <path fill="currentColor" d="M11.02 8.37c.5-.63 1.46-.63 1.96 0l3.48 4.35c.65.82.07 2.03-.98 2.03H8.52a1.25 1.25 0 0 1-.98-2.03z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpBold.displayName = 'ChevronFullCircleUpBold';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpBold, ChevronFullCircleUpBold as ChevronFullCircleUpBoldIcon, ChevronFullCircleUpBold as SiChevronFullCircleUpBold };
export default ChevronFullCircleUpBold;
export type { ChevronFullCircleUpBoldProps };
