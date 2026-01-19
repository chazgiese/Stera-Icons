import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlashlightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashlightRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlashlightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flashlight-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 1.25A2.75 2.75 0 0 1 17.75 4v2.34c0 1.26-.5 2.47-1.4 3.36l-.15.16c-.6.6-.95 1.44-.95 2.3V20a2.75 2.75 0 0 1-2.75 2.75h-1A2.75 2.75 0 0 1 8.75 20v-7.84c0-.86-.34-1.7-.95-2.3l-.16-.16a4.8 4.8 0 0 1-1.38-3.12l-.01-.24V4A2.75 2.75 0 0 1 9 1.25zm-6 1.5c-.69 0-1.25.56-1.25 1.25v2.5c.04.8.38 1.57.95 2.14l.16.16c.89.89 1.39 2.1 1.39 3.36V20c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-7.84c0-1.26.5-2.47 1.4-3.36l.15-.16c.6-.6.95-1.44.95-2.3V4c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11 12a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM16.25 5.75h-8.5v-1.5h8.5z" />
    </IconBase>
  ))
);

FlashlightRegularDuotone.displayName = 'FlashlightRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlashlightRegularDuotone, FlashlightRegularDuotone as FlashlightRegularDuotoneIcon, FlashlightRegularDuotone as SiFlashlightRegularDuotone };
export type { FlashlightRegularDuotoneProps };
