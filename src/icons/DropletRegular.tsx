import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletRegularProps = Omit<IconBaseProps, 'children'>;

const DropletRegular = memo(
  forwardRef<SVGSVGElement, DropletRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet" {...props}>
      <path fillRule="evenodd" d="M12 2.25h.11l.02.01.06.02.08.02.06.03.12.07.02.02h.01l.02.02.06.05a20 20 0 0 1 1.05.93A33 33 0 0 1 16.07 6a21 21 0 0 1 2.5 3.56 9 9 0 0 1 1.18 4.09c0 4.44-3.43 8.11-7.75 8.11s-7.75-3.67-7.75-8.11c0-1.4.5-2.8 1.18-4.09a21 21 0 0 1 2.5-3.56 33 33 0 0 1 3.5-3.5l.07-.05.02-.02.03-.02.12-.07.06-.03.08-.02.06-.02h.02zM11.99 4a30 30 0 0 0-2.92 2.96c-.85 1-1.7 2.13-2.32 3.3a7.4 7.4 0 0 0-1 3.38c0 3.69 2.83 6.61 6.25 6.61s6.25-2.92 6.25-6.61c0-1.06-.38-2.21-1-3.38a19 19 0 0 0-2.32-3.3A31 31 0 0 0 12.01 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletRegular.displayName = 'DropletRegular';

// Triple export pattern (lucide-react style)
export { DropletRegular, DropletRegular as DropletRegularIcon, DropletRegular as SiDropletRegular };
export default DropletRegular;
export type { DropletRegularProps };
