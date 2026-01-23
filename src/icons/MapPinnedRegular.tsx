import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinnedRegular = memo(
  forwardRef<SVGSVGElement, MapPinnedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pinned" {...props}>
      <path fill="currentColor" d="M18 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M18 10.25a4.8 4.8 0 0 1 4.75 4.84c0 .86-.31 1.7-.72 2.44s-.95 1.44-1.47 2.03a19 19 0 0 1-2.04 1.98l-.04.03v.01h-.01l-.03.03-.12.06-.04.02-.22.06h-.11l-.23-.05-.04-.02-.04-.02-.03-.02-.05-.04-.03-.01-.01-.02-.04-.03-.61-.52c-.39-.36-.91-.86-1.43-1.46-.52-.59-1.06-1.29-1.47-2.03a5 5 0 0 1-.72-2.44A4.8 4.8 0 0 1 18 10.25m0 1.5a3.3 3.3 0 0 0-3.25 3.34q.01.76.53 1.71c.34.62.8 1.23 1.28 1.77s.96 1 1.32 1.34l.12.1.12-.1c.36-.33.84-.8 1.32-1.34s.94-1.15 1.28-1.77q.52-.94.53-1.7A3.3 3.3 0 0 0 18 11.74" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M8.73 3.25h.03l.06.02h.04l.09.03.06.04h.03v.01h.01l6.28 3.77 6.28-3.76a.75.75 0 0 1 1.14.64v5.27a.75.75 0 0 1-1.5 0V5.32l-5.53 3.32a.8.8 0 0 1-.77 0L9.42 5.32v10.25l2.53 1.53a.75.75 0 1 1-.77 1.28l-2.51-1.5-6.28 3.76A.75.75 0 0 1 1.25 20V8q.02-.41.36-.64l6.67-4 .2-.08.08-.02h.04l.06-.01h.07M2.75 8.42v10.25l5.17-3.1V5.32z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedRegular.displayName = 'MapPinnedRegular';

// Triple export pattern (lucide-react style)
export { MapPinnedRegular, MapPinnedRegular as MapPinnedRegularIcon, MapPinnedRegular as SiMapPinnedRegular };
export default MapPinnedRegular;
export type { MapPinnedRegularProps };
