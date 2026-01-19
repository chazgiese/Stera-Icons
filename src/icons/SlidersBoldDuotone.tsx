import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersBoldDuotone = memo(
  forwardRef<SVGSVGElement, SlidersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-bold-duotone" {...props}>
      <path d="M11.13 16a4 4 0 0 0 0 2H2a1 1 0 1 1 0-2zM22 16a1 1 0 1 1 0 2h-3.13a4 4 0 0 0 0-2zM5.13 6a4 4 0 0 0 0 2H2a1 1 0 0 1 0-2zM22 6a1 1 0 1 1 0 2h-9.13a4 4 0 0 0 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersBoldDuotone.displayName = 'SlidersBoldDuotone';

// Triple export pattern (lucide-react style)
export { SlidersBoldDuotone, SlidersBoldDuotone as SlidersBoldDuotoneIcon, SlidersBoldDuotone as SiSlidersBoldDuotone };
export default SlidersBoldDuotone;
export type { SlidersBoldDuotoneProps };
