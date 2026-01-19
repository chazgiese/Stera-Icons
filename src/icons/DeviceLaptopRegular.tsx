import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceLaptopRegularProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopRegular = memo(
  forwardRef<SVGSVGElement, DeviceLaptopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-laptop" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.8 3.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v7.79q.12.16.2.36l1.2 3a1.75 1.75 0 0 1-1.63 2.4H3.48a1.75 1.75 0 0 1-1.63-2.4l1.2-3q.08-.2.2-.36V7.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM4.68 15.75q-.17 0-.23.16l-1.2 3c-.07.16.05.34.23.34h17.04c.18 0 .3-.18.23-.34l-1.2-3a.3.3 0 0 0-.23-.16zm2.52-11c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v7.05h14.5V7.2q0-.83-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54 1 1 0 0 0-.52-.12c-.3-.02-.68-.02-1.25-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceLaptopRegular.displayName = 'DeviceLaptopRegular';

// Triple export pattern (lucide-react style)
export { DeviceLaptopRegular, DeviceLaptopRegular as DeviceLaptopRegularIcon, DeviceLaptopRegular as SiDeviceLaptopRegular };
export type { DeviceLaptopRegularProps };
