import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicBoldProps = Omit<IconBaseProps, 'children'>;

const MicBold = memo(
  forwardRef<SVGSVGElement, MicBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-bold" {...props}>
      <path fill="currentColor" d="M20 10a1 1 0 0 1 1 1 9 9 0 0 1-8 8.94V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.06A9 9 0 0 1 3 11a1 1 0 1 1 2 0 7 7 0 1 0 14 0 1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MicBold.displayName = 'MicBold';

// Triple export pattern (lucide-react style)
export { MicBold, MicBold as MicBoldIcon, MicBold as SiMicBold };
export default MicBold;
export type { MicBoldProps };
