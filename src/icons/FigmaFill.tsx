import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FigmaFillProps = Omit<IconBaseProps, 'children'>;

const FigmaFill = memo(
  forwardRef<SVGSVGElement, FigmaFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="figma-fill" {...props}>
      <path fill="currentColor" d="M11.45 19.33a3.12 3.12 0 1 1-3.12-3.11h3.12zM8.33 8.88h3.12v6.24H8.33a3.12 3.12 0 0 1-.01-6.24zM15.69 8.88a3.12 3.12 0 1 1-.05 0h.05M11.45 7.78H8.33a3.12 3.12 0 1 1 0-6.23h3.12zM15.67 1.55a3.12 3.12 0 0 1 0 6.23h-3.12V1.55z" />
    </IconBase>
  ))
);

FigmaFill.displayName = 'FigmaFill';

// Triple export pattern (lucide-react style)
export { FigmaFill, FigmaFill as FigmaFillIcon, FigmaFill as SiFigmaFill };
export default FigmaFill;
export type { FigmaFillProps };
