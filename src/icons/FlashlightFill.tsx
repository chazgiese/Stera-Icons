import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlashlightFillProps = Omit<IconBaseProps, 'children'>;

const FlashlightFill = memo(
  forwardRef<SVGSVGElement, FlashlightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flashlight-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.75 6.34c0 1.26-.5 2.47-1.4 3.36l-.15.16c-.6.6-.95 1.44-.95 2.3V20a2.75 2.75 0 0 1-2.75 2.75h-1A2.75 2.75 0 0 1 8.75 20v-7.84c0-.86-.34-1.7-.95-2.3l-.16-.16c-.89-.89-1.39-2.1-1.39-3.36v-.59h11.5zM12 11a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" />
        <path fill="currentColor" d="M15.5 1.25c1.24 0 2.25 1 2.25 2.25v.75H6.25V3.5c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

FlashlightFill.displayName = 'FlashlightFill';

// Triple export pattern (lucide-react style)
export { FlashlightFill, FlashlightFill as FlashlightFillIcon, FlashlightFill as SiFlashlightFill };
export default FlashlightFill;
export type { FlashlightFillProps };
