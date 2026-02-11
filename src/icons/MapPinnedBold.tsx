import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedBoldProps = Omit<IconBaseProps, 'children'>;

const MapPinnedBold = memo(
  forwardRef<SVGSVGElement, MapPinnedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pinned-bold" {...props}>
      <path d="M17 12.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M17 9c2.78 0 5 2.3 5 5.1 0 .9-.33 1.79-.75 2.55s-.97 1.48-1.5 2.08a19 19 0 0 1-1.93 1.9l-.14.1-.04.04h-.01v.01h-.01a1 1 0 0 1-.45.2h-.02a1 1 0 0 1-.3 0h-.02a1 1 0 0 1-.39-.15l-.06-.05-.02-.01-.04-.03-.14-.12a18 18 0 0 1-1.93-1.9c-.53-.6-1.08-1.3-1.5-2.07a5.4 5.4 0 0 1-.75-2.56C12 11.3 14.22 9 17 9m0 2c-1.64 0-3 1.36-3 3.1q0 .67.5 1.58a10 10 0 0 0 1.25 1.73c.45.5.9.95 1.25 1.27.35-.32.8-.76 1.25-1.27a10 10 0 0 0 1.25-1.73q.5-.9.5-1.59c0-1.73-1.36-3.09-3-3.09" clipRule="evenodd" />
        <path fillRule="evenodd" d="M9.05 3h.08l.2.06q.03 0 .05.02l.12.06 5.5 3.2 5.5-3.2A1 1 0 0 1 22 4v4.27a1 1 0 0 1-2 0V5.74l-4.5 2.62a1 1 0 0 1-1 0L10 5.74v8.18l.6.35A1 1 0 0 1 9.59 16L9 15.66l-5.5 3.2A1 1 0 0 1 2 18V7.5a1 1 0 0 1 .5-.86l6-3.5.11-.06.06-.02.2-.05h.08L9 3zM4 8.07v8.19l4-2.34V5.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedBold.displayName = 'MapPinnedBold';

// Triple export pattern (lucide-react style)
export { MapPinnedBold, MapPinnedBold as MapPinnedBoldIcon, MapPinnedBold as SiMapPinnedBold };
export default MapPinnedBold;
export type { MapPinnedBoldProps };
