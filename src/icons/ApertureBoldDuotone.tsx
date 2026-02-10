import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureBoldDuotone = memo(
  forwardRef<SVGSVGElement, ApertureBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="m9.85 8.45.09-.05.05-.03 5.86-3.38q.96.53 1.75 1.3L14 8.35v.01l.07.04h.03l.01.02h.02l5.87 3.4V12q0 1.03-.25 2l-3.6-2.09v6.93q-.93.57-2 .87v-4.16h-.01l-.07.04-.05.04L8.15 19a8 8 0 0 1-1.75-1.3l3.6-2.08-.03-.01-.05-.03H9.9v-.01l-.03-.02h-.01l-.01-.01L4 12.18V12q0-1.04.25-2l3.6 2.09V5.16a8 8 0 0 1 2-.87zm1.9 1.41-.2.04h-.04l-.18.06q-.03 0-.06.02l-.17.07-.14.07h-.02l-.02.02a2 2 0 0 0-.44.34q-.2.2-.34.44l-.01.02q-.12.22-.19.44v.03a2 2 0 0 0-.09.74l.01.06.01.1.02.09a2 2 0 0 0 .23.65 2 2 0 0 0 .36.47l.1.09.3.23.05.02.12.07.03.01.23.1.15.04.13.03a2 2 0 0 0 .95-.03h.02l.03-.01a2 2 0 0 0 .45-.19l.03-.02.18-.11.06-.05.09-.07.09-.08.05-.05.05-.05q.15-.16.26-.36l.01-.01a2 2 0 0 0 .23-.56v-.05a2 2 0 0 0 0-1.01h-.01l-.12-.34-.04-.08-.07-.14-.07-.11-.16-.2-.01-.02a2 2 0 0 0-.5-.41l-.04-.02a2 2 0 0 0-.55-.23l-.3-.05h-.11L12 9.84z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureBoldDuotone.displayName = 'ApertureBoldDuotone';

// Triple export pattern (lucide-react style)
export { ApertureBoldDuotone, ApertureBoldDuotone as ApertureBoldDuotoneIcon, ApertureBoldDuotone as SiApertureBoldDuotone };
export default ApertureBoldDuotone;
export type { ApertureBoldDuotoneProps };
