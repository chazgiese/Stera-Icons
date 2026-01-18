import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaintPaletteRegularProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteRegular = memo(
  forwardRef<SVGSVGElement, PaintPaletteRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 13.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M7.5 9.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 8.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M11.5 7.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M11.5 3.39c3.34-.34 6.1.33 8.06 1.4a8 8 0 0 1 2.3 1.84c.54.67.89 1.44.89 2.2 0 2.13-1.45 3.24-2.69 3.95q-.47.27-.92.49l-.77.41c-.5.3-.63.47-.66.55a1 1 0 0 0-.04.51c.04.14.11.28.27.52.3.45.81 1.13.81 2.24 0 1.35-1.14 2.22-2.44 2.69-1.35.48-3.19.66-5.25.48a13 13 0 0 1-6.44-2.52c-1.89-1.42-3.37-3.45-3.37-5.9 0-2.34.86-4.42 2.62-5.99 1.74-1.55 4.3-2.55 7.62-2.87m7.34 2.7a12.5 12.5 0 0 0-7.2-1.21c-3.12.3-5.34 1.23-6.77 2.5a6.3 6.3 0 0 0-2.12 4.86c0 1.81 1.1 3.45 2.77 4.71a11.6 11.6 0 0 0 5.68 2.23c1.92.17 3.52-.01 4.6-.4 1.14-.41 1.45-.93 1.45-1.28 0-.6-.24-.92-.56-1.42a3 3 0 0 1-.47-.95q-.18-.62.07-1.37c.22-.67.83-1.08 1.32-1.37q.42-.23.85-.45l.86-.46c1.13-.65 1.93-1.37 1.93-2.65 0-.3-.15-.75-.56-1.26a6 6 0 0 0-1.85-1.47" clipRule="evenodd" />
    </IconBase>
  ))
);

PaintPaletteRegular.displayName = 'PaintPaletteRegular';

// Triple export pattern (lucide-react style)
export { PaintPaletteRegular, PaintPaletteRegular as PaintPaletteRegularIcon, PaintPaletteRegular as SiPaintPaletteRegular };
export type { PaintPaletteRegularProps };
