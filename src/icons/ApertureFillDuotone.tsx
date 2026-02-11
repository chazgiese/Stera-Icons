import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureFillDuotone = memo(
  forwardRef<SVGSVGElement, ApertureFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-fill-duotone" {...props}>
      <path d="M14.15 19.7a8 8 0 0 1-6-.69l5.87-3.39h.01l.02-.01.03-.02.07-.04zM19.75 14a8 8 0 0 1-3.6 4.84V11.9zM9.84 15.55h.02l.04.03.02.01.06.03.02.01-3.6 2.08A8 8 0 0 1 4 12.18zM7.85 12v.09L4.25 10a8 8 0 0 1 3.6-4.85zM17.6 6.29a8 8 0 0 1 2.4 5.53l-5.85-3.37-.05-.03-.02-.01-.08-.04zM12 4c1.4 0 2.7.36 3.85.99L9.99 8.37q-.02 0-.05.03l-.09.05V4.3A8 8 0 0 1 12 4" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a9.96 9.96 0 0 1 10 10q0 .84-.14 1.65a10.01 10.01 0 0 1-19.72-3.3A10 10 0 0 1 12 2m2.15 13.55-.07.04-.03.02h-.02v.02L8.14 19a8 8 0 0 0 6 .7zm2-3.55v6.84a8 8 0 0 0 3.6-4.85l-3.6-2.08zM4 12.18a8 8 0 0 0 2.4 5.53l3.6-2.08h-.02l-.06-.04H9.9l-.04-.04h-.02zm3.85-7.02a8 8 0 0 0-3.6 4.85l3.6 2.08V5.16M14 8.36l.08.05h.02l.05.04L20 11.82a8 8 0 0 0-2.4-5.53zM12 4a8 8 0 0 0-2.15.3v4.15l.09-.05.05-.03 5.86-3.38A8 8 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFillDuotone.displayName = 'ApertureFillDuotone';

// Triple export pattern (lucide-react style)
export { ApertureFillDuotone, ApertureFillDuotone as ApertureFillDuotoneIcon, ApertureFillDuotone as SiApertureFillDuotone };
export default ApertureFillDuotone;
export type { ApertureFillDuotoneProps };
