import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallRegularProps = Omit<IconBaseProps, 'children'>;

const SoccerBallRegular = memo(
  forwardRef<SVGSVGElement, SoccerBallRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.73 9.73 0 0 1 9.7 10.76 9.7 9.7 0 0 1-7.26 8.43A9.77 9.77 0 0 1 4.25 6.08 9.8 9.8 0 0 1 12 2.25m-2.8 15.1 1.1 2.72a8 8 0 0 0 3.4 0l1.1-2.72-1.38-1.9h-2.84zm-3.01.5q.97.97 2.23 1.58l-.6-1.47zm9.98.11-.6 1.47q1.27-.61 2.24-1.58zM3.84 13.24q.27 1.65 1.1 3.02l3.05.21 1.35-1.87-1.05-2.44-2.27-.74zm11.87-1.08-1.05 2.44L16 16.47l3.05-.21q.84-1.37 1.1-3.02l-2.18-1.82zm-5.95-.4.94 2.19h2.6l.94-2.19L12 9.84zm-5.2-3.31a8 8 0 0 0-.78 2.89L5 10.3zm14.43 1.85 1.23 1.04a8 8 0 0 0-.77-2.9zM8.62 4.47a8 8 0 0 0-2.95 2.25l.81 3.27 2.2.72 2.57-2.2V6.1zm4.13 1.65V8.5l2.57 2.2 2.2-.71.81-3.27a8 8 0 0 0-2.95-2.25zM12 3.75q-.75 0-1.49.13l1.49.94 1.49-.94A8 8 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallRegular.displayName = 'SoccerBallRegular';

// Triple export pattern (lucide-react style)
export { SoccerBallRegular, SoccerBallRegular as SoccerBallRegularIcon, SoccerBallRegular as SiSoccerBallRegular };
export default SoccerBallRegular;
export type { SoccerBallRegularProps };
