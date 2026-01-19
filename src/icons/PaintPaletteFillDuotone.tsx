import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaintPaletteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteFillDuotone = memo(
  forwardRef<SVGSVGElement, PaintPaletteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paint-palette-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.47 3.14c3.4-.34 6.2.33 8.2 1.42q1.51.83 2.38 1.92c.57.7.95 1.51.95 2.35 0 2.27-1.56 3.45-2.82 4.17l-.92.5q-.44.2-.76.4c-.5.29-.55.42-.55.41-.07.21-.05.31-.04.37.03.1.08.2.24.44.29.44.85 1.18.85 2.38 0 1.52-1.28 2.45-2.6 2.93-1.4.5-3.27.68-5.36.5a13.4 13.4 0 0 1-6.57-2.58C2.55 16.9 1 14.81 1 12.25c0-2.4.89-4.55 2.7-6.17 1.8-1.6 4.41-2.61 7.77-2.94M12 13.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M7.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M7.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M11.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

PaintPaletteFillDuotone.displayName = 'PaintPaletteFillDuotone';

// Triple export pattern (lucide-react style)
export { PaintPaletteFillDuotone, PaintPaletteFillDuotone as PaintPaletteFillDuotoneIcon, PaintPaletteFillDuotone as SiPaintPaletteFillDuotone };
export default PaintPaletteFillDuotone;
export type { PaintPaletteFillDuotoneProps };
