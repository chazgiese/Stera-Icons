import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVBoldProps = Omit<IconBaseProps, 'children'>;

const SlidersVBold = memo(
  forwardRef<SVGSVGElement, SlidersVBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-v-bold" {...props}>
      <path fillRule="evenodd" d="M11 15a4 4 0 0 1-3 3.87V22a1 1 0 1 1-2 0v-3.13a4 4 0 0 1 0-7.74V2a1 1 0 0 1 2 0v9.13A4 4 0 0 1 11 15m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 9a4 4 0 0 1-3 3.87V22a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.74V2a1 1 0 1 1 2 0v3.13A4 4 0 0 1 21 9m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersVBold.displayName = 'SlidersVBold';

// Triple export pattern (lucide-react style)
export { SlidersVBold, SlidersVBold as SlidersVBoldIcon, SlidersVBold as SiSlidersVBold };
export default SlidersVBold;
export type { SlidersVBoldProps };
