import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandWaveFillProps = Omit<IconBaseProps, 'children'>;

const HandWaveFill = memo(
  forwardRef<SVGSVGElement, HandWaveFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-wave-fill" {...props}>
      <path fill="currentColor" d="M4.72 15.3c.39-.15.82.04.98.42a8.6 8.6 0 0 0 2.4 3.18.75.75 0 1 1-.9 1.2 10 10 0 0 1-2.9-3.82.75.75 0 0 1 .42-.98M10.43 4.68a1.1 1.1 0 0 1 1.5.4l3.15 5.43c-.25.2-.55.51-.81.9-.28.42-.51.95-.56 1.6q-.08.96.55 2.08a.63.63 0 0 0 1.08-.63 2.4 2.4 0 0 1-.38-1.38 2 2 0 0 1 .35-.98 3 3 0 0 1 .9-.87c.2-.11.31-.32.32-.54l.02-2.77a1.1 1.1 0 0 1 2.19 0V8l.44 2.83.03.12a6.2 6.2 0 0 1-2.73 7.56c-3 1.72-6.82.7-8.54-2.28l-3-5.18c-.3-.52-.13-1.18.39-1.48a1.1 1.1 0 0 1 1.44.3l.06.1 1.63 2.81a.63.63 0 0 0 1.08-.63L6.62 7.13c-.3-.52-.12-1.18.4-1.48a1.1 1.1 0 0 1 1.5.4l2.47 4.26a.63.63 0 0 0 1.08-.62l-2.04-3.53c-.3-.52-.13-1.18.4-1.48M18.17 3.49a3.7 3.7 0 0 1 2.72 1.27c.63.7 1.06 1.63 1.06 2.5a.75.75 0 0 1-1.5 0c0-.42-.23-1-.67-1.5a2.2 2.2 0 0 0-1.6-.77.75.75 0 0 1 0-1.5" />
    </IconBase>
  ))
);

HandWaveFill.displayName = 'HandWaveFill';

// Triple export pattern (lucide-react style)
export { HandWaveFill, HandWaveFill as HandWaveFillIcon, HandWaveFill as SiHandWaveFill };
export default HandWaveFill;
export type { HandWaveFillProps };
