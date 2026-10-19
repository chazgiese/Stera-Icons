import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallBoldProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBold = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5q2.05.01 3.87.73c1.78.71 3.33 1.9 4.47 3.4C21.7 7.39 22.5 9.6 22.5 12q0 .55-.06 1.08c-.17 1.74-.78 3.35-1.7 4.73-1.4 2.12-3.57 3.7-6.11 4.36q-1.26.33-2.63.33t-2.63-.33c-2.54-.66-4.7-2.24-6.12-4.36-.92-1.38-1.52-3-1.7-4.73Q1.5 12.55 1.5 12c0-2.4.8-4.6 2.16-6.37 1.14-1.5 2.69-2.69 4.47-3.4q1.8-.72 3.87-.73M9.28 17.68l1.07 2.66q.81.16 1.65.16t1.64-.16l1.08-2.66-1.33-1.83h-2.78zm-2.85.74q.65.56 1.39.98l-.37-.9zm10.12.07-.37.9q.75-.41 1.39-.97zM3.6 13.4q.28 1.58 1.05 2.9l3 .21 1.3-1.78-1.03-2.38-1.66-.55-.54-.17zm14.12-1.6-1.66.55-1.03 2.38 1.3 1.78 3-.2q.77-1.33 1.05-2.9l-2.12-1.78zm-7.85.02.88 2.04h2.48l.88-2.04L12 9.99zM4.08 8.9q-.35.9-.5 1.9l.81-.67zm15.53 1.23.8.68q-.14-1-.5-1.91zM8.4 4.3q-1.67.8-2.87 2.19l.8 3.24 2.11.68L11 8.2v-2.3zM13 5.9v2.31l2.55 2.19 2.1-.68.8-3.24q-1.19-1.4-2.87-2.19zm-1-2.4q-.5 0-.98.06l.98.61.98-.61Q12.5 3.5 12 3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBold.displayName = 'SoccerBallBold';

// Triple export pattern
export { SoccerBallBold, SoccerBallBold as SoccerBallBoldIcon, SoccerBallBold as SiSoccerBallBold };
export default SoccerBallBold;
export type { SoccerBallBoldProps };
