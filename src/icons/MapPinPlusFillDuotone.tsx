import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-pin-plus-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 6.5a1 1 0 0 1 1 1V9h1.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0V11H9.5a1 1 0 1 1 0-2H11V7.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a8 8 0 0 1 8 8c0 3.37-1.95 6.35-3.75 8.4a25 25 0 0 1-3.58 3.35q-.21.17-.5.23h-.34a1 1 0 0 1-.4-.16h-.01l-.01-.01-.02-.02-.3-.23q-.32-.23-.83-.68c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10a8 8 0 0 1 8-8m0 4.5a1 1 0 0 0-1 1V9H9.5a1 1 0 0 0 0 2H11v1.5a1 1 0 1 0 2 0V11h1.5a1 1 0 1 0 0-2H13V7.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

MapPinPlusFillDuotone.displayName = 'MapPinPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { MapPinPlusFillDuotone, MapPinPlusFillDuotone as MapPinPlusFillDuotoneIcon, MapPinPlusFillDuotone as SiMapPinPlusFillDuotone };
export default MapPinPlusFillDuotone;
export type { MapPinPlusFillDuotoneProps };
