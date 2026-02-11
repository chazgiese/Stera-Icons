import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersRegularDuotone = memo(
  forwardRef<SVGSVGElement, SlidersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-duotone" {...props}>
      <path d="M11.33 16.25a4 4 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5zM22 16.25a.75.75 0 0 1 0 1.5h-3.33a4 4 0 0 0 0-1.5zM5.33 6.25a4 4 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5zM22 6.25a.75.75 0 0 1 0 1.5h-9.33a4 4 0 0 0 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M15 13.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M9 3.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersRegularDuotone.displayName = 'SlidersRegularDuotone';

// Triple export pattern (lucide-react style)
export { SlidersRegularDuotone, SlidersRegularDuotone as SlidersRegularDuotoneIcon, SlidersRegularDuotone as SiSlidersRegularDuotone };
export default SlidersRegularDuotone;
export type { SlidersRegularDuotoneProps };
