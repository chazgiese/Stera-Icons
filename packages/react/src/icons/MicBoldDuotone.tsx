import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3" clipRule="evenodd" />
        <path fill="currentColor" d="M20 10a1 1 0 0 1 1 1 9 9 0 0 1-8 8.94V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06A9 9 0 0 1 3 11a1 1 0 1 1 2 0 7 7 0 1 0 14 0 1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

MicBoldDuotone.displayName = 'MicBoldDuotone';

// Triple export pattern (lucide-react style)
export { MicBoldDuotone, MicBoldDuotone as MicBoldDuotoneIcon, MicBoldDuotone as SiMicBoldDuotone };
export type { MicBoldDuotoneProps };
