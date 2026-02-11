import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFill = memo(
  forwardRef<SVGSVGElement, SoccerBallFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 0 1 9.95 11.03 9.95 9.95 0 0 1-7.45 8.65A10.02 10.02 0 0 1 2 12a10 10 0 0 1 6.32-9.3A10 10 0 0 1 12 2M9.48 17.39l1 2.47a8 8 0 0 0 3.04 0l1-2.47-1.23-1.69h-2.58zm-5.37-4.05q.25 1.45.97 2.68l2.78.2 1.2-1.65-.95-2.21-1.66-.54-.38-.12zm13.44-1.52-1.66.54-.95 2.21 1.2 1.64 2.78-.2q.71-1.2.97-2.67l-1.96-1.64zM8.6 4.75a8 8 0 0 0-2.66 2.03l.75 3.01 1.94.63L11 8.4V6.25zm4.4 1.5V8.4l2.37 2.03 1.94-.63.75-3.01a8 8 0 0 0-2.66-2.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallFill.displayName = 'SoccerBallFill';

// Triple export pattern (lucide-react style)
export { SoccerBallFill, SoccerBallFill as SoccerBallFillIcon, SoccerBallFill as SiSoccerBallFill };
export default SoccerBallFill;
export type { SoccerBallFillProps };
