import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock8BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock8BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.06.34v.02a1 1 0 0 1-.35.44l-.01.01-.07.05h-.01l-3.47 2a1 1 0 0 1-1-1.73l2.97-1.7V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock8BoldDuotone.displayName = 'Clock8BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock8BoldDuotone, Clock8BoldDuotone as Clock8BoldDuotoneIcon, Clock8BoldDuotone as SiClock8BoldDuotone };
export type { Clock8BoldDuotoneProps };
