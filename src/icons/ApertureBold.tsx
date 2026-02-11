import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureBoldProps = Omit<IconBaseProps, 'children'>;

const ApertureBold = memo(
  forwardRef<SVGSVGElement, ApertureBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a9.96 9.96 0 0 1 10 10q0 .84-.14 1.65a10.01 10.01 0 0 1-19.72-3.3A10 10 0 0 1 12 2m2.15 13.55-.07.04-.03.02h-.02v.02L8.14 19a8 8 0 0 0 6 .7zm2-3.55v6.84a8 8 0 0 0 3.6-4.85l-3.6-2.08zM4 12.18a8 8 0 0 0 2.4 5.53l3.6-2.08h-.02l-.06-.04H9.9l-.04-.04h-.02zm7.75-2.32-.2.04h-.04l-.18.06-.05.02-.32.14-.03.01-.02.02a2 2 0 0 0-.78.8l-.11.22-.09.24-.01.06a2 2 0 0 0-.06.77l.01.07v.03l.07.28.07.18.11.25.05.07.04.07a2 2 0 0 0 .64.63l.04.02.16.09.03.01.1.04.14.06h.03l.05.02.06.02.05.01q.16.05.34.05H12a2 2 0 0 0 .56-.06q.25-.07.48-.2h.02l.07-.05a2 2 0 0 0 .41-.33l.05-.05a2 2 0 0 0 .26-.36l.05-.08a2 2 0 0 0 .25-.95V12a2 2 0 0 0-.26-1.03l-.04-.08a2 2 0 0 0-.63-.67l-.1-.07-.1-.05-.07-.04-.07-.03-.07-.03a2 2 0 0 0-.7-.16h-.12zm-3.9-4.7a8 8 0 0 0-3.6 4.85l3.6 2.08V5.16M14 8.36l.08.05h.02l.05.04L20 11.82a8 8 0 0 0-2.4-5.53zM12 4a8 8 0 0 0-2.15.3v4.15l.09-.05.05-.03 5.86-3.38A8 8 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureBold.displayName = 'ApertureBold';

// Triple export pattern (lucide-react style)
export { ApertureBold, ApertureBold as ApertureBoldIcon, ApertureBold as SiApertureBold };
export default ApertureBold;
export type { ApertureBoldProps };
