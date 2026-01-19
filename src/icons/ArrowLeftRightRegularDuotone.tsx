import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-right-duotone" {...props}>
      <path fill="currentColor" d="m20.94 12-.75.75H3.81L3.06 12l.75-.75H20.2z" opacity={.4} />
        <path fill="currentColor" d="M5.97 6.97a.75.75 0 1 1 1.06 1.06L3.06 12l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06zM16.97 6.97c.3-.3.77-.3 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L20.94 12l-3.97-3.97a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowLeftRightRegularDuotone.displayName = 'ArrowLeftRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightRegularDuotone, ArrowLeftRightRegularDuotone as ArrowLeftRightRegularDuotoneIcon, ArrowLeftRightRegularDuotone as SiArrowLeftRightRegularDuotone };
export default ArrowLeftRightRegularDuotone;
export type { ArrowLeftRightRegularDuotoneProps };
