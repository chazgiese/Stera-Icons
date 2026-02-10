import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureFillProps = Omit<IconBaseProps, 'children'>;

const ApertureFill = memo(
  forwardRef<SVGSVGElement, ApertureFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a9.96 9.96 0 0 1 10 10q0 .84-.14 1.65a10.01 10.01 0 0 1-19.72-3.3A10 10 0 0 1 12 2m2.15 13.55-.07.04-.03.02h-.02v.02L8.14 19a8 8 0 0 0 6 .7zm2-3.55v6.84a8 8 0 0 0 3.6-4.85l-3.6-2.08zM4 12.18a8 8 0 0 0 2.4 5.53l3.6-2.08h-.02l-.06-.04H9.9l-.04-.04h-.02zm3.85-7.02a8 8 0 0 0-3.6 4.85l3.6 2.08V5.16M14 8.36l.08.05h.02l.05.04L20 11.82a8 8 0 0 0-2.4-5.53zM12 4a8 8 0 0 0-2.15.3v4.15l.09-.05.05-.03 5.86-3.38A8 8 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFill.displayName = 'ApertureFill';

// Triple export pattern (lucide-react style)
export { ApertureFill, ApertureFill as ApertureFillIcon, ApertureFill as SiApertureFill };
export default ApertureFill;
export type { ApertureFillProps };
