import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersFillDuotone = memo(
  forwardRef<SVGSVGElement, SlidersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-fill-duotone" {...props}>
      <path d="M11.13 16a4 4 0 0 0 0 2H2a1 1 0 1 1 0-2zM22 16a1 1 0 1 1 0 2h-3.13a4 4 0 0 0 0-2zM5.13 6a4 4 0 0 0 0 2H2a1 1 0 0 1 0-2zM22 6a1 1 0 1 1 0 2h-9.13a4 4 0 0 0 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M15 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

SlidersFillDuotone.displayName = 'SlidersFillDuotone';

// Triple export pattern (lucide-react style)
export { SlidersFillDuotone, SlidersFillDuotone as SlidersFillDuotoneIcon, SlidersFillDuotone as SiSlidersFillDuotone };
export default SlidersFillDuotone;
export type { SlidersFillDuotoneProps };
