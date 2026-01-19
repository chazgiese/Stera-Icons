import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsLeftRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-left-right-fill-duotone" {...props}>
      <path d="M20.5 16.5a1 1 0 1 1 0 2h-13v-2zM16.5 8.5h-13a1 1 0 0 1 0-2h13z" opacity={0.4} />
        <path fill="currentColor" d="M5.8 12.8a1 1 0 0 1 1.7.7v8a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.08-1.33l.07-.08zM17.12 2.58a1 1 0 0 1 1.09.21l4 4 .06.08a1 1 0 0 1-.06 1.34l-4 4a1 1 0 0 1-1.71-.71v-8a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowsLeftRightFillDuotone.displayName = 'ArrowsLeftRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsLeftRightFillDuotone, ArrowsLeftRightFillDuotone as ArrowsLeftRightFillDuotoneIcon, ArrowsLeftRightFillDuotone as SiArrowsLeftRightFillDuotone };
export default ArrowsLeftRightFillDuotone;
export type { ArrowsLeftRightFillDuotoneProps };
