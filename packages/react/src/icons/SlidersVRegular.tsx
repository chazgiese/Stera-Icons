import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersVRegularProps = Omit<IconBaseProps, 'children'>;

const SlidersVRegular = memo(
  forwardRef<SVGSVGElement, SlidersVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.75 15a3.75 3.75 0 0 1-3 3.67V22a.75.75 0 0 1-1.5 0v-3.33a3.75 3.75 0 0 1 0-7.34V2a.75.75 0 0 1 1.5 0v9.33c1.71.34 3 1.86 3 3.67m-1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0M20.75 9a3.75 3.75 0 0 1-3 3.67V22a.75.75 0 0 1-1.5 0v-9.33a3.75 3.75 0 0 1 0-7.34V2a.75.75 0 0 1 1.5 0v3.33c1.71.34 3 1.86 3 3.67m-1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersVRegular.displayName = 'SlidersVRegular';

// Triple export pattern (lucide-react style)
export { SlidersVRegular, SlidersVRegular as SlidersVRegularIcon, SlidersVRegular as SiSlidersVRegular };
export type { SlidersVRegularProps };
