import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugFillProps = Omit<IconBaseProps, 'children'>;

const PlugFill = memo(
  forwardRef<SVGSVGElement, PlugFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="plug-fill" {...props}>
      <path d="M5.47 10.1a1.5 1.5 0 0 1 2.08.03l6.32 6.32c.53.54.58 1.38.13 1.97l-.1.12-.63.68-.03.02a6 6 0 0 1-7.72.65l-2.81 2.82a1 1 0 1 1-1.42-1.42l2.82-2.81a6 6 0 0 1 .65-7.72l.02-.03zM21.3 1.3a1 1 0 1 1 1.4 1.4L19.9 5.53a6 6 0 0 1-.67 7.75l-.69.63a1.5 1.5 0 0 1-2.08-.03l-.95-.96-.8.8a1 1 0 1 1-1.4-1.42l.78-.79-1.58-1.59-.8.8a1 1 0 1 1-1.4-1.42l.78-.79-.95-.95a1.5 1.5 0 0 1-.03-2.08l.63-.69.03-.02a6 6 0 0 1 7.71-.65z" />
    </IconBase>
  ))
);

PlugFill.displayName = 'PlugFill';

// Triple export pattern (lucide-react style)
export { PlugFill, PlugFill as PlugFillIcon, PlugFill as SiPlugFill };
export default PlugFill;
export type { PlugFillProps };
