import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M8.62 4.08a1 1 0 0 1 1.09.21l7 7a1 1 0 0 1 0 1.42l-7 7A1 1 0 0 1 8 19V5a1 1 0 0 1 .62-.92M10 16.58 14.59 12 10 7.41z" clipRule="evenodd" />
        <path d="M14.59 12 10 16.59V7.4z" opacity={.4} />
    </IconBase>
  ))
);

ChevronRightFillDuotone.displayName = 'ChevronRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronRightFillDuotone, ChevronRightFillDuotone as ChevronRightFillDuotoneIcon, ChevronRightFillDuotone as SiChevronRightFillDuotone };
export default ChevronRightFillDuotone;
export type { ChevronRightFillDuotoneProps };
