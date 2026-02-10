import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfRegular = memo(
  forwardRef<SVGSVGElement, ShieldHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-half" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.74 1.92a.8.8 0 0 1 .52 0l7.5 2.82c.3.1.49.38.49.7v5.23a12 12 0 0 1-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V5.44c0-.32.2-.6.49-.7zM5.25 5.96v4.71a10.5 10.5 0 0 0 5.8 9.4l.2.1V3.7zm7.5 14.2.2-.1a10.5 10.5 0 0 0 5.8-9.39V5.96l-6-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfRegular.displayName = 'ShieldHalfRegular';

// Triple export pattern (lucide-react style)
export { ShieldHalfRegular, ShieldHalfRegular as ShieldHalfRegularIcon, ShieldHalfRegular as SiShieldHalfRegular };
export default ShieldHalfRegular;
export type { ShieldHalfRegularProps };
