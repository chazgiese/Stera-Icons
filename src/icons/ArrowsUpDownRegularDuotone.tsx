import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsUpDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-duotone" {...props}>
      <path d="M7.75 4.81V21a.75.75 0 0 1-1.5 0V4.81L7 4.06zM17 3.25c.41 0 .75.34.75.75v16.19l-.75.75-.75-.75V4c0-.41.34-.75.75-.75" opacity={0.4} />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 7 7 3 3 7m18 11-4 4-4-4" />
    </IconBase>
  ))
);

ArrowsUpDownRegularDuotone.displayName = 'ArrowsUpDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownRegularDuotone, ArrowsUpDownRegularDuotone as ArrowsUpDownRegularDuotoneIcon, ArrowsUpDownRegularDuotone as SiArrowsUpDownRegularDuotone };
export default ArrowsUpDownRegularDuotone;
export type { ArrowsUpDownRegularDuotoneProps };
