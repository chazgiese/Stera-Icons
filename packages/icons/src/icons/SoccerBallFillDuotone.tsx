import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFillDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.81 16.15 1.8 2.5-1.38 3.42c1.67-.38 3.18-1.17 4.43-2.27-1.78 1.57-4.1 2.52-6.66 2.52-2.54 0-4.86-.94-6.64-2.5 1.24 1.09 2.75 1.87 4.4 2.25L8.4 18.64l1.79-2.5zM22.03 13.45l.05-.45c-.23 2.7-1.5 5.09-3.4 6.78q1.12-1 1.92-2.29l-3.79.27-1.76-2.46 1.35-3.18 2.93-.96zM4.3 18.73c-1.24-1.46-2.07-3.28-2.33-5.28l2.7-2.3 2.93.97 1.35 3.18-1.77 2.46-3.78-.27q.4.66.9 1.24M11.32 1.9q-1.74.12-3.28.8l3.21 2.02v3.13l-3.26 2.82-2.85-.94-1-4.06q-.36.43-.65.9c1.69-2.64 4.54-4.45 7.83-4.66M12.68 1.9c3.32.23 6.2 2.06 7.87 4.74q-.3-.5-.69-.97l-1 4.06-2.85.94-3.26-2.82V4.72l3.21-2.03q-1.53-.66-3.28-.78" opacity={0.4} />
        <path d="M12 1.88c1.4 0 2.75.29 3.96.81l-3.21 2.03v3.13l3.26 2.82 2.85-.94 1-4.06c1.42 1.76 2.26 4 2.26 6.43q0 .69-.09 1.35l-2.7-2.3-2.93.97-1.35 3.18 1.76 2.46 3.79-.27c-1.41 2.29-3.69 3.97-6.37 4.58l1.37-3.43-1.79-2.5h-3.62l-1.8 2.5 1.38 3.43c-2.68-.6-4.96-2.3-6.37-4.58l3.78.27 1.77-2.46-1.35-3.18-2.93-.96-2.7 2.3q-.1-.67-.1-1.36c0-2.43.85-4.67 2.26-6.43l1 4.06 2.86.94 3.26-2.82V4.72L8.04 2.7q1.83-.8 3.96-.81" />
    </IconBase>
  ))
);

SoccerBallFillDuotone.displayName = 'SoccerBallFillDuotone';

// Triple export pattern
export { SoccerBallFillDuotone, SoccerBallFillDuotone as SoccerBallFillDuotoneIcon, SoccerBallFillDuotone as SiSoccerBallFillDuotone };
export default SoccerBallFillDuotone;
export type { SoccerBallFillDuotoneProps };
