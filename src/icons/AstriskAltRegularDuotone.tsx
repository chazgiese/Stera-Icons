import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AstriskAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, AstriskAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-alt-duotone" {...props}>
      <path d="M12 12.88q.39.22.78.47a37 37 0 0 0 .97 7.15c.11.46-.06.9-.4 1.24s-.83.51-1.35.51-1.01-.18-1.35-.51a1.3 1.3 0 0 1-.4-1.24 39 39 0 0 0 .97-7.14zM4.24 5.97a1.3 1.3 0 0 1 1.28.27q.3.3.64.59a37 37 0 0 0 5.06 3.83l.02.91-.79.44a37 37 0 0 0-6.68-2.74 1.3 1.3 0 0 1-.88-.97c-.11-.45-.02-.97.24-1.42s.66-.78 1.11-.91M18.5 6.24c.34-.33.81-.4 1.27-.27s.86.46 1.11.91.35.97.24 1.42a1.3 1.3 0 0 1-.88.97 39 39 0 0 0-6.68 2.74l-.8-.44q0-.45.02-.9a37 37 0 0 0 5.71-4.43" opacity={0.4} />
        <path fill="currentColor" d="M12 1.75c.52 0 1.01.18 1.35.51s.51.78.4 1.24l-.2.85q-.75 3.6-.8 7.22a37 37 0 0 0 7.49 3.17c.45.14.75.5.87.97.11.45.03.97-.23 1.42s-.67.78-1.12.91a1.3 1.3 0 0 1-1.27-.27l-.64-.59a37 37 0 0 0-5.85-4.3 37 37 0 0 0-6.48 4.89c-.35.33-.82.4-1.27.27a2 2 0 0 1-1.12-.91 2 2 0 0 1-.23-1.43c.12-.45.41-.82.87-.96l.83-.26a37 37 0 0 0 6.64-2.9 37 37 0 0 0-.99-8.08c-.11-.46.06-.9.4-1.24s.83-.51 1.35-.51" />
    </IconBase>
  ))
);

AstriskAltRegularDuotone.displayName = 'AstriskAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { AstriskAltRegularDuotone, AstriskAltRegularDuotone as AstriskAltRegularDuotoneIcon, AstriskAltRegularDuotone as SiAstriskAltRegularDuotone };
export type { AstriskAltRegularDuotoneProps };
