import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock3BoldProps = Omit<IconBaseProps, 'children'>;

const Clock3Bold = memo(
  forwardRef<SVGSVGElement, Clock3BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-bold" {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock3Bold.displayName = 'Clock3Bold';

// Triple export pattern (lucide-react style)
export { Clock3Bold, Clock3Bold as Clock3BoldIcon, Clock3Bold as SiClock3Bold };
export type { Clock3BoldProps };
