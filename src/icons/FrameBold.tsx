import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameBoldProps = Omit<IconBaseProps, 'children'>;

const FrameBold = memo(
  forwardRef<SVGSVGElement, FrameBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="frame-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 2a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5v9H21a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-2.5h-9V21a1 1 0 1 1-2 0v-2.5H3a1 1 0 1 1 0-2h2.5v-9H3a1 1 0 0 1 0-2h2.5V3a1 1 0 0 1 2 0v2.5h9V3a1 1 0 0 1 1-1m-10 14.5h9v-9h-9z" clipRule="evenodd" />
    </IconBase>
  ))
);

FrameBold.displayName = 'FrameBold';

// Triple export pattern (lucide-react style)
export { FrameBold, FrameBold as FrameBoldIcon, FrameBold as SiFrameBold };
export default FrameBold;
export type { FrameBoldProps };
