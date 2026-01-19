import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaintPaletteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteBoldDuotone = memo(
  forwardRef<SVGSVGElement, PaintPaletteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paint-palette-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.47 3.14c3.4-.34 6.2.33 8.2 1.42q1.51.83 2.38 1.92c.57.7.95 1.51.95 2.35 0 2.27-1.56 3.45-2.82 4.17l-.92.5q-.44.2-.76.4c-.5.29-.55.42-.55.41-.07.21-.05.31-.04.37.03.1.08.2.24.44.29.44.85 1.18.85 2.38 0 1.52-1.28 2.45-2.6 2.93-1.4.5-3.27.68-5.36.5a13.4 13.4 0 0 1-6.57-2.58C2.55 16.9 1 14.81 1 12.25c0-2.4.89-4.55 2.7-6.17 1.8-1.6 4.41-2.61 7.77-2.94m7.25 3.18a12.3 12.3 0 0 0-7.06-1.2c-3.08.31-5.24 1.22-6.62 2.45A6 6 0 0 0 3 12.24c0 1.7 1.03 3.28 2.67 4.51a11.4 11.4 0 0 0 5.55 2.18c1.9.17 3.46-.01 4.5-.39 1.11-.4 1.28-.85 1.28-1.04 0-.51-.19-.77-.52-1.28a4 4 0 0 1-.5-1.03q-.19-.7.07-1.5c.26-.77.95-1.23 1.44-1.51q.42-.25.85-.47.45-.22.85-.45c1.12-.63 1.81-1.3 1.81-2.43 0-.23-.12-.62-.5-1.1a6 6 0 0 0-1.78-1.41" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M7.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M11.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

PaintPaletteBoldDuotone.displayName = 'PaintPaletteBoldDuotone';

// Triple export pattern (lucide-react style)
export { PaintPaletteBoldDuotone, PaintPaletteBoldDuotone as PaintPaletteBoldDuotoneIcon, PaintPaletteBoldDuotone as SiPaintPaletteBoldDuotone };
export type { PaintPaletteBoldDuotoneProps };
