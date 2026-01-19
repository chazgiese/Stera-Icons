import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersBoldProps = Omit<IconBaseProps, 'children'>;

const SlidersBold = memo(
  forwardRef<SVGSVGElement, SlidersBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 13a4 4 0 0 1 3.87 3H22a1 1 0 1 1 0 2h-3.13a4 4 0 0 1-7.74 0H2a1 1 0 1 1 0-2h9.13A4 4 0 0 1 15 13m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 3a4 4 0 0 1 3.87 3H22a1 1 0 1 1 0 2h-9.13a4 4 0 0 1-7.74 0H2a1 1 0 0 1 0-2h3.13A4 4 0 0 1 9 3m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersBold.displayName = 'SlidersBold';

// Triple export pattern (lucide-react style)
export { SlidersBold, SlidersBold as SlidersBoldIcon, SlidersBold as SiSlidersBold };
export type { SlidersBoldProps };
