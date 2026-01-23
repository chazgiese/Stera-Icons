import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinnedBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinnedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pinned-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.48 3.14A1 1 0 0 1 23 4v5.27a1 1 0 0 1-2 0v-3.5l-5.15 3.09a1 1 0 0 1-1.03 0l-5.15-3.1v9.67l2.41 1.45a1 1 0 0 1-1.03 1.72l-2.38-1.43-6.16 3.69A1 1 0 0 1 1 20V8a1 1 0 0 1 .49-.86l6.67-4 .01-.01.07-.03.04-.02.06-.02.07-.03.11-.02h.1L8.64 3h.07l.08.01.05.01.06.01h.03l.06.03.05.02.07.03.04.02h.01l.01.01 6.15 3.7zM3 8.57v9.66l4.67-2.8V5.77z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M18 10c2.78 0 5 2.3 5 5.1 0 .9-.33 1.79-.75 2.55s-.97 1.48-1.5 2.08a19 19 0 0 1-1.93 1.9l-.14.1-.04.04h-.01v.01h-.01a1 1 0 0 1-1.24 0l-.02-.01-.04-.03-.14-.12a18 18 0 0 1-1.93-1.9c-.53-.6-1.08-1.3-1.5-2.07a5.4 5.4 0 0 1-.75-2.56C13 12.3 15.22 10 18 10m0 2c-1.64 0-3 1.36-3 3.1q0 .67.5 1.58a10 10 0 0 0 1.25 1.73c.45.5.9.95 1.25 1.27.35-.32.8-.76 1.25-1.27a10 10 0 0 0 1.25-1.73q.5-.9.5-1.59c0-1.73-1.36-3.09-3-3.09" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedBoldDuotone.displayName = 'MapPinnedBoldDuotone';

// Triple export pattern (lucide-react style)
export { MapPinnedBoldDuotone, MapPinnedBoldDuotone as MapPinnedBoldDuotoneIcon, MapPinnedBoldDuotone as SiMapPinnedBoldDuotone };
export default MapPinnedBoldDuotone;
export type { MapPinnedBoldDuotoneProps };
