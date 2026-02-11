import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckRegular = memo(
  forwardRef<SVGSVGElement, ShieldCheckRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-check" {...props}>
      <path d="M14.49 9.45a.75.75 0 0 1 1.02 1.1l-3.62 3.4-.31.28q-.16.15-.47.24-.4.1-.8-.06-.29-.13-.43-.3l-.26-.32-1.2-1.5a.75.75 0 1 1 1.17-.94l1.2 1.5q0 .02.03.05l.04-.04z" />
        <path fillRule="evenodd" d="M11.74 1.92a.8.8 0 0 1 .52 0l7.5 2.82c.3.1.49.38.49.7v5.23a12 12 0 0 1-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V5.44c0-.32.2-.6.49-.7zM5.25 5.96v4.71a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48a10.5 10.5 0 0 0 5.8-9.39V5.96L12 3.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckRegular.displayName = 'ShieldCheckRegular';

// Triple export pattern (lucide-react style)
export { ShieldCheckRegular, ShieldCheckRegular as ShieldCheckRegularIcon, ShieldCheckRegular as SiShieldCheckRegular };
export default ShieldCheckRegular;
export type { ShieldCheckRegularProps };
