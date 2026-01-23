import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameFillProps = Omit<IconBaseProps, 'children'>;

const FrameFill = memo(
  forwardRef<SVGSVGElement, FrameFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="frame-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 1.5c.83 0 1.5.67 1.5 1.5v2h2a1.5 1.5 0 0 1 0 3h-2v8h2a1.5 1.5 0 0 1 0 3h-2v2a1.5 1.5 0 0 1-3 0v-2H8v2a1.5 1.5 0 0 1-3 0v-2H3a1.5 1.5 0 0 1 0-3h2V8H3a1.5 1.5 0 1 1 0-3h2V3a1.5 1.5 0 1 1 3 0v2h8V3c0-.83.67-1.5 1.5-1.5M8 16h8V8H8z" clipRule="evenodd" />
    </IconBase>
  ))
);

FrameFill.displayName = 'FrameFill';

// Triple export pattern (lucide-react style)
export { FrameFill, FrameFill as FrameFillIcon, FrameFill as SiFrameFill };
export default FrameFill;
export type { FrameFillProps };
