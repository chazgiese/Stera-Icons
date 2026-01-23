import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffBoldProps = Omit<IconBaseProps, 'children'>;

const MicOffBold = memo(
  forwardRef<SVGSVGElement, MicOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.3 1.3a1 1 0 0 1 1.4 0l12.23 12.22.12.12 2.73 2.73.12.12 4.8 4.8a1 1 0 1 1-1.4 1.42l-4.26-4.25A9 9 0 0 1 13 19.94V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06A9 9 0 0 1 3 11a1 1 0 1 1 2 0 7 7 0 0 0 10.6 6l-1.49-1.47A4.98 4.98 0 0 1 7 11V8.41l-5.7-5.7a1 1 0 0 1 0-1.42M9 11a3 3 0 0 0 3.54 2.95L9 10.41z" clipRule="evenodd" />
        <path fill="currentColor" d="M20 10a1 1 0 0 1 1 1c0 1.54-.39 3-1.08 4.27a1 1 0 0 1-1.76-.95q.82-1.5.84-3.32a1 1 0 0 1 1-1M12 1a5 5 0 0 1 5 5v5.05a1 1 0 0 1-2 0V6a3 3 0 0 0-5.48-1.69 1 1 0 0 1-1.65-1.13A5 5 0 0 1 12 1" />
    </IconBase>
  ))
);

MicOffBold.displayName = 'MicOffBold';

// Triple export pattern (lucide-react style)
export { MicOffBold, MicOffBold as MicOffBoldIcon, MicOffBold as SiMicOffBold };
export default MicOffBold;
export type { MicOffBoldProps };
