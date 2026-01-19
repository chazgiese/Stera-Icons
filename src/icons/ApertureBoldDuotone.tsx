import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ApertureBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureBoldDuotone = memo(
  forwardRef<SVGSVGElement, ApertureBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m9.5 8.26.2-.13h.01l.05-.04.06-.03 6.68-3.85q.94.54 1.74 1.3l-4.25 2.45.18.1.08.04.03.02.03.02L21 12q-.01 1.12-.26 2.16l-4.25-2.45v.01l.01.28v7.8q-.94.53-2 .85v-4.91l-.17.1-.08.06-6.75 3.9a9 9 0 0 1-1.74-1.31l4.25-2.45-.01-.01-.18-.1-.07-.03-.06-.04L3 12q.01-1.12.26-2.16l4.25 2.45v-.21L7.5 12V4.2q.94-.53 2-.85zm2.34 1.24-.07.01a3 3 0 0 0-.8.21h-.02v.01l-.16.08-.03.02h-.01l-.14.1a2.5 2.5 0 0 0-.78.82v.02a3 3 0 0 0-.27.7l-.01.05-.05.4v.27a3 3 0 0 0 .32 1.03l.01.03.08.13.07.1a2.5 2.5 0 0 0 1.84 1.01h.07a3 3 0 0 0 .64-.05l.12-.02a3 3 0 0 0 .56-.23l.02-.01.06-.04a2.5 2.5 0 0 0 .86-.87l.01-.02.02-.04a2.5 2.5 0 0 0 .32-1.2v-.06a3 3 0 0 0-.19-.9l-.04-.1-.12-.23-.08-.13a2.5 2.5 0 0 0-.78-.73l-.1-.05-.16-.09q-.04 0-.08-.03l-.28-.1-.07-.02-.13-.02-.22-.04h-.41m-1.04.3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureBoldDuotone.displayName = 'ApertureBoldDuotone';

// Triple export pattern (lucide-react style)
export { ApertureBoldDuotone, ApertureBoldDuotone as ApertureBoldDuotoneIcon, ApertureBoldDuotone as SiApertureBoldDuotone };
export type { ApertureBoldDuotoneProps };
