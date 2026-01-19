import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GavelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GavelRegularDuotone = memo(
  forwardRef<SVGSVGElement, GavelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gavel-duotone" {...props}>
      <path fillRule="evenodd" d="M10.55 5.7q.13.37.4.66l.54.53-4.6 4.6 3.18 3.18 4.6-4.6.53.53q.29.3.65.41l-.83.83 5.48 5.48a2.25 2.25 0 0 1-3.18 3.18l-5.48-5.48-.83.83a2 2 0 0 0-.4-.65l-4.25-4.24a2 2 0 0 0-.65-.41zm2.35 8.26 5.48 5.48a.75.75 0 0 0 1.06-1.06l-5.48-5.48z" clipRule="evenodd" opacity={0.4} />
        <path d="M14.27 7.55 12.02 5.3z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M3.88 10.96c.69-.69 1.8-.69 2.48 0l4.24 4.24c.68.68.68 1.79 0 2.47l-.7.7c-.69.7-1.8.7-2.48 0l-4.24-4.23a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-.7.7c-.1.1-.1.26 0 .36l4.24 4.24c.1.1.26.1.35 0l.71-.7c.1-.1.1-.26 0-.36zM11.66 3.18c.69-.69 1.8-.69 2.48 0l4.24 4.24c.68.68.68 1.8 0 2.47l-.7.71c-.69.69-1.8.69-2.48 0l-4.24-4.24a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-.7.7c-.1.1-.1.26 0 .36l4.24 4.24c.1.1.25.1.35 0l.71-.7c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

GavelRegularDuotone.displayName = 'GavelRegularDuotone';

// Triple export pattern (lucide-react style)
export { GavelRegularDuotone, GavelRegularDuotone as GavelRegularDuotoneIcon, GavelRegularDuotone as SiGavelRegularDuotone };
export type { GavelRegularDuotoneProps };
