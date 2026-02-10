import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinFillProps = Omit<IconBaseProps, 'children'>;

const MapPinFill = memo(
  forwardRef<SVGSVGElement, MapPinFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a8 8 0 0 1 8 8c0 3.37-1.95 6.35-3.75 8.4a25 25 0 0 1-3.58 3.35q-.21.17-.5.23h-.34a1 1 0 0 1-.4-.16h-.01l-.01-.01-.02-.02-.3-.23q-.32-.23-.83-.68c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10a8 8 0 0 1 8-8m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinFill.displayName = 'MapPinFill';

// Triple export pattern (lucide-react style)
export { MapPinFill, MapPinFill as MapPinFillIcon, MapPinFill as SiMapPinFill };
export default MapPinFill;
export type { MapPinFillProps };
