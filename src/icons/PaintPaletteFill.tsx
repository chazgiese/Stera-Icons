import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaintPaletteFillProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteFill = memo(
  forwardRef<SVGSVGElement, PaintPaletteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="paint-palette-fill" {...props}>
      <path fillRule="evenodd" d="M11.47 3.14c3.4-.33 6.2.34 8.2 1.43q1.51.83 2.38 1.91c.57.7.95 1.51.95 2.35 0 2.28-1.56 3.45-2.82 4.17q-.49.28-.92.5l-.76.4c-.49.29-.55.43-.55.42-.07.2-.05.3-.04.37.03.09.08.2.24.43.29.45.85 1.19.85 2.38 0 1.52-1.28 2.45-2.6 2.93-1.4.5-3.27.68-5.36.5a13.4 13.4 0 0 1-6.57-2.58C2.55 16.91 1 14.81 1 12.25c0-2.4.89-4.55 2.7-6.17q2.72-2.41 7.77-2.94M12 13.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M7.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

PaintPaletteFill.displayName = 'PaintPaletteFill';

// Triple export pattern (lucide-react style)
export { PaintPaletteFill, PaintPaletteFill as PaintPaletteFillIcon, PaintPaletteFill as SiPaintPaletteFill };
export default PaintPaletteFill;
export type { PaintPaletteFillProps };
