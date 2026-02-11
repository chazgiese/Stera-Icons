import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicBoldProps = Omit<IconBaseProps, 'children'>;

const MicBold = memo(
  forwardRef<SVGSVGElement, MicBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-bold" {...props}>
      <path d="M4 11.03a1 1 0 0 1 1.22.72 7 7 0 0 0 13.56 0 1 1 0 0 1 1.94.5 9 9 0 0 1-7.72 6.7V20h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-1.06a9 9 0 0 1-7.72-6.7 1 1 0 0 1 .72-1.2" />
        <path fillRule="evenodd" d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MicBold.displayName = 'MicBold';

// Triple export pattern (lucide-react style)
export { MicBold, MicBold as MicBoldIcon, MicBold as SiMicBold };
export default MicBold;
export type { MicBoldProps };
