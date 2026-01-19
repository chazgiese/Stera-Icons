import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicOffFillProps = Omit<IconBaseProps, 'children'>;

const MicOffFill = memo(
  forwardRef<SVGSVGElement, MicOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-fill" {...props}>
      <path fill="currentColor" d="M4 10a1 1 0 0 1 1 1 7 7 0 0 0 9.65 6.48l1.5 1.5q-1.45.77-3.15.96V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06A9 9 0 0 1 3 11a1 1 0 0 1 1-1M20 10a1 1 0 0 1 1 1c0 2.02-.67 3.88-1.79 5.38l-1.43-1.43A7 7 0 0 0 19 11a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M13.06 15.89A5.02 5.02 0 0 1 7 11V9.83zM12 1a5 5 0 0 1 5 5v5q-.02 1.38-.67 2.5L7.25 4.43A5 5 0 0 1 12 1M1.3 1.3a1 1 0 0 1 1.4 0l20 20a1 1 0 0 1-1.4 1.4l-20-20a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

MicOffFill.displayName = 'MicOffFill';

// Triple export pattern (lucide-react style)
export { MicOffFill, MicOffFill as MicOffFillIcon, MicOffFill as SiMicOffFill };
export default MicOffFill;
export type { MicOffFillProps };
