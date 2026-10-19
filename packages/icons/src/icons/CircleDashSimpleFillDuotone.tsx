import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.31 19.47c.42-.24.96-.1 1.2.32s.1.95-.32 1.2c-1.53.88-3.3 1.39-5.19 1.39s-3.66-.51-5.19-1.4c-.42-.24-.56-.77-.32-1.19s.78-.56 1.2-.32c1.27.74 2.74 1.16 4.31 1.16s3.04-.42 4.31-1.16M3.01 6.81c.25-.42.78-.56 1.2-.32s.56.78.32 1.2C3.79 8.96 3.37 10.43 3.37 12s.42 3.04 1.16 4.31c.24.42.1.96-.32 1.2s-.95.1-1.2-.32c-.88-1.53-1.38-3.3-1.38-5.19S2.13 8.34 3 6.81M19.79 6.5c.42-.25.95-.1 1.2.31.88 1.53 1.39 3.3 1.39 5.19s-.51 3.66-1.4 5.19c-.24.42-.77.56-1.19.32s-.56-.78-.32-1.2c.74-1.27 1.16-2.74 1.16-4.31s-.42-3.04-1.16-4.31c-.24-.42-.1-.96.32-1.2M12 1.63c1.89 0 3.66.5 5.19 1.38.42.25.56.78.32 1.2s-.78.56-1.2.32c-1.27-.74-2.74-1.16-4.31-1.16s-3.04.42-4.31 1.16c-.42.24-.96.1-1.2-.32s-.1-.95.32-1.2c1.53-.88 3.3-1.38 5.19-1.38" opacity={0.4} />
        <path d="M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6" />
    </IconBase>
  ))
);

CircleDashSimpleFillDuotone.displayName = 'CircleDashSimpleFillDuotone';

// Triple export pattern
export { CircleDashSimpleFillDuotone, CircleDashSimpleFillDuotone as CircleDashSimpleFillDuotoneIcon, CircleDashSimpleFillDuotone as SiCircleDashSimpleFillDuotone };
export default CircleDashSimpleFillDuotone;
export type { CircleDashSimpleFillDuotoneProps };
