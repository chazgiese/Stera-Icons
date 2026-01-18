import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AstriskAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, AstriskAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 13.16 1.06.67A33 33 0 0 0 14 20c.13.53-.06 1.04-.45 1.41-.39.38-.95.59-1.55.59s-1.16-.21-1.55-.59A1.5 1.5 0 0 1 10 20a35 35 0 0 0 .94-6.17zM4.62 5.95a1.5 1.5 0 0 1 1.45.32 35 35 0 0 0 4.87 3.9q.04.62.05 1.25-.54.3-1.1.58a33 33 0 0 0-5.82-2.27 1.5 1.5 0 0 1-1-1.1A2.2 2.2 0 0 1 3.34 7c.3-.52.76-.9 1.28-1.05M17.93 6.27c.4-.38.93-.47 1.45-.32s.98.53 1.28 1.05.4 1.11.27 1.64-.48.94-1 1.1A35 35 0 0 0 14.1 12l-1.1-.58q0-.63.05-1.25a33 33 0 0 0 4.87-3.9" />
        <path fill="currentColor" d="M12 2c.6 0 1.16.21 1.55.59.39.37.58.88.45 1.41l-.19.8a33 33 0 0 0-.8 6.62 33 33 0 0 0 6.92 2.85c.52.15.87.57 1 1.1.13.52.03 1.11-.27 1.63s-.76.9-1.28 1.05-1.06.06-1.45-.32l-.6-.56a33 33 0 0 0-5.33-4 33 33 0 0 0-5.93 4.56c-.39.38-.93.47-1.45.32A2.2 2.2 0 0 1 3.34 17c-.3-.52-.4-1.11-.27-1.63.13-.53.48-.95 1-1.1l.79-.24q3.24-1 6.13-2.61A33 33 0 0 0 10 4c-.13-.53.06-1.04.45-1.41C10.84 2.2 11.4 2 12 2" />
    </IconBase>
  ))
);

AstriskAltBoldDuotone.displayName = 'AstriskAltBoldDuotone';

export { AstriskAltBoldDuotone };
export type { AstriskAltBoldDuotoneProps };
