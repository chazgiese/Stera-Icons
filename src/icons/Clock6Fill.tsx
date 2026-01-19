import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock6FillProps = Omit<IconBaseProps, 'children'>;

const Clock6Fill = memo(
  forwardRef<SVGSVGElement, Clock6FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Fill.displayName = 'Clock6Fill';

// Triple export pattern (lucide-react style)
export { Clock6Fill, Clock6Fill as Clock6FillIcon, Clock6Fill as SiClock6Fill };
export type { Clock6FillProps };
