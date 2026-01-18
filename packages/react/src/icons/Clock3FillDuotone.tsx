import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock3FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock3FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock3FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock3FillDuotone.displayName = 'Clock3FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock3FillDuotone, Clock3FillDuotone as Clock3FillDuotoneIcon, Clock3FillDuotone as SiClock3FillDuotone };
export type { Clock3FillDuotoneProps };
