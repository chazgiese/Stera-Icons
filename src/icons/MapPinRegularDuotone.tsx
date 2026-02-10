import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinRegularDuotone = memo(
  forwardRef<SVGSVGElement, MapPinRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25A7.75 7.75 0 0 1 19.75 10c0 3.28-1.9 6.2-3.69 8.24a25 25 0 0 1-3.74 3.44l-.14.05h-.05l-.23.01h-.03l-.05-.01a1 1 0 0 1-.26-.12l-.02-.02-.3-.22-.82-.68a25 25 0 0 1-2.48-2.45C6.14 16.2 4.25 13.28 4.25 10A7.75 7.75 0 0 1 12 2.25m0 1.5A6.25 6.25 0 0 0 5.75 10c0 2.72 1.6 5.3 3.31 7.26a23 23 0 0 0 2.94 2.8 21 21 0 0 0 2.94-2.8c1.7-1.96 3.31-4.54 3.31-7.26 0-3.45-2.8-6.25-6.25-6.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinRegularDuotone.displayName = 'MapPinRegularDuotone';

// Triple export pattern (lucide-react style)
export { MapPinRegularDuotone, MapPinRegularDuotone as MapPinRegularDuotoneIcon, MapPinRegularDuotone as SiMapPinRegularDuotone };
export default MapPinRegularDuotone;
export type { MapPinRegularDuotoneProps };
