import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapBoldProps = Omit<IconBaseProps, 'children'>;

const MapBold = memo(
  forwardRef<SVGSVGElement, MapBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.05 4h.08l.2.06q.03 0 .05.02l.12.06 5.5 3.2 5.5-3.2A1 1 0 0 1 22 5v10.5a1 1 0 0 1-.5.86l-6 3.5-.24.1-.08.02-.05.01h-.31l-.08-.02-.24-.1L9 16.65l-5.5 3.2A1 1 0 0 1 2 19V8.5a1 1 0 0 1 .5-.86l6-3.5.11-.06.06-.02.2-.05h.08L9 4zM4 9.07v8.19l4-2.34V6.74zm6 5.85 4 2.34V9.07l-4-2.33zm6-5.85v8.19l4-2.34V6.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapBold.displayName = 'MapBold';

// Triple export pattern (lucide-react style)
export { MapBold, MapBold as MapBoldIcon, MapBold as SiMapBold };
export default MapBold;
export type { MapBoldProps };
