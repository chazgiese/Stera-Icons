import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFill = memo(
  forwardRef<SVGSVGElement, SoccerBallFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25q1.9.01 3.6.62a10.75 10.75 0 1 1-7.2 0q1.7-.61 3.6-.62M8.8 17.93l1.25 3.11a9 9 0 0 0 3.9 0l1.26-3.1-1.6-2.19h-3.23zm7.26-5.82-1.2 2.8 1.56 2.14 3.48-.24a9 9 0 0 0 1.25-3.47l-2.48-2.08zM2.85 13.34a9 9 0 0 0 1.25 3.47l3.48.24 1.56-2.15-1.2-2.8-2.6-.84zm5.4-9.8a9 9 0 0 0-3.38 2.57l.93 3.72 2.53.83 2.92-2.5V5.41zm4.5 1.88v2.73l2.92 2.5 2.53-.82.93-3.72a9 9 0 0 0-3.38-2.57z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallFill.displayName = 'SoccerBallFill';

// Triple export pattern (lucide-react style)
export { SoccerBallFill, SoccerBallFill as SoccerBallFillIcon, SoccerBallFill as SiSoccerBallFill };
export default SoccerBallFill;
export type { SoccerBallFillProps };
