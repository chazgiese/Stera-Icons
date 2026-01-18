import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersFillProps = Omit<IconBaseProps, 'children'>;

const SlidersFill = memo(
  forwardRef<SVGSVGElement, SlidersFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 13a4 4 0 0 1 3.87 3H22a1 1 0 1 1 0 2h-3.13a4 4 0 0 1-7.74 0H2a1 1 0 1 1 0-2h9.13A4 4 0 0 1 15 13M9 3a4 4 0 0 1 3.87 3H22a1 1 0 1 1 0 2h-9.13a4 4 0 0 1-7.74 0H2a1 1 0 0 1 0-2h3.13A4 4 0 0 1 9 3" />
    </IconBase>
  ))
);

SlidersFill.displayName = 'SlidersFill';

export { SlidersFill };
export type { SlidersFillProps };
