import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapRegularProps = Omit<IconBaseProps, 'children'>;

const MapRegular = memo(
  forwardRef<SVGSVGElement, MapRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="map" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.73 3.25h.03l.06.02h.04l.09.03.06.04h.03v.01h.01l6.28 3.78 6.28-3.77a.75.75 0 0 1 1.14.64v12q-.02.41-.36.64l-6.67 4-.1.05h-.02l-.08.04-.1.01h-.18l-.09-.01-.09-.03-.11-.06-6.28-3.77-6.28 3.77A.75.75 0 0 1 1.25 20V8q.02-.41.36-.64l6.67-4 .2-.08.08-.02h.04l.06-.01h.07M2.75 8.42v10.25l5.17-3.1V5.32zm6.67 7.15 5.16 3.1V8.42l-5.16-3.1zm6.66-7.15v10.25l5.17-3.1V5.32z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapRegular.displayName = 'MapRegular';

// Triple export pattern (lucide-react style)
export { MapRegular, MapRegular as MapRegularIcon, MapRegular as SiMapRegular };
export default MapRegular;
export type { MapRegularProps };
