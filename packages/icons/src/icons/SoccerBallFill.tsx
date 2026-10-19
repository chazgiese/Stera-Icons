import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFill = memo(
  forwardRef<SVGSVGElement, SoccerBallFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75q2 0 3.77.72c1.75.69 3.26 1.84 4.38 3.3 1.32 1.73 2.1 3.9 2.1 6.23q0 .54-.05 1.06c-.18 1.7-.76 3.27-1.66 4.61-1.38 2.08-3.5 3.62-5.98 4.26q-1.23.31-2.56.32-1.32 0-2.56-.32c-2.48-.64-4.6-2.18-5.98-4.26-.9-1.34-1.48-2.92-1.66-4.61q-.05-.52-.05-1.06c0-2.34.78-4.5 2.1-6.22C4.97 4.3 6.48 3.16 8.23 2.47Q10 1.76 12 1.75m-3 15.9 1.17 2.9q.9.2 1.83.2.95 0 1.83-.2l1.17-2.9-1.48-2.05h-3.04zm-5.65-4.36q.26 1.77 1.17 3.25l3.26.22 1.46-2-1.12-2.63-2.44-.8zm12.53-1.16-1.12 2.62 1.46 2.01 3.26-.22q.9-1.47 1.17-3.25l-2.33-1.95zM8.44 4.01q-1.88.84-3.17 2.4l.87 3.5 2.37.77 2.74-2.35V5.77zm4.31 1.76v2.56l2.74 2.35 2.37-.77.87-3.5q-1.3-1.56-3.17-2.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallFill.displayName = 'SoccerBallFill';

// Triple export pattern
export { SoccerBallFill, SoccerBallFill as SoccerBallFillIcon, SoccerBallFill as SiSoccerBallFill };
export default SoccerBallFill;
export type { SoccerBallFillProps };
