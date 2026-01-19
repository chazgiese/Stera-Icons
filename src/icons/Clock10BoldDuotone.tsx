import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock10BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock10BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.24.65l-.03.03-.04.04-.03.03-.12.1-.04.01a1 1 0 0 1-.32.12h-.04l-.12.02h-.13l-.08-.02h-.02l-.15-.05-.04-.01-.1-.05-3.47-2a1 1 0 0 1 1-1.74L11 10.27V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock10BoldDuotone.displayName = 'Clock10BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock10BoldDuotone, Clock10BoldDuotone as Clock10BoldDuotoneIcon, Clock10BoldDuotone as SiClock10BoldDuotone };
export type { Clock10BoldDuotoneProps };
