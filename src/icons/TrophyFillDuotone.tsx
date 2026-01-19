import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrophyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrophyFillDuotone = memo(
  forwardRef<SVGSVGElement, TrophyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trophy-fill-duotone" {...props}>
      <path d="M14 18a4 4 0 0 1 4 4 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1 4 4 0 0 1 4-4zM20.52 3.5a2.25 2.25 0 0 1 2.22 2.62l-.45 2.72a5 5 0 0 1-2.36 3.47l-2.73 1.64q.51-1.44.8-2.82l.9-.54a3 3 0 0 0 1.42-2.08l.45-2.72a.25.25 0 0 0-.25-.29h-2l-.02-1.76-.03-.24zM5.53 3.5q-.04.23-.05.5v1.5h-2a.25.25 0 0 0-.25.3l.45 2.71A3 3 0 0 0 5.1 10.6l.9.54q.28 1.38.8 2.82L4.07 12.3A5 5 0 0 1 1.7 8.84l-.45-2.72A2.25 2.25 0 0 1 3.48 3.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.48 5.5c.01 1.8.11 3.68.52 5.63a20 20 0 0 0 2.9 7.02A4 4 0 0 1 10 18h4a4 4 0 0 1 1.1.15q1.36-2.18 2.1-4.2.52-1.44.8-2.82c.4-1.95.5-3.82.52-5.63V4q0-.27-.05-.5A3 3 0 0 0 15.65 1H8.5a3 3 0 0 0-3.01 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyFillDuotone.displayName = 'TrophyFillDuotone';

// Triple export pattern (lucide-react style)
export { TrophyFillDuotone, TrophyFillDuotone as TrophyFillDuotoneIcon, TrophyFillDuotone as SiTrophyFillDuotone };
export default TrophyFillDuotone;
export type { TrophyFillDuotoneProps };
