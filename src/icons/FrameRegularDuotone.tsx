import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FrameRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FrameRegularDuotone = memo(
  forwardRef<SVGSVGElement, FrameRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="frame-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.75 7.25h1.5v9.5h-1.5v1.5h-9.5v-1.5h-1.5v-9.5h1.5v-1.5h9.5zm-9.5 9.5h9.5v-9.5h-9.5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.25 21a.75.75 0 0 1-1.5 0v-2.75H3a.75.75 0 0 1 0-1.5h4.25zM21 16.75a.75.75 0 0 1 0 1.5h-2.75V21a.75.75 0 0 1-1.5 0v-4.25zM6.5 2.25c.41 0 .75.34.75.75v4.25H3a.75.75 0 0 1 0-1.5h2.75V3c0-.41.34-.75.75-.75M17.5 2.25c.41 0 .75.34.75.75v2.75H21a.75.75 0 0 1 0 1.5h-4.25V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

FrameRegularDuotone.displayName = 'FrameRegularDuotone';

// Triple export pattern (lucide-react style)
export { FrameRegularDuotone, FrameRegularDuotone as FrameRegularDuotoneIcon, FrameRegularDuotone as SiFrameRegularDuotone };
export type { FrameRegularDuotoneProps };
