import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersFillProps = Omit<IconBaseProps, 'children'>;

const SlidersFill = memo(
  forwardRef<SVGSVGElement, SlidersFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-fill" {...props}>
      <path fill="currentColor" d="M15 13a4 4 0 0 1 3.87 3H22a1 1 0 1 1 0 2h-3.13a4 4 0 0 1-7.74 0H2a1 1 0 1 1 0-2h9.13A4 4 0 0 1 15 13M9 3a4 4 0 0 1 3.87 3H22a1 1 0 1 1 0 2h-9.13a4 4 0 0 1-7.74 0H2a1 1 0 0 1 0-2h3.13A4 4 0 0 1 9 3" />
    </IconBase>
  ))
);

SlidersFill.displayName = 'SlidersFill';

// Triple export pattern (lucide-react style)
export { SlidersFill, SlidersFill as SlidersFillIcon, SlidersFill as SiSlidersFill };
export default SlidersFill;
export type { SlidersFillProps };
