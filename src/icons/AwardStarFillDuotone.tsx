import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AwardStarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AwardStarFillDuotone = memo(
  forwardRef<SVGSVGElement, AwardStarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 13.34V17a4 4 0 0 1 4 4H7a4 4 0 0 1 4-4v-3.66l1-.59z" opacity={.4} />
        <path fill="currentColor" d="M17.5 21a1 1 0 0 1 0 2h-11a1 1 0 0 1 0-2zM11.06 1.76a1.1 1.1 0 0 1 1.88 0l.08.16 1.43 3.31 3.6.34a1.1 1.1 0 0 1 .64 1.93l-2.72 2.38.8 3.52a1.1 1.1 0 0 1-1.65 1.2L12 12.74 8.88 14.6a1.1 1.1 0 0 1-1.64-1.2l.8-3.51L5.3 7.5a1.1 1.1 0 0 1 .63-1.93l3.61-.34 1.43-3.31z" />
    </IconBase>
  ))
);

AwardStarFillDuotone.displayName = 'AwardStarFillDuotone';

// Triple export pattern (lucide-react style)
export { AwardStarFillDuotone, AwardStarFillDuotone as AwardStarFillDuotoneIcon, AwardStarFillDuotone as SiAwardStarFillDuotone };
export default AwardStarFillDuotone;
export type { AwardStarFillDuotoneProps };
