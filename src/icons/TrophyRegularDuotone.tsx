import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrophyRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrophyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trophy-duotone" {...props}>
      <path d="M15.02 16.87c1.3.5 2.23 1.75 2.23 3.23v.9c0 .41-.34.75-.75.75h-9a.75.75 0 0 1-.75-.75v-.9c0-1.48.93-2.74 2.23-3.23l.6.95.22.33h.4c-1.08 0-1.95.87-1.95 1.95v.15h7.5v-.15c0-1.08-.87-1.95-1.95-1.95h.4l.22-.33q.32-.48.6-.95M19.67 4.5a1.88 1.88 0 0 1 1.85 2.18l-.4 2.45a4.4 4.4 0 0 1-2.06 3.02l-2.5 1.5q.38-1.08.62-2.12l1.11-.67a2.9 2.9 0 0 0 1.34-1.97l.41-2.45a.4.4 0 0 0-.37-.44h-1.95l-.03-1.5zM6.3 4.5l-.01.3V6H4.33c-.23 0-.4.2-.37.44l.4 2.45c.15.82.64 1.54 1.35 1.97l1.11.67q.23 1.04.63 2.12l-2.5-1.5a4.4 4.4 0 0 1-2.06-3.02l-.41-2.45A1.88 1.88 0 0 1 4.33 4.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.15 2.25c1.4 0 2.55 1.14 2.56 2.54.04 3.95-.03 8.15-3.29 13.03l-.22.33H9.8l-.22-.33c-3.25-4.88-3.33-9.08-3.3-13.03a2.57 2.57 0 0 1 2.57-2.54zm-6.3 1.5c-.58 0-1.06.47-1.06 1.06-.04 3.78.04 7.5 2.82 11.84h2.78c2.78-4.34 2.86-8.06 2.82-11.84 0-.59-.48-1.06-1.06-1.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyRegularDuotone.displayName = 'TrophyRegularDuotone';

// Triple export pattern (lucide-react style)
export { TrophyRegularDuotone, TrophyRegularDuotone as TrophyRegularDuotoneIcon, TrophyRegularDuotone as SiTrophyRegularDuotone };
export default TrophyRegularDuotone;
export type { TrophyRegularDuotoneProps };
