import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinMinusFillProps = Omit<IconBaseProps, 'children'>;

const MapPinMinusFill = memo(
  forwardRef<SVGSVGElement, MapPinMinusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-minus-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a8 8 0 0 1 8 8c0 3.37-1.95 6.35-3.75 8.4a25 25 0 0 1-3.64 3.4q-.2.14-.44.18h-.34a1 1 0 0 1-.4-.16h-.01l-.01-.01-.02-.02-.3-.23q-.32-.23-.83-.68c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10a8 8 0 0 1 8-8M9.5 9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinMinusFill.displayName = 'MapPinMinusFill';

// Triple export pattern (lucide-react style)
export { MapPinMinusFill, MapPinMinusFill as MapPinMinusFillIcon, MapPinMinusFill as SiMapPinMinusFill };
export default MapPinMinusFill;
export type { MapPinMinusFillProps };
