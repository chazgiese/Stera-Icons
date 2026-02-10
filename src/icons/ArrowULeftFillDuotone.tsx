import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M13.5 4a6.5 6.5 0 1 1 0 13H9v-2h4.5a4.5 4.5 0 1 0 0-9H9a1 1 0 0 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M7.3 11.3A1 1 0 0 1 9 12v8a1 1 0 0 1-1.7.7l-4-4-.07-.07a1 1 0 0 1 .06-1.34z" />
    </IconBase>
  ))
);

ArrowULeftFillDuotone.displayName = 'ArrowULeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftFillDuotone, ArrowULeftFillDuotone as ArrowULeftFillDuotoneIcon, ArrowULeftFillDuotone as SiArrowULeftFillDuotone };
export default ArrowULeftFillDuotone;
export type { ArrowULeftFillDuotoneProps };
