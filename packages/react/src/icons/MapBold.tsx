import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MapBoldProps = Omit<IconBaseProps, 'children'>;

const MapBold = memo(
  forwardRef<SVGSVGElement, MapBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m8.72 3 .08.01.06.01.06.01.07.03.06.02.05.02.06.03h.01l.01.01 6.15 3.7 6.16-3.7A1 1 0 0 1 23 4v12a1 1 0 0 1-.49.86l-6.66 4h-.01l-.01.01-.04.02-.08.03-.03.01-.1.04-.06.01h-.05l-.08.02h-.11l-.08-.01-.05-.01-.07-.01-.1-.04h-.02l-.08-.04-.04-.02h-.01l-.01-.01-6.15-3.7-6.16 3.7A1 1 0 0 1 1 20V8a1 1 0 0 1 .49-.86l6.66-4h.01l.01-.01.07-.03.04-.02.06-.02.07-.03.07-.01.05-.01h.08L8.65 3h.07M3 8.57v9.66l4.67-2.8V5.77zm6.67 6.86 4.66 2.8V8.57l-4.66-2.8zm6.66-6.86v9.66l4.67-2.8V5.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapBold.displayName = 'MapBold';

// Triple export pattern (lucide-react style)
export { MapBold, MapBold as MapBoldIcon, MapBold as SiMapBold };
export type { MapBoldProps };
