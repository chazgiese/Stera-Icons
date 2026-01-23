import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardBoldProps = Omit<IconBaseProps, 'children'>;

const ForwardBold = memo(
  forwardRef<SVGSVGElement, ForwardBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="forward-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.62 3.08a1 1 0 0 1 1.09.21l8 8a1 1 0 0 1 0 1.42l-8 8A1 1 0 0 1 12 20v-4.5h-1a8 8 0 0 0-5.58 2 7 7 0 0 0-1.5 1.89v.02A1 1 0 0 1 2 19c0-3.8.62-6.56 2.51-8.3C6.21 9.14 8.73 8.6 12 8.51V4a1 1 0 0 1 .62-.92M14 9.5a1 1 0 0 1-1 1c-3.73 0-5.88.52-7.14 1.67-.83.77-1.38 1.93-1.66 3.73a10 10 0 0 1 6.8-2.4h2a1 1 0 0 1 1 1v3.09L19.59 12 14 6.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForwardBold.displayName = 'ForwardBold';

// Triple export pattern (lucide-react style)
export { ForwardBold, ForwardBold as ForwardBoldIcon, ForwardBold as SiForwardBold };
export default ForwardBold;
export type { ForwardBoldProps };
