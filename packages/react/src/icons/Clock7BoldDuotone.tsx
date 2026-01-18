import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock7BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock7BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6l-.02.2-.02.06-.01.05-.01.03-.03.06v.03l-.04.06v.01l-2 3.46a1 1 0 0 1-1.74-1L11 11.73V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock7BoldDuotone.displayName = 'Clock7BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock7BoldDuotone, Clock7BoldDuotone as Clock7BoldDuotoneIcon, Clock7BoldDuotone as SiClock7BoldDuotone };
export type { Clock7BoldDuotoneProps };
