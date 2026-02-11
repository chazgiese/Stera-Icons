import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFillDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-fill-duotone" {...props}>
      <path d="m13.6 16.13 1.54 2.12-1.43 3.55-.03.06a10 10 0 0 1-3.36 0l-.03-.06-1.43-3.55 1.54-2.12zM7.57 12.25 8.75 15l-1.5 2.08-4.03-.28a10 10 0 0 1-1.05-2.98l2.85-2.4zM21.83 13.82a10 10 0 0 1-1.06 2.98h-.06l-3.95.28L15.25 15l1.18-2.75 2.55-.83zM11 5.15v2.67l-2.91 2.5-2.45-.8L4.6 5.33l-.01-.04q1.28-1.41 3-2.27zM16.4 3.02q1.74.86 3.01 2.27v.04l-1.05 4.2-2.45.79L13 7.82V5.15z" opacity={0.4} />
        <path d="M12 2c1.58 0 3.08.37 4.4 1.02L13 5.15v2.67l2.91 2.5 2.45-.8 1.04-4.19.01-.04a10 10 0 0 1 2.42 8.53l-2.85-2.4-2.55.83L15.25 15l1.5 2.08 3.96-.28h.06a10 10 0 0 1-7.09 5.06l.03-.06 1.43-3.55-1.54-2.12h-3.2l-1.54 2.12 1.43 3.55.03.06a10 10 0 0 1-7.1-5.06l4.02.28L8.75 15l-1.18-2.75-2.55-.83-2.85 2.4A10 10 0 0 1 4.59 5.3v.04l1.05 4.2 2.45.79L11 7.82V5.15L7.6 3.02A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

SoccerBallFillDuotone.displayName = 'SoccerBallFillDuotone';

// Triple export pattern (lucide-react style)
export { SoccerBallFillDuotone, SoccerBallFillDuotone as SoccerBallFillDuotoneIcon, SoccerBallFillDuotone as SiSoccerBallFillDuotone };
export default SoccerBallFillDuotone;
export type { SoccerBallFillDuotoneProps };
