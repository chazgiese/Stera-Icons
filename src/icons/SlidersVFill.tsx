import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersVFillProps = Omit<IconBaseProps, 'children'>;

const SlidersVFill = memo(
  forwardRef<SVGSVGElement, SlidersVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-v-fill" {...props}>
      <path fill="currentColor" d="M11 15a4 4 0 0 1-3 3.87V22a1 1 0 1 1-2 0v-3.13a4 4 0 0 1 0-7.74V2a1 1 0 0 1 2 0v9.13A4 4 0 0 1 11 15M21 9a4 4 0 0 1-3 3.87V22a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.74V2a1 1 0 1 1 2 0v3.13A4 4 0 0 1 21 9" />
    </IconBase>
  ))
);

SlidersVFill.displayName = 'SlidersVFill';

// Triple export pattern (lucide-react style)
export { SlidersVFill, SlidersVFill as SlidersVFillIcon, SlidersVFill as SiSlidersVFill };
export type { SlidersVFillProps };
