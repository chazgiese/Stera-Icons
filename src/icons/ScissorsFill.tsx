import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScissorsFillProps = Omit<IconBaseProps, 'children'>;

const ScissorsFill = memo(
  forwardRef<SVGSVGElement, ScissorsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.23 5.62c.95-.3 1.98.12 2.44 1.01.18.36.05.8-.3 1L8.2 15.8a3.75 3.75 0 1 1-1.26-2.16l1.48-.85 1.04-2.68c.3-.78.94-1.37 1.73-1.62zM5.58 15.88a1.25 1.25 0 1 0-2.16 1.25 1.25 1.25 0 0 0 2.16-1.25m5.92-5.63a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M22.4 16.26c.35.2.48.64.3 1a2.06 2.06 0 0 1-2.44 1.02l-9.03-2.77 4.93-2.86z" />
        <path fill="currentColor" fillRule="evenodd" d="M1.28 5.5a3.75 3.75 0 0 1 6.94 2.57l.76.44a4 4 0 0 0-.7 1.15l-.41 1.09-.9-.52A3.75 3.75 0 0 1 1.28 5.5m3.88.8A1.25 1.25 0 1 0 3.9 8.46 1.25 1.25 0 0 0 5.16 6.3" clipRule="evenodd" />
    </IconBase>
  ))
);

ScissorsFill.displayName = 'ScissorsFill';

// Triple export pattern (lucide-react style)
export { ScissorsFill, ScissorsFill as ScissorsFillIcon, ScissorsFill as SiScissorsFill };
export type { ScissorsFillProps };
