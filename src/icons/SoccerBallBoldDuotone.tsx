import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBoldDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12.77 4.04q1.4.14 2.63.72L13 6.26v2.13l2.37 2.03 1.94-.63.75-3a8 8 0 0 1 1.45 2.45l-.24.97.63.53a8 8 0 0 1-.01 2.6l-1.96-1.64-2.04.66-.95 2.21 1.2 1.64 2.78-.2a8 8 0 0 1-1.8 2.14l-.78.05-.27.69q-1.18.7-2.55.96l1-2.46-1.23-1.69h-2.58l-1.23 1.69 1 2.46a8 8 0 0 1-2.55-.96l-.27-.69-.78-.05a8 8 0 0 1-1.8-2.13l2.79.2 1.19-1.65-.95-2.21-2.04-.66-1.96 1.64a8 8 0 0 1-.01-2.6l.63-.53-.24-.97a8 8 0 0 1 1.45-2.46l.75 3.01 1.94.63L11 8.4V6.25l-2.4-1.5q1.23-.57 2.63-.71l.77.48zm-2.71 7.8.8 1.86h2.28l.8-1.87L12 10.17z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBoldDuotone.displayName = 'SoccerBallBoldDuotone';

// Triple export pattern (lucide-react style)
export { SoccerBallBoldDuotone, SoccerBallBoldDuotone as SoccerBallBoldDuotoneIcon, SoccerBallBoldDuotone as SiSoccerBallBoldDuotone };
export default SoccerBallBoldDuotone;
export type { SoccerBallBoldDuotoneProps };
