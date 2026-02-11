import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersVRegularDuotone = memo(
  forwardRef<SVGSVGElement, SlidersVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-v-duotone" {...props}>
      <path d="M7.75 22a.75.75 0 0 1-1.5 0v-3.33a4 4 0 0 0 1.5 0zM17.75 22a.75.75 0 0 1-1.5 0v-9.33a4 4 0 0 0 1.5 0zM7 1.25c.41 0 .75.34.75.75v9.32a4 4 0 0 0-1.5 0V2c0-.41.34-.75.75-.75M17 1.25c.41 0 .75.34.75.75v3.32a4 4 0 0 0-1.5 0V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fillRule="evenodd" d="M7 11.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M17 5.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersVRegularDuotone.displayName = 'SlidersVRegularDuotone';

// Triple export pattern (lucide-react style)
export { SlidersVRegularDuotone, SlidersVRegularDuotone as SlidersVRegularDuotoneIcon, SlidersVRegularDuotone as SiSlidersVRegularDuotone };
export default SlidersVRegularDuotone;
export type { SlidersVRegularDuotoneProps };
