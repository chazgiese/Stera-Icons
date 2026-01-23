import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-up-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.22 8.53a1 1 0 0 1 1.56 0l3.48 4.34a1 1 0 0 1-.78 1.63H8.52a1 1 0 0 1-.78-1.63z" />
    </IconBase>
  ))
);

ChevronFullCircleUpRegularDuotone.displayName = 'ChevronFullCircleUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpRegularDuotone, ChevronFullCircleUpRegularDuotone as ChevronFullCircleUpRegularDuotoneIcon, ChevronFullCircleUpRegularDuotone as SiChevronFullCircleUpRegularDuotone };
export default ChevronFullCircleUpRegularDuotone;
export type { ChevronFullCircleUpRegularDuotoneProps };
