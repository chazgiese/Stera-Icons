import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapFillProps = Omit<IconBaseProps, 'children'>;

const MapFill = memo(
  forwardRef<SVGSVGElement, MapFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.05 4h.08a1 1 0 0 1 .37.14l5.5 3.2 5.5-3.2A1 1 0 0 1 22 5v10.5a1 1 0 0 1-.5.86l-6 3.5-.24.1-.08.02-.05.01h-.31l-.08-.02-.24-.1L9 16.65l-5.5 3.2A1 1 0 0 1 2 19V8.5a1 1 0 0 1 .5-.86l6-3.5.11-.06.06-.02.2-.05h.08L9 4zM4 9.07v8.19l4-2.34V6.74zm12 0v8.19l4-2.34V6.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapFill.displayName = 'MapFill';

// Triple export pattern (lucide-react style)
export { MapFill, MapFill as MapFillIcon, MapFill as SiMapFill };
export default MapFill;
export type { MapFillProps };
