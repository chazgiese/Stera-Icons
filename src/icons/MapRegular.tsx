import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapRegularProps = Omit<IconBaseProps, 'children'>;

const MapRegular = memo(
  forwardRef<SVGSVGElement, MapRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="map" {...props}>
      <path fillRule="evenodd" d="M9.03 4.25q.18 0 .34.1L15 7.63l5.62-3.28a.75.75 0 0 1 1.13.65v10.5q-.01.42-.37.65l-6 3.5q-.17.1-.35.1h-.06a1 1 0 0 1-.34-.1h-.01L9 16.36l-5.62 3.28A.75.75 0 0 1 2.25 19V8.5q.01-.42.37-.65l6-3.5q.17-.1.35-.1h.06M3.75 8.93v8.76l4.5-2.62V6.3zm6 6.14 4.5 2.62V8.93L9.75 6.3zm6-6.14v8.76l4.5-2.62V6.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapRegular.displayName = 'MapRegular';

// Triple export pattern (lucide-react style)
export { MapRegular, MapRegular as MapRegularIcon, MapRegular as SiMapRegular };
export default MapRegular;
export type { MapRegularProps };
