import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrophyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrophyBoldDuotone = memo(
  forwardRef<SVGSVGElement, TrophyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.6 17.33A4 4 0 0 1 18 21v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a4 4 0 0 1 2.4-3.67q.36.6.77 1.22l.3.45H10a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2h.53l.3-.45q.42-.61.76-1.22M20.52 3.5a2.25 2.25 0 0 1 2.22 2.62l-.45 2.72a5 5 0 0 1-2.36 3.47l-2.73 1.64q.51-1.44.8-2.82l.9-.54a3 3 0 0 0 1.42-2.08l.45-2.72a.25.25 0 0 0-.25-.29h-2V4q0-.27-.05-.5zM5.53 3.5q-.04.23-.05.5v1.5h-2a.25.25 0 0 0-.25.3l.45 2.71A3 3 0 0 0 5.1 10.6l.9.54q.29 1.38.8 2.82L4.07 12.3A5 5 0 0 1 1.7 8.84l-.45-2.72A2.25 2.25 0 0 1 3.48 3.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 1c1.65 0 3 1.34 3.02 3 .03 4.39-.05 9.1-3.69 14.55l-.3.45H9.46l-.3-.45C5.54 13.1 5.46 8.38 5.49 4 5.5 2.34 6.84 1 8.5 1zm-7 2c-.55 0-1.01.45-1.02 1-.03 4.18.05 8.25 3.06 13h2.92c3-4.75 3.1-8.82 3.06-13-.01-.55-.47-1-1.02-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyBoldDuotone.displayName = 'TrophyBoldDuotone';

// Triple export pattern (lucide-react style)
export { TrophyBoldDuotone, TrophyBoldDuotone as TrophyBoldDuotoneIcon, TrophyBoldDuotone as SiTrophyBoldDuotone };
export type { TrophyBoldDuotoneProps };
