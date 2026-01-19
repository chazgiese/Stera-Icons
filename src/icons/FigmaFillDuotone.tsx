import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FigmaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FigmaFillDuotone = memo(
  forwardRef<SVGSVGElement, FigmaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="figma-fill-duotone" {...props}>
      <path d="M12 2h3.34a3.33 3.33 0 0 1 0 6.67H12zM5.33 12c0-1.84 1.5-3.33 3.34-3.33H12v6.66H8.67A3.33 3.33 0 0 1 5.33 12" opacity={0.4} />
        <path fill="currentColor" d="M5.33 5.33C5.33 3.5 6.83 2 8.67 2H12v6.67H8.67a3.33 3.33 0 0 1-3.34-3.34M12 12a3.33 3.33 0 1 1 6.67 0A3.33 3.33 0 0 1 12 12M5.33 18.67c0-1.84 1.5-3.34 3.34-3.34H12v3.34a3.33 3.33 0 1 1-6.67 0" />
    </IconBase>
  ))
);

FigmaFillDuotone.displayName = 'FigmaFillDuotone';

// Triple export pattern (lucide-react style)
export { FigmaFillDuotone, FigmaFillDuotone as FigmaFillDuotoneIcon, FigmaFillDuotone as SiFigmaFillDuotone };
export type { FigmaFillDuotoneProps };
