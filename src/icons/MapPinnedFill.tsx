import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedFillProps = Omit<IconBaseProps, 'children'>;

const MapPinnedFill = memo(
  forwardRef<SVGSVGElement, MapPinnedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pinned-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 9.25a4.8 4.8 0 0 1 4.75 4.84c0 .86-.31 1.7-.72 2.44s-.95 1.44-1.47 2.03a19 19 0 0 1-2.08 2.01v.01h-.01l-.03.03-.04.02-.08.04-.04.02-.22.06h-.09a1 1 0 0 1-.25-.05l-.04-.02-.04-.02-.03-.02-.05-.04-.03-.01-.01-.02-.18-.14a17 17 0 0 1-1.9-1.87c-.52-.59-1.06-1.29-1.47-2.03a5 5 0 0 1-.72-2.44A4.8 4.8 0 0 1 17 9.25m0 3.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M9.05 3h.08l.2.06q.03 0 .05.02l.12.06 5.5 3.2 5.5-3.2A1 1 0 0 1 22 4v4.27a1 1 0 0 1-2 0V5.74l-4.5 2.62a1 1 0 0 1-1 0L10 5.74v8.18l.6.35A1 1 0 0 1 9.59 16L9 15.66l-5.5 3.2A1 1 0 0 1 2 18V7.5a1 1 0 0 1 .5-.86l6-3.5.11-.06.06-.02.2-.05h.08L9 3zM4 8.07v8.19l4-2.34V5.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedFill.displayName = 'MapPinnedFill';

// Triple export pattern (lucide-react style)
export { MapPinnedFill, MapPinnedFill as MapPinnedFillIcon, MapPinnedFill as SiMapPinnedFill };
export default MapPinnedFill;
export type { MapPinnedFillProps };
