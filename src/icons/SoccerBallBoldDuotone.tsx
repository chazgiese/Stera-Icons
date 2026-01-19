import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerBallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBoldDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="m20.93 10.87-.98-.82.37-1.49a9 9 0 0 0-1.46-2.39l-.87 3.47-2.27.73L13 8.04V5.55l2.77-1.73a9 9 0 0 0-2.58-.74L12 3.82l-1.19-.74q-1.36.18-2.58.74L11 5.55v2.49l-2.72 2.33L6 9.64l-.87-3.47a9 9 0 0 0-1.46 2.4l.37 1.48-.98.82a9 9 0 0 0 .05 2.58l2.27-1.91 2.37.77 1.1 2.56-1.4 1.93-3.21-.23q.71 1.2 1.74 2.13l1.26.09.45 1.12q1.18.64 2.53.92l-1.15-2.86L10.5 16h2.98l1.43 1.97-1.15 2.86q1.35-.28 2.53-.92l.45-1.12 1.26-.1a9 9 0 0 0 1.74-2.12l-3.2.23-1.4-1.93 1.09-2.56 2.37-.77 2.27 1.9a9 9 0 0 0 .05-2.57m-11.22.91.95 2.22h2.68l.95-2.22L12 9.82z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBoldDuotone.displayName = 'SoccerBallBoldDuotone';

// Triple export pattern (lucide-react style)
export { SoccerBallBoldDuotone, SoccerBallBoldDuotone as SoccerBallBoldDuotoneIcon, SoccerBallBoldDuotone as SiSoccerBallBoldDuotone };
export default SoccerBallBoldDuotone;
export type { SoccerBallBoldDuotoneProps };
