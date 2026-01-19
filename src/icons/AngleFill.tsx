import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AngleFillProps = Omit<IconBaseProps, 'children'>;

const AngleFill = memo(
  forwardRef<SVGSVGElement, AngleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-fill" {...props}>
      <path fill="currentColor" d="M6 3.5c.83 0 1.5.67 1.5 1.5v12.5H20a1.5 1.5 0 0 1 0 3H6A1.5 1.5 0 0 1 4.5 19V5c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M18.85 13.24a1.5 1.5 0 0 1 1.9.96v.01a1.5 1.5 0 0 1-2.86.93 1.5 1.5 0 0 1 .96-1.9M16.44 9.55a1.5 1.5 0 0 1 2.1.33v.01a1.5 1.5 0 0 1-2.42 1.77v-.01a1.5 1.5 0 0 1 .32-2.1M13.01 6.79a1.5 1.5 0 1 1 .34 2.1 1.5 1.5 0 0 1-.34-2.1M8.9 5.22a1.5 1.5 0 1 1 .97 1.9l-.01-.01a1.5 1.5 0 0 1-.96-1.9" />
    </IconBase>
  ))
);

AngleFill.displayName = 'AngleFill';

// Triple export pattern (lucide-react style)
export { AngleFill, AngleFill as AngleFillIcon, AngleFill as SiAngleFill };
export type { AngleFillProps };
