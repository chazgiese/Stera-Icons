import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinnedRegularDuotone = memo(
  forwardRef<SVGSVGElement, MapPinnedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pinned-duotone" {...props}>
      <path fillRule="evenodd" d="M20.62 3.35a.75.75 0 0 1 1.13.65v4.27a.75.75 0 0 1-1.5 0V5.3l-4.87 2.85a.8.8 0 0 1-.76 0L9.75 5.3v8.77l.72.42a.75.75 0 0 1-.75 1.3L9 15.37l-5.62 3.28A.75.75 0 0 1 2.25 18V7.5q.01-.42.37-.65l6-3.5q.17-.1.35-.1h.06q.18 0 .34.1L15 6.63zM3.75 7.93v8.76l4.5-2.62V5.3z" clipRule="evenodd" opacity={.4} />
        <path d="M17 12.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M17 9.25a4.8 4.8 0 0 1 4.75 4.84c0 .86-.31 1.7-.72 2.44s-.95 1.44-1.47 2.03a19 19 0 0 1-2.08 2.01v.01h-.01l-.03.03-.12.06-.04.02-.22.06h-.11l-.23-.05-.04-.02-.04-.02-.03-.02-.05-.04-.03-.01-.01-.02-.18-.14a17 17 0 0 1-3.37-3.9 5 5 0 0 1-.72-2.44A4.8 4.8 0 0 1 17 9.25m0 1.5a3.3 3.3 0 0 0-3.25 3.34q.01.76.53 1.71c.34.62.8 1.23 1.28 1.77s.96 1 1.32 1.34l.12.1.12-.1c.36-.33.84-.8 1.32-1.34s.94-1.15 1.28-1.77q.52-.94.53-1.7A3.3 3.3 0 0 0 17 10.74" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedRegularDuotone.displayName = 'MapPinnedRegularDuotone';

// Triple export pattern (lucide-react style)
export { MapPinnedRegularDuotone, MapPinnedRegularDuotone as MapPinnedRegularDuotoneIcon, MapPinnedRegularDuotone as SiMapPinnedRegularDuotone };
export default MapPinnedRegularDuotone;
export type { MapPinnedRegularDuotoneProps };
