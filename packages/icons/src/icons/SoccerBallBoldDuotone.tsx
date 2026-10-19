import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBoldDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.98 3.56q1.39.16 2.6.73L13 5.9v2.31l2.55 2.19 2.1-.68.8-3.24q.93 1.08 1.46 2.42l-.3 1.23.8.68q.09.59.09 1.19 0 .7-.12 1.4l-2.11-1.78-2.2.72-1.03 2.38 1.3 1.78 3-.2q-.72 1.21-1.78 2.12l-1.01.08-.37.9q-1.17.67-2.54.94l1.08-2.66-1.33-1.83h-2.78l-1.33 1.83 1.07 2.66Q9 20.07 7.82 19.4l-.37-.9-1.01-.08q-1.06-.91-1.77-2.12l3 .2 1.29-1.78-1.03-2.38-2.2-.72-2.11 1.77Q3.5 12.71 3.5 12q0-.6.08-1.2l.81-.67-.3-1.23q.52-1.34 1.45-2.42l.8 3.24 2.11.68L11 8.21v-2.3L8.42 4.28q1.21-.57 2.6-.73l.98.61zm-3.1 8.25.88 2.04h2.48l.88-2.04L12 9.99z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBoldDuotone.displayName = 'SoccerBallBoldDuotone';

// Triple export pattern
export { SoccerBallBoldDuotone, SoccerBallBoldDuotone as SoccerBallBoldDuotoneIcon, SoccerBallBoldDuotone as SiSoccerBallBoldDuotone };
export default SoccerBallBoldDuotone;
export type { SoccerBallBoldDuotoneProps };
