import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ApertureFillProps = Omit<IconBaseProps, 'children'>;

const ApertureFill = memo(
  forwardRef<SVGSVGElement, ApertureFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a10.98 10.98 0 0 1 3.85 21.3A11 11 0 0 1 5 20.5a10.98 10.98 0 0 1 3.15-18.8Q9.96 1.02 12 1m2.5 14.74-.23.14-.02.02-.06.03-6.7 3.86a9 9 0 0 0 7.01.86zm1.99-4.01.01.27v7.8a9 9 0 0 0 4.24-5.64l-4.25-2.45zM3 12a9 9 0 0 0 2.76 6.49l4.25-2.45-.24-.13-.02-.01-.03-.02-.03-.02zm4.5-7.8a9 9 0 0 0-4.24 5.64l4.25 2.45v-.04L7.5 12zm6.49 3.76.24.13.02.01.03.02.05.03L21 12a9 9 0 0 0-2.77-6.49zm-4.28.17.05-.04.06-.03L16.5 4.2a9 9 0 0 0-7-.85v4.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFill.displayName = 'ApertureFill';

// Triple export pattern (lucide-react style)
export { ApertureFill, ApertureFill as ApertureFillIcon, ApertureFill as SiApertureFill };
export default ApertureFill;
export type { ApertureFillProps };
