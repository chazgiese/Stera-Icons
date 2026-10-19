import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallRegularDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.68 3.41q1 .2 1.88.6l-2.81 1.76v2.56l2.74 2.35 2.37-.77.87-3.5q.66.8 1.12 1.72l-.52 2.1 1.4 1.17.02.6q0 .66-.1 1.3l-2.33-1.96-2.44.8-1.12 2.61 1.46 2.01 3.26-.22q-.53.86-1.23 1.59l-1.88.13-.67 1.67q-.9.42-1.87.63L15 17.65l-1.48-2.05h-3.04L9 17.65l1.17 2.9q-.98-.2-1.87-.62l-.68-1.67-1.87-.13q-.7-.73-1.23-1.6l3.26.23 1.46-2-1.12-2.63-2.45-.8-2.33 1.96q-.09-.63-.09-1.29 0-.3.02-.6l1.4-1.18-.52-2.09q.45-.93 1.12-1.72l.87 3.5 2.37.77 2.74-2.35V5.77L8.44 4q.9-.4 1.88-.6L12 4.47zm-4.1 8.33 1.01 2.36h2.82l1-2.36L12 9.66z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallRegularDuotone.displayName = 'SoccerBallRegularDuotone';

// Triple export pattern
export { SoccerBallRegularDuotone, SoccerBallRegularDuotone as SoccerBallRegularDuotoneIcon, SoccerBallRegularDuotone as SiSoccerBallRegularDuotone };
export default SoccerBallRegularDuotone;
export type { SoccerBallRegularDuotoneProps };
