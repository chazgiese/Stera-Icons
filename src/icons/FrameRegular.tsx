import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameRegularProps = Omit<IconBaseProps, 'children'>;

const FrameRegular = memo(
  forwardRef<SVGSVGElement, FrameRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="frame" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 2.25c.41 0 .75.34.75.75v2.75H21a.75.75 0 0 1 0 1.5h-2.75v9.5H21a.75.75 0 0 1 0 1.5h-2.75V21a.75.75 0 0 1-1.5 0v-2.75h-9.5V21a.75.75 0 0 1-1.5 0v-2.75H3a.75.75 0 0 1 0-1.5h2.75v-9.5H3a.75.75 0 0 1 0-1.5h2.75V3a.75.75 0 0 1 1.5 0v2.75h9.5V3c0-.41.34-.75.75-.75M7.25 16.75h9.5v-9.5h-9.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FrameRegular.displayName = 'FrameRegular';

// Triple export pattern (lucide-react style)
export { FrameRegular, FrameRegular as FrameRegularIcon, FrameRegular as SiFrameRegular };
export default FrameRegular;
export type { FrameRegularProps };
