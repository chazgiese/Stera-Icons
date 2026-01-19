import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ApertureFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureFillDuotone = memo(
  forwardRef<SVGSVGElement, ApertureFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-fill-duotone" {...props}>
      <path d="M14.5 20.65a9 9 0 0 1-7-.86l6.69-3.86.06-.03.25-.16zM5 20.49l.03.02-.05-.04zM20.74 14.16a9 9 0 0 1-4.24 5.63V12l-.01-.26v-.02zM9.7 15.86l.01.02h.01l.03.02.02.01.24.13-4.25 2.45A9 9 0 0 1 3 12zM7.5 12v.29L3.27 9.84A9 9 0 0 1 7.5 4.2zM18.23 5.51A9 9 0 0 1 21 12l-6.67-3.85-.05-.03-.03-.02-.02-.01-.24-.13zM12 3c1.64 0 3.18.44 4.5 1.2L9.82 8.06l-.05.03-.06.04-.21.13v-4.9A9 9 0 0 1 12 3" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a10.98 10.98 0 0 1 3.85 21.3A11 11 0 0 1 5 20.5a10.98 10.98 0 0 1 3.15-18.8Q9.96 1.02 12 1m2.5 14.74-.23.14-.02.02-.06.03-6.7 3.86a9 9 0 0 0 7.01.86zm1.99-4.01.01.27v7.8a9 9 0 0 0 4.24-5.64l-4.25-2.45zM3 12a9 9 0 0 0 2.76 6.49l4.25-2.45-.24-.13-.02-.01-.03-.02-.03-.02zm4.5-7.8a9 9 0 0 0-4.24 5.64l4.25 2.45v-.04L7.5 12zm6.49 3.76.24.13.02.01.03.02.05.03L21 12a9 9 0 0 0-2.77-6.49zm-4.28.17.05-.04.06-.03L16.5 4.2a9 9 0 0 0-7-.85v4.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFillDuotone.displayName = 'ApertureFillDuotone';

// Triple export pattern (lucide-react style)
export { ApertureFillDuotone, ApertureFillDuotone as ApertureFillDuotoneIcon, ApertureFillDuotone as SiApertureFillDuotone };
export default ApertureFillDuotone;
export type { ApertureFillDuotoneProps };
