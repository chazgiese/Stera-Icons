import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WrenchFillDuotone = memo(
  forwardRef<SVGSVGElement, WrenchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrench-fill-duotone" {...props}>
      <path fill="currentColor" d="m14.84 4-2.39 2.4a1 1 0 0 0-.27.93l.72 3.03a1 1 0 0 0 .74.74l3.03.72a1 1 0 0 0 .93-.27l2.4-2.4a5.33 5.33 0 0 1-7.21 5.21 1 1 0 0 0-.95.14l-.1.1-4.93 4.92a1.65 1.65 0 0 1-2.33-2.33l4.93-4.93a1 1 0 0 0 .23-1.05 5.35 5.35 0 0 1 5.2-7.2" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.46 4.15A7.3 7.3 0 0 1 16.3 2.2c1.25.28 1.43 1.75.69 2.5L14.26 7.4l.44 1.89 1.89.44 2.72-2.73c.73-.72 2.13-.57 2.47.58l.03.11.1.45a7.34 7.34 0 0 1-9.19 8.28l-4.5 4.5a3.65 3.65 0 0 1-5.15-5.15l4.5-4.5a7.3 7.3 0 0 1 1.89-7.13M14.84 4a5.33 5.33 0 0 0-5.2 7.21 1 1 0 0 1-.23 1.05L4.48 17.2a1.65 1.65 0 0 0 2.33 2.33l4.93-4.93.1-.1a1 1 0 0 1 .95-.13 5.35 5.35 0 0 0 7.2-5.2l-2.39 2.39a1 1 0 0 1-.93.27l-3.03-.72a1 1 0 0 1-.74-.74l-.72-3.03a1 1 0 0 1 .27-.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

WrenchFillDuotone.displayName = 'WrenchFillDuotone';

// Triple export pattern (lucide-react style)
export { WrenchFillDuotone, WrenchFillDuotone as WrenchFillDuotoneIcon, WrenchFillDuotone as SiWrenchFillDuotone };
export default WrenchFillDuotone;
export type { WrenchFillDuotoneProps };
