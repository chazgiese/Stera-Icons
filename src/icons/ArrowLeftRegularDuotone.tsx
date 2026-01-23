import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-duotone" {...props}>
      <path d="M19 11.25a.75.75 0 0 1 0 1.5H6.81L6.06 12l.75-.75zM4.26 11.87" opacity={0.4} />
        <path fill="currentColor" d="M11.47 4.47a.75.75 0 1 1 1.06 1.06L6.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ArrowLeftRegularDuotone.displayName = 'ArrowLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLeftRegularDuotone, ArrowLeftRegularDuotone as ArrowLeftRegularDuotoneIcon, ArrowLeftRegularDuotone as SiArrowLeftRegularDuotone };
export default ArrowLeftRegularDuotone;
export type { ArrowLeftRegularDuotoneProps };
