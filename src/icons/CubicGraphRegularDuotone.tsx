import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubicGraphRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubicGraphRegularDuotone = memo(
  forwardRef<SVGSVGElement, CubicGraphRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cubic-graph-duotone" {...props}>
      <path d="M12 20.2c.42 0 .75.34.75.76V21a.75.75 0 0 1-1.5 0v-.05c0-.42.34-.75.75-.75M12 17.2c.42 0 .75.34.75.76v.1a.75.75 0 0 1-1.5 0v-.1c0-.42.34-.75.75-.75M12 14.2c.42 0 .75.34.75.76v.1a.75.75 0 0 1-1.5 0v-.1c0-.42.34-.75.75-.75M12.65 11.56a.74.74 0 0 1-.02.9.8.8 0 0 1-.78.33l.24-.38zM3.05 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM6.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM9.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM15.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM18.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5h-.05a.75.75 0 0 1 0-1.5zM12 8.2c.39 0 .7.3.75.67q-.37.46-.7.93H12a.75.75 0 0 1-.75-.75v-.1c0-.4.34-.74.75-.74M12 5.2c.42 0 .75.34.75.76v.1a.75.75 0 0 1-1.5 0v-.1c0-.42.34-.75.75-.75M12 2.26c.42 0 .75.33.75.75v.04a.75.75 0 0 1-1.5 0v-.04c0-.42.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M21 4.25a.75.75 0 0 1 0 1.5c-4.19 0-6.61 3.13-8.91 6.66-1.11 1.71-2.21 3.53-3.44 4.9C7.41 18.7 5.93 19.75 4 19.75H3a.75.75 0 0 1 0-1.5H4c1.31 0 2.42-.7 3.53-1.94 1.12-1.25 2.13-2.93 3.3-4.72C13.08 8.12 15.91 4.25 21 4.25M3.78 19.72h.04l-.07-.01zm-.24-.12.05.02-.06-.04zm-.17-1v-.02zm.23-.24.06-.02zm.13-.06H3.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

CubicGraphRegularDuotone.displayName = 'CubicGraphRegularDuotone';

// Triple export pattern (lucide-react style)
export { CubicGraphRegularDuotone, CubicGraphRegularDuotone as CubicGraphRegularDuotoneIcon, CubicGraphRegularDuotone as SiCubicGraphRegularDuotone };
export default CubicGraphRegularDuotone;
export type { CubicGraphRegularDuotoneProps };
