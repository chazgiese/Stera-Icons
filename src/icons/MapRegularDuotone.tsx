import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MapRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapRegularDuotone = memo(
  forwardRef<SVGSVGElement, MapRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-duotone" {...props}>
      <path d="m16.08 18.67-.75.45-.75-.45V8.42l.37.22c.23.15.53.15.77 0l.36-.22zM9.42 5.33v10.24l-.37-.21a.8.8 0 0 0-.68-.05l-.09.05-.36.22V5.32l.75-.45z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M21.61 3.36a.75.75 0 0 1 1.14.64v12q-.02.41-.36.64l-6.67 4a.8.8 0 0 1-.77 0l-6.28-3.77-6.28 3.77A.75.75 0 0 1 1.25 20V8c0-.26.14-.5.36-.64l6.67-4 .1-.05q.34-.15.67.05l6.28 3.76zM2.75 8.42v10.25l5.53-3.31.1-.05q.34-.15.67.05l6.28 3.76 5.92-3.55V5.32l-5.53 3.32a.8.8 0 0 1-.77 0L8.67 4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapRegularDuotone.displayName = 'MapRegularDuotone';

// Triple export pattern (lucide-react style)
export { MapRegularDuotone, MapRegularDuotone as MapRegularDuotoneIcon, MapRegularDuotone as SiMapRegularDuotone };
export type { MapRegularDuotoneProps };
