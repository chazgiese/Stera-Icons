import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v8a4 4 0 0 0 4 4h9v-2H6a2 2 0 0 1-2-2V4a1 1 0 0 0-1-1" opacity={.4} />
        <path fill="currentColor" d="M16.7 9.3a1 1 0 0 0-1.7.7v10a1 1 0 0 0 1.7.7l5-5 .07-.07a1 1 0 0 0-.06-1.34z" />
    </IconBase>
  ))
);

ArrowCornerDownRightFillDuotone.displayName = 'ArrowCornerDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightFillDuotone, ArrowCornerDownRightFillDuotone as ArrowCornerDownRightFillDuotoneIcon, ArrowCornerDownRightFillDuotone as SiArrowCornerDownRightFillDuotone };
export type { ArrowCornerDownRightFillDuotoneProps };
