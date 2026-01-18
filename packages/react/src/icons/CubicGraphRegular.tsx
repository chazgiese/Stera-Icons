import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubicGraphRegularProps = Omit<IconBaseProps, 'children'>;

const CubicGraphRegular = memo(
  forwardRef<SVGSVGElement, CubicGraphRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 20.2c.42 0 .75.34.75.76V21a.75.75 0 0 1-1.5 0v-.05c0-.42.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M21 4.25a.75.75 0 0 1 0 1.5c-3.85 0-6.2 2.64-8.35 5.81q.15.18.15.44-.01.27-.17.47a.8.8 0 0 1-.78.31c-1.03 1.6-2.06 3.26-3.2 4.53C7.41 18.7 5.93 19.75 4 19.75H3a.75.75 0 0 1 0-1.5H4c1.31 0 2.42-.7 3.53-1.94 1.12-1.25 2.13-2.93 3.3-4.72q.57-.9 1.2-1.79H12a.75.75 0 0 1-.75-.75v-.1a.75.75 0 0 1 1.5-.08c1.97-2.5 4.5-4.62 8.25-4.62M3.78 19.72h.04l-.07-.01zm-.24-.12.05.02-.06-.04zm-.17-1v-.02zm.23-.24.06-.02zm.13-.06H3.7z" clipRule="evenodd" />
        <path fill="currentColor" d="M12 17.2c.42 0 .75.34.75.76v.1a.75.75 0 0 1-1.5 0v-.1c0-.42.34-.75.75-.75M12 14.2c.42 0 .75.34.75.76v.1a.75.75 0 0 1-1.5 0v-.1c0-.42.34-.75.75-.75M3.05 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM6.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM9.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM15.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM18.05 11.25a.75.75 0 0 1 0 1.5h-.1a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5h-.05a.75.75 0 0 1 0-1.5zM12 5.2c.42 0 .75.34.75.76v.1a.75.75 0 0 1-1.5 0v-.1c0-.42.34-.75.75-.75M12 2.26c.42 0 .75.33.75.75v.04a.75.75 0 0 1-1.5 0v-.04c0-.42.34-.75.75-.75" />
    </IconBase>
  ))
);

CubicGraphRegular.displayName = 'CubicGraphRegular';

export { CubicGraphRegular };
export type { CubicGraphRegularProps };
