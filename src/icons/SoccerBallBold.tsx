import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerBallBoldProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBold = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 0 1 10.98 11.6l.1.08-.11.14a11 11 0 0 1-7.73 9.7l-.02.06-.09-.04a11 11 0 0 1-6.26 0l-.09.04-.03-.07a11 11 0 0 1-7.72-9.69l-.11-.14.1-.08L1 12A11 11 0 0 1 12 1m-1.49 15-1.43 1.97 1.15 2.85a9 9 0 0 0 3.54 0l1.15-2.85L13.5 16zm6.24 2.79-.45 1.12q.93-.52 1.7-1.21zM6 18.69q.79.7 1.71 1.22l-.45-1.12zm-2.87-5.24a9 9 0 0 0 1.13 3.12l3.2.23 1.4-1.93-1.1-2.56-2.36-.77zm13.12-1.14-1.1 2.56 1.4 1.93 3.21-.23q.85-1.43 1.13-3.12l-2.27-1.91zm-6.53-.53.95 2.22h2.68l.95-2.22L12 9.82zM3.68 8.57q-.45 1.09-.6 2.3l.97-.82zm16.27 1.48.98.82q-.16-1.21-.61-2.3zM8.23 3.83a9 9 0 0 0-3.09 2.34l.87 3.47 2.27.73L11 8.04V5.55zM13 5.55v2.49l2.72 2.33L18 9.64l.87-3.47c-.85-.99-1.9-1.8-3.1-2.34zM12 3q-.6 0-1.19.08l1.19.74 1.18-.74A9 9 0 0 0 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBold.displayName = 'SoccerBallBold';

// Triple export pattern (lucide-react style)
export { SoccerBallBold, SoccerBallBold as SoccerBallBoldIcon, SoccerBallBold as SiSoccerBallBold };
export default SoccerBallBold;
export type { SoccerBallBoldProps };
