import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallBoldProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBold = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 0 1 9.95 11.03 9.95 9.95 0 0 1-7.45 8.65A10.02 10.02 0 0 1 2 12a10 10 0 0 1 6.32-9.3A10 10 0 0 1 12 2M9.48 17.39l1 2.47a8 8 0 0 0 3.04 0l1-2.47-1.23-1.69h-2.58zm-2.6.76q.5.4 1.05.74l-.28-.69zm9.46.05-.27.69q.56-.33 1.04-.74zM4.11 13.34q.25 1.45.97 2.68l2.78.2 1.2-1.65-.95-2.21-1.66-.54-.38-.12zm13.44-1.52-1.66.54-.95 2.21 1.2 1.64 2.78-.2q.71-1.2.97-2.67l-1.96-1.64zm-7.5.01.8 1.87h2.3l.79-1.87L12 10.17zM4.5 9.23q-.26.74-.4 1.51l.64-.53zm14.78.98.63.53a8 8 0 0 0-.4-1.5zM8.6 4.75a8 8 0 0 0-2.66 2.03l.75 3.01 1.94.63L11 8.4V6.25zm4.4 1.5V8.4l2.37 2.03 1.94-.63.75-3.01a8 8 0 0 0-2.66-2.03zM12 4q-.4 0-.77.04l.77.48.77-.48z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBold.displayName = 'SoccerBallBold';

// Triple export pattern (lucide-react style)
export { SoccerBallBold, SoccerBallBold as SoccerBallBoldIcon, SoccerBallBold as SiSoccerBallBold };
export default SoccerBallBold;
export type { SoccerBallBoldProps };
