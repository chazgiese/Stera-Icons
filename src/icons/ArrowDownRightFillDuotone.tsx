import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M5.3 5.3a1 1 0 0 1 1.4 0l6.8 6.79-1.41 1.41-6.8-6.8a1 1 0 0 1 0-1.4" opacity={.4} />
        <path fill="currentColor" d="M17.3 8.3A1 1 0 0 1 19 9v9a1 1 0 0 1-1 1H9a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

ArrowDownRightFillDuotone.displayName = 'ArrowDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownRightFillDuotone, ArrowDownRightFillDuotone as ArrowDownRightFillDuotoneIcon, ArrowDownRightFillDuotone as SiArrowDownRightFillDuotone };
export type { ArrowDownRightFillDuotoneProps };
