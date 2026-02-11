import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallRegularDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13.49 3.89q1 .19 1.89.58l-2.63 1.65V8.5l2.57 2.2 2.2-.71.82-3.27q.66.78 1.1 1.73L19 10.3l1.23 1.04a8 8 0 0 1-.06 1.9l-2.18-1.82-2.27.74-1.05 2.44L16 16.47l3.06-.21a8 8 0 0 1-1.25 1.59l-1.65.11-.6 1.48q-.88.43-1.87.63l1.1-2.72-1.38-1.9h-2.84l-1.38 1.9 1.1 2.72a8 8 0 0 1-1.88-.63l-.6-1.48-1.64-.11q-.72-.72-1.25-1.59l3.06.21 1.35-1.87-1.05-2.44-2.27-.74-2.18 1.82a8 8 0 0 1-.06-1.9L5 10.3l-.46-1.85Q5 7.5 5.66 6.72l.82 3.27 2.2.72 2.57-2.2V6.1L8.62 4.48q.9-.4 1.9-.58l1.48.93zm-3.73 7.87.93 2.19h2.62l.93-2.19L12 9.84z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallRegularDuotone.displayName = 'SoccerBallRegularDuotone';

// Triple export pattern (lucide-react style)
export { SoccerBallRegularDuotone, SoccerBallRegularDuotone as SoccerBallRegularDuotoneIcon, SoccerBallRegularDuotone as SiSoccerBallRegularDuotone };
export default SoccerBallRegularDuotone;
export type { SoccerBallRegularDuotoneProps };
