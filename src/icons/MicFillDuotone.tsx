import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicFillDuotone = memo(
  forwardRef<SVGSVGElement, MicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 1a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5" />
        <path fill="currentColor" d="M20 10a1 1 0 0 1 1 1 9 9 0 0 1-8 8.94V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06A9 9 0 0 1 3 11a1 1 0 1 1 2 0 7 7 0 1 0 14 0 1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

MicFillDuotone.displayName = 'MicFillDuotone';

// Triple export pattern (lucide-react style)
export { MicFillDuotone, MicFillDuotone as MicFillDuotoneIcon, MicFillDuotone as SiMicFillDuotone };
export type { MicFillDuotoneProps };
