import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerBallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFillDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-fill-duotone" {...props}>
      <path d="m13.87 16.27 1.82 2.51-1.5 3.75h.02a11 11 0 0 1-4.42 0h.03L8.3 18.78l1.82-2.51zM19.16 20.02a11 11 0 0 0 2.09-2.54l-4.16.29-1.8-2.48 1.38-3.23 3.01-.97 2.95 2.48a10.7 10.7 0 0 1-3.47 6.45M7.33 12.06 8.7 15.3l-1.8 2.47-4.16-.29c-.7-1.17-1.18-2.5-1.38-3.9l2.95-2.48zM11.14 4.36V7.5L7.77 10.4l-2.92-.94-1.08-4.36a11 11 0 0 1 3.87-2.92zM20.23 5.09l-1.08 4.36-2.93.94-3.36-2.88V4.36l3.5-2.19c1.5.67 2.83 1.67 3.87 2.92" opacity={0.4} />
        <path fill="currentColor" d="M12 1.25q2.35.02 4.36.92l-3.5 2.19V7.5l3.36 2.88 2.93-.94 1.08-4.36a10.7 10.7 0 0 1 2.4 8.48l-2.95-2.48-3 .97-1.39 3.23 1.8 2.48 4.16-.3a10.8 10.8 0 0 1-7.07 5.06l1.51-3.75-1.82-2.51h-3.74l-1.82 2.51 1.5 3.75c-3-.62-5.54-2.5-7.06-5.06l4.16.3 1.8-2.48-1.38-3.23-3.01-.97-2.95 2.48q-.12-.77-.12-1.57c0-2.63.95-5.04 2.52-6.91l1.08 4.36 2.92.94 3.37-2.88V4.36l-3.5-2.19q2-.9 4.36-.92" />
    </IconBase>
  ))
);

SoccerBallFillDuotone.displayName = 'SoccerBallFillDuotone';

// Triple export pattern (lucide-react style)
export { SoccerBallFillDuotone, SoccerBallFillDuotone as SoccerBallFillDuotoneIcon, SoccerBallFillDuotone as SiSoccerBallFillDuotone };
export type { SoccerBallFillDuotoneProps };
