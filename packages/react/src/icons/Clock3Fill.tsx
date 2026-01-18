import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock3FillProps = Omit<IconBaseProps, 'children'>;

const Clock3Fill = memo(
  forwardRef<SVGSVGElement, Clock3FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock3Fill.displayName = 'Clock3Fill';

// Triple export pattern (lucide-react style)
export { Clock3Fill, Clock3Fill as Clock3FillIcon, Clock3Fill as SiClock3Fill };
export type { Clock3FillProps };
